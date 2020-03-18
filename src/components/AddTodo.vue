<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Add</button>
    </form>
</template>

<script>
    export default {
        name: "AddTodo",
        data(){
            return{
                title:""
            }
        },
        methods:{
            onSubmit(){
                console.log(this.title);
                if(this.title.trim()){
                    const todo = {
                        id: new Date(),
                        title: this.title,
                        completed: false
                    };
                this.$emit('add-todo', todo);
                this.title = '';
                }
            }
        }
    }
</script>

<style scoped>

</style>