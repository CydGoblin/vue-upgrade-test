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

<script>
export default {
  name: "TodoInput",

  props: ["todoExists"],

  data() {
    return {
      newTodo: ""
    }
  },

  methods: {
    addTodo: function () {
      this.$emit('addTodo', this.newTodo)
    }
  }
}
</script>

<style scoped>

</style>
