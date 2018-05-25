<template>
    <div id="todolist">
        <div class="ui grid">
            <div class="four wide column">
                <div class="ui vertical fluid tabular menu">
                    <a class="active item">
                        All
                    </a>
                    <a class="item">
                        Completed
                    </a>
                </div>
            </div>
            <div class="twelve wide stretched column">
                <div class="ui segment margin">
                    <h3 class="tasks">Completed Tasks: {{ toDoList.filter(todo => {return todo.done === true}).length }}</h3>
                    <h3 class="tasks">Pending Tasks: {{ toDoList.filter(todo => {return todo.done === false}).length }}</h3>

                    <to-do-cmp v-bind:data="todo" v-for="todo in toDoList"
                               v-on:delete-todo="deleteToDo($event)"
                               v-on:complete-todo="completeToDo($event)"
                               class="margin">
                    </to-do-cmp>
                    <create-to-do v-on:create-todo="addToDo($event)"></create-to-do>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import toDoCmp from './toDoCmp.vue'
    import createToDoCmp from './createToDoCmp.vue'

    import sweetalert from 'sweetalert';

    export default {
        name: 'todolist',
        data() {
            return {
                toDoList: [
                    {
                        title: 'Todo A',
                        project: 'Project A',
                        done: false
                    },
                    {
                        title: 'Todo B',
                        project: 'Project B',
                        done: true,
                    },
                    {
                        title: 'Todo C',
                        project: 'Project C',
                        done: true,
                    }
                ]
            }
        },
        methods: {
          addToDo(newToDo) {
              this.toDoList.push(newToDo);
              sweetalert('Success!', 'To-Do created!', 'success');
          },
          deleteToDo(toDo) {
              swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
              }).then((value) => {
                  if (value) {
                      const index = this.toDoList.indexOf(toDo);
                      this.toDoList.splice(index, 1);

                      sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
                  }
              });
          },
          completeToDo(toDo) {
              const index = this.toDoList.indexOf(toDo);
              this.toDoList[index].done = true;

              sweetalert('Success!', 'To-Do created!', 'success');
          }
        },
        components: {
            'to-do-cmp': toDoCmp,
            'create-to-do': createToDoCmp
        }
    }
</script>

<style scoped>
    .margin {
        margin-top: 30px !important;
    }
</style>
