<template>
    <div class="margin-top">
        <button class='ui button icon' v-on:click="openForm" v-show="!isCreating">
            <i class='plus icon'></i>
        </button>
        <div class='ui card' v-show="isCreating">
            <div class='content'>
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input type='text' v-model="title">
                    </div>
                    <div class='field'>
                        <label>Project</label>
                        <input type='text' v-model="project">
                    </div>
                    <div class='ui two button attached buttons'>
                        <button class='ui basic blue button' v-on:click="sendForm">
                            Create
                        </button>
                        <button class='ui basic red button' v-on:click="cancelForm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isCreating: false,
                title: '',
                project: ''
            }
        },
        methods: {
            openForm() {
                this.isCreating = true;
            },
            cancelForm() {
                this.isCreating = false;
            },
            sendForm() {
                if (this.title && this.project) {
                    const title = this.title;
                    const project = this.project;

                    this.title = '';
                    this.project = '';
                    this.isCreating = false;

                    this.$emit('create-todo', {
                        title,
                        project,
                        done: false,
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .margin-top {
        margin-top: 30px;
    }
</style>
