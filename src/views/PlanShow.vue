<template lang="pug">
.plan-show
  .columns
    .column.is-6.is-offset-3
      p.plan-show__id Plan № {{ id }}
      form
        p.plan-show__title Answers:        
        table.table.plan-show__table
          tr(v-for="answer in plan.answers" :key="answer.id")
            td.plan-show__answers {{ answer.question.id }}.
            td.plan-show__answers {{ answer.question.title }} 
            td.plan-show__answers {{ answer.value || "empty"}}
      .plan-show__buttons
        router-link.button.is-warning(:to="{ name: 'plan-edit', params: { id: plan.id } }") Edit
        button.button.plan-show__delete-button.is-danger(@click="deletePlan") Delete
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchPlan", this.id);
  },
  computed: mapState(["plan"]),
  methods: {
    deletePlan() {
      this.$store.dispatch("deletePlan", this.id).then(() => {
        this.$router.push({
          name: "plan-list"
        });
      });
    }
  }
};
</script>

<style lang="sass">
.plan-show
  min-height: 81vh

  &__title
    color: white
    font-size: 20px
    margin-bottom: 20px

  &__answers
    font-size: 18px
    margin-bottom: 10px
    color: beige

  &__id
    margin-top: 40px
    font-size: 23px
    margin-bottom: 20px
    color: #BAE5FE

  &__table
    width: 100%

  &__buttons
    margin-top: 20px !important
    display: flex
    justify-content: flex-end
    margin-bottom: 20px

  &__delete-button
    margin-left: 20px
</style>
