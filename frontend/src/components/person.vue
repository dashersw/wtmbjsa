<template lang="pug">
.person-list
  h1 Hello!
  div(v-if="people.length")
    p Here are the people:
    table
      thead
        td ID
        td Name
        td Age
        tr(v-for="person in people")
          td {{person.id}}
          td {{person.name}}
          td {{person.age}}
    pre= JSON.stringify(people, null, 2)
  div(v-else)
    p There's no one yet :(
  .button(@click="fetchPeople") Click me to refresh the list of people!
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  created: async function () {
    this.fetchPeople()
  },
  computed: {
    ...mapState({
      people: (state) => state.person.data
    })
  },
  methods: {
    ...mapActions(['fetchPeople'])
  }
}
</script>
