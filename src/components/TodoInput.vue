<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        <v-text-field
            v-model="newTodo"
            id="newTodo"
            name="newTodo"
            label="Type your task"
            @keyup.enter="addTodo"
            :hint="todoExists"
            persistent-hint
        />
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script setup>
import {defineProps, ref, defineEmits} from "vue"

defineProps(["todoExists"])
const emit = defineEmits(["addTodo"])

const newTodo = ref("")

function addTodo() {
  emit('addTodo', newTodo.value)
}

</script>

<style scoped>

</style>
