<template>
    <div>
        <h2>Todos</h2>
        <AddTodo
                @add-todo="addTodo"
        />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not-completed</option>
        </select>
        <Loader v-if="loading" />
        <TodoList
                v-else-if="filteredTodos.length"
                v-bind:todos="filteredTodos"
                @remove-todo="removeTodo"
        />
        <p v-else>No todos</p>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    import TodoList from "@/components/TodoList";
    import AddTodo from "@/components/AddTodo";
    import Loader from "@/components/Loader";
    export default {
        name: 'Todos',
        components: {
            AddTodo,
            TodoList,
            Loader
        },
        data() {
            return{
                todos: [],
                loading: true,
                filter: 'all'
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.todos = json;
                        this.loading = false;
                    }, 1000)
                })
        },
        // watch:{
        //     filter(value){
        //         console.log(value);
        //     }
        // },
        computed: {
            // eslint-disable-next-line vue/return-in-computed-property
            filteredTodos() {
                if(this.filter === 'all'){
                    return this.todos
                }
                if(this.filter === 'completed'){
                    return this.todos.filter(t => t.completed)
                }
                if(this.filter === 'not-completed'){
                    return this.todos.filter(t => !t.completed)
                }
            }
        },
        methods:{
            removeTodo(id){
                this.todos = this.todos.filter( t => t.id !== id)
            },
            addTodo(todo){
                this.todos.push(todo);
            }
        }
    }
</script>

<style scoped>

</style>