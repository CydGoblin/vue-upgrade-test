<template>
  <v-list-item>
    <template #default="{ active, toggle }">
      <v-list-item-action>
        <v-checkbox v-model="active[id]" @click="toggle"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title :class="{ done: active}">
          {{ todo.title | capitalize }}
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

<script>
export default {
  name: "ListItem",

  props: ["todo", "id"],

  data() {
    return {
      day: this.todoDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear(),
    }
  },

  methods: {
    removeTodo: function () {
      this.$emit('removeTodo', this.id)
    },
    todoDay() {
      const d = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return days[d.getDay()];
    },
    nth(d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
</script>

<style scoped>

</style>
