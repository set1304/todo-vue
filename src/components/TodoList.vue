<template>
    <div>
        <ul>
            <TodoItem
                    v-for="(todo, i) in todos"
                    v-bind:todo="todo"
                    v-bind:key="i"
                    v-bind:i="i"
                    v-on:remove-todo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
    import TodoItem from "@/components/TodoItem";
    export default {
        props:["todos"],
        name: "TodoList",
        components: {
            TodoItem,
        },
        methods:{
            removeTodo(id){
                this.$emit('remove-todo', id);
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 50px auto;
        padding: 0;
        width: 400px;
    }

</style>