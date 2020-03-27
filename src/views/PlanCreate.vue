<template lang="pug">
.create-plan-page
  .columns.is-mobile
    .column.is-5.is-offset-1
      form#mainQuestions.create-plan-page__question-plan(@submit.prevent="createPlan")
        p.create-plan-page__title Let's start with few simple questions
        .create-plan-page__line
        .columns.is-multiline
           Answer(
             v-for="answer in plan.answers"
             :key="answer.question.id"
             :answer="answer"
             @watchSlugName="watchSlugNameFromChild")

    .column.is-5.create-plan-page__additional-questions
      .create-plan-page__question-plan
        p.create-plan-page__title Additional questions
        .create-plan-page__line
        p.create-plan-page__info(v-if="!mainQuestionSlug") There is no additional questions yet. Please answer the main questions to figure out if we need more information for create your dream trip.
        .columns
          AdditionalQuestionSelect(
            v-for="question in additionalQuestions"
            :question="question"
            v-if="question.slug === mainQuestionSlug"
            :slug="mainQuestionSlug"    
            @updatePropValue="updatePropValueFromChild"
            :additionalAnswer="additionalAnswer")
    
      .columns.is-multiline
        .column
          AdditionalAnswer(
            :additionalAnswer="answer"
            v-if="additionalAnswers.length"
            v-for="answer in additionalAnswers"
            :additionalAnswers="additionalAnswers")
        
      .columns
        .column.create-plan-page__button
          button.button.is-black Submit


</template>

<script>
import ClientService from "@/services/ClientService.js";
import Answer from "@/components/Answer.vue";
import AdditionalQuestionSelect from "@/components/AdditionalQuestionSelect.vue";
import AdditionalAnswer from "@/components/AdditionalAnswer.vue";

export default {
  components: {
    Answer,
    AdditionalQuestionSelect,
    AdditionalAnswer
  },
  data() {
    return {
      plan: this.createNewPlan(),
      mainQuestionSlug: null,
      slugs: [],
      additionalAnswers: [],
      additionalAnswer: {}
    };
  },
  created() {
    ClientService.getQuestions()
      .then(response => {
        const questions = response.data;
        this.plan.answers = questions.map(question => {
          const id = Math.floor(Math.random() * 10000000);

          return { question, value: "", id };
        });
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    this.$store.dispatch("fetchAdditionalQuestions");
  },

  updated() {
    this.additionalQuestionsSlugs();
  },

  computed: {
    additionalQuestions() {
      return this.$store.getters.additionalQuestions;
    }
  },

  methods: {
    createNewPlan() {
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        answers: []
      };
    },
    createAdditionalAnswer() {
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        title: "",
        value: ""
      };
    },
    createPlan() {
      this.$store
        .dispatch("createPlan", this.plan)
        .then(() => {
          this.$router.push({
            name: "plan-show",
            params: { id: this.plan.id }
          });
        })
        .catch(() => {
          console.log("There was a problem creating your plan");
        });
    },
    watchSlugNameFromChild(slug) {
      this.mainQuestionSlug = slug;
    },
    additionalQuestionsSlugs() {
      return (this.slugs = this.additionalQuestions.map(
        question => question.slug
      ));
    },
    updatePropValueFromChild(answer) {
      this.additionalAnswer = this.createAdditionalAnswer();
      this.additionalAnswers.push(answer);
    }
  }
};
</script>

<style lang="sass">
.create-plan-page
  display: flex
  justify-content: center
  align-items: center
  min-height: 81vh

  &__title
    font-size: 20px
    color: white
    display: flex
    justify-content: center

  &__line
    width: 100%
    height: 1px
    background: #f7b944
    display: inline-block

  &__button
    display: flex !important
    justify-content: center

  &__question-plan
    background-color: #495057
    border-radius: 4px
    padding: 20px 40px

  &__info
    margin: 10px 0px 20px 9px
    color: white
    font-size: 18px

  &__additional-questions
    display: flex !important
    flex-direction: column
    justify-content: space-between

.button:hover
  transform: scale(1.03)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)
</style>
