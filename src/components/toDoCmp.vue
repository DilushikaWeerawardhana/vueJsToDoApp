<template>
    <div class='ui card'>
        <div class='content' v-show="!isEditing">
            <div class='header'>
                {{ data.title }}
            </div>
            <div class='meta'>
                {{ data.project }}
            </div>
            <div class='extra content'>
                <span class='right floated edit icon' v-on:click="startEditing(data)">
                    <i class='edit icon'></i>
                </span>
                <span class='right floated trash icon' v-on:click="deleteTodo(data)">
                    <i class='trash icon'></i>
                </span>
            </div>
        </div>

        <div class='content' v-show="isEditing">
            <div class='ui form'>
                <div class='field'>
                    <label>Title</label>
                    <input type='text' v-model="data.title">
                </div>
                <div class='field'>
                    <label>Project</label>
                    <input type='text' v-model="data.project">
                </div>
                <div class='ui two button attached buttons'>
                    <button class='ui basic blue button' v-on:click="finishEditing">
                        Edit
                    </button>
                    <button class='ui basic red button' v-on:click="cancelEditing">
                        Cancel
                    </button>
                </div>
            </div>
        </div>

        <div class="ui bottom basic button red"
             v-on:click="completeToDo(data)" v-show="!data.done && !isEditing"> Complete
        </div>
        <div class="ui bottom basic button teal" v-show="data.done && !isEditing"> Completed</div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                isEditing: false,
                tempTitle: '',
                tempProject: ''
            }

        },
        methods: {
            deleteTodo(todo) {
                this.$emit('delete-todo', todo);
            },
            completeToDo(todo) {
                this.$emit('complete-todo', todo);
            },
            startEditing(todo) {
                this.tempTitle = todo.title;
                this.tempProject = todo.project;

                this.isEditing = true;
            },
            cancelEditing() {
                this.data.title = this.tempTitle;
                this.data.project = this.tempProject;

                this.isEditing = false;
            },
            finishEditing() {
                this.isEditing = false;
            }
        }
    }
</script>
