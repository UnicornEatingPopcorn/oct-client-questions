<template lang="pug">
.container
  .columns
    .column.is-offset-3
      p.plan-edit__id Edit Plan № {{ plan.id}} 
      form(@submit.prevent="editPlan")
        p.plan-edit__title Check your answers, please
        table.table.plan-edit__table
          tr(v-for="answer in plan.answers" :key="answer.id")
            td.plan-edit__answers {{ answer.question.id}}.
            td.plan-edit__answers {{ answer.question.title }} 
            td
               select.input.is-small.plan-edit__input(@change="updateValue" v-model="answer.value")
                 option(value="" disabled selected hidden) Please choose one...
                 option(
                   v-for="option in answer.question.select_options"
                   :key="option.id") {{ option.name }}
        .plan-edit__submit-button 
          button.button.is-warning Submit
</template>

<script>
import ClientService from "@/services/ClientService.js";

export default {
  props: ["id"],
  data() {
    return {
      plan: {}
    };
  },
  created() {
    ClientService.getPlan(this.id)
      .then(response => {
        this.plan = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
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
    },
    updateValue(event) {
      return (this.answer.value = event);
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
    width: 500px

  &__input
    font-size: 14px

  &__submit-button
    display: flex
    justify-content: flex-end
    width: 500px
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
