<template lang="pug">
.container
  .columns.is-mobile
    .column.is-offset-2.is-8
      p.plan-edit__id Edit Plan № {{ plan.id}} 
      p.plan-edit__title Check your answers, please
      table.table.plan-edit__table
        tr(v-for="answer in plan.answers" :key="answer.id")
          td.plan-edit__answers {{ answer.question.id}}.
          td.plan-edit__answers {{ answer.question.title }} 
          td
            select.input.is-small.plan-edit__input(v-model="answer.value" v-if="answer.question.component === 'BaseSelect'")
              option(v-if="answer.value === true") {{ answer.value }}
              option(value="" disabled selected hidden) Please choose one...
              option(
                 v-for="option in answer.question.select_options"
                 :key="option.id") {{ option.name }} 
            input.input.is-small.plan-edit__input(v-if="answer.question.component === 'BaseCalendar'" type="date" v-model="answer.value")              
            select.input.is-small.plan-edit__input(v-model="answer.value" v-if="answer.question.component === 'AirportSelect'")
              option(v-if="answer.value") {{ answer.value }}

              option(value="" disabled selected hidden) Please choose one...
              option(
                 v-for="airport in airports"
                 :key="airport.id"
                 ) {{ airport.city }}, {{ airport.name }}
      .plan-edit__submit-button 
        button.button.is-warning(@click="editPlan") Submit
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchPlan", this.id);
    this.$store.dispatch("fetchAirports");
  },

  computed: {
    plan() {
      return this.$store.getters.plan;
    },
    ...mapState(["airports"])
  },
  methods: {
    editPlan() {
      this.$store
        .dispatch("editPlan", this.plan)
        .then(() => {
          this.$router.push({
            name: "plan-list"
          });
        })
        .catch(() => {
          console.log("There was a problem editing your plan");
        });
    }
  }
};
</script>

<style lang="sass">
.plan-edit
  height: 81vh

  &__id
    color: #BAE5FE
    font-size: 23px
    margin-top: 40px
    margin-bottom: 20px

  &__title
    color: white
    font-size: 20px
    margin-bottom: 20px

  &__answers
    color: beige
    font-size: 18px

  &__table
    width: 100%

  &__input
    font-size: 14px !important

  &__submit-button
    display: flex
    justify-content: flex-end
    margin-bottom: 20px

.btn:hover
  transform: scale(1.03)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

.btn-plan
  background-color: #2aabf7 !important
  margin: 20px 0px
  width: 220px

.form-text
  color: #000000e3
</style>
