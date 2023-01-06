<template>
  <v-app>
    <v-main>
      <v-theme-provider root :dark="isDark">
        <v-container>
          <v-row justify="center" class="ma-5">
            <v-col xs="12" sm="8">
              <v-card>
                <v-toolbar color="blue darken-4" dark>
                  <v-toolbar-title class="headline">Todo App</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon @click="isDark = !isDark" v-on="on">
                        <v-icon v-model="isDark">{{ !isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      {{ isDark ? 'light mode' : 'dark mode' }}
                    </span>
                  </v-tooltip>
                </v-toolbar>

                <!-- Input-->
                <v-list two-line subheader>
                  <v-subheader class="headline">{{day}}, {{date}}{{ord}} {{year}}</v-subheader>
                  <p class="mx-12 mt-5 text-right"><b>{{ todos.length }}</b> Tasks</p>
                  <TodoInput :todoExists="todoExists" @addTodo="addTodo"/>
                </v-list>

                <v-list subheader two-line flat>
                  <v-subheader class="subheading" v-if="todos.length === 0">You have 0 Tasks, add some</v-subheader>
                  <v-subheader class="subheading" v-else>Your Tasks</v-subheader>

                  <!-- List items -->
                  <v-list-item-group>
                    <ListItem v-for="(todo, i) in todos" :key="i" :todo="todo" :id="i" @removeTodo="removeTodo"/>
                  </v-list-item-group>

                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-main>
  </v-app>
</template>

<script setup>
import ListItem from "./components/ListItem.vue"
import TodoInput from "./components/TodoInput.vue"

import {computed, ref} from "vue";
import {useDate} from "@/composables/date";

const {day, date, ord, year} = useDate()

const isDark = ref(true)
const todos = ref([])
const isTodoExist = ref(false)

const todoExists = computed(() => {
  return isTodoExist.value ? "todo is already in the list, add another one" : "";
})

function addTodo(newTodo) {
  isTodoExist.value = false;
  const value = newTodo && newTodo.trim();
  if (!value) {
    return;
  }
  const isTodoExists = todos.value.find((todo) => todo.title === value);
  if (!isTodoExists) {
    todos.value.push({
      title: newTodo,
      done: false
    });
  }
  if (isTodoExists) {
    isTodoExist.value = true;
  }
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}
</script>
