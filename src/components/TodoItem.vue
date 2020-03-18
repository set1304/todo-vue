<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox"
                   v-on:change="todo.completed = !todo.completed" />
            <b>{{i+1}}</b>
        {{todo.title | uppercase}}
        </span>

        <button v-on:click="$emit('remove-todo', todo.id)">X</button>
    </li>
</template>

<script>
    export default {
        props:{
            todo:{
                type: Object,
                required: true
            },
            i: Number
        },
        filters: {
            uppercase(value){
                return value.toUpperCase()
            }
        },
        methods:{

        },
        name: "TodoItem"
    }
</script>

<style scoped>
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{
        width: 20px;
        background: brown;
        color: white;
        padding: 1px;
    }

    .done{
        text-decoration: line-through;
    }

</style>