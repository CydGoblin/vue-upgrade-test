<template>
  <v-list-item>
    <template #default="{ active, toggle }">
      <v-list-item-action>
        <v-checkbox @click="toggle"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title :class="{ done: active }">
          {{ capitalize(todo.title) }}
        </v-list-item-title>
        <v-list-item-subtitle>
          Added on: {{ date }}{{ ord }} {{ day }} {{ year }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-btn fab ripple small color="red" v-if="active" @click="removeTodo(id)">
        <v-icon class="white--text">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-list-item>
</template>

<script setup>
import {defineProps} from "vue"
import {useDate} from "@/composables/date";

defineProps(["todo", "id"])

function removeTodo() {
  this.$emit('removeTodo', this.id)
}

const {day, date, ord, year} = useDate()

function capitalize (value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

</script>

<style scoped>

</style>
