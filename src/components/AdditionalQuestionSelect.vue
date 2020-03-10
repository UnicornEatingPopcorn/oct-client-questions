<template lang="pug">
.columns.is-multiple
  .column(v-if="slug===question.slug")   
    label.additional-question-select__label {{ question.title }}
    select.additional-question-input
      option(
        v-for="option in question.select_options"
        :key="option.id"
        :value="option.name"
        :selected="option.name === null") {{ option.name }}
  AdditionalAnswers(:question="question")
</template>

<script>
import AdditionalAnswers from "@/components/AdditionalAnswers.vue";

export default {
  components: {
    AdditionalAnswers
  },
  props: {
    question: Object,
    slug: String
  }
};
</script>

<style lang="sass">
.additional-question-select__label
  color: white
  font-size: 14px

.additional-question-input
   background-color: #495057 !important
   color: #f7b944 !important
   border-inline-start: 0px !important
   border-block-end: 1px solid black !important
   border-block-start: 0px !important
   border-inline-end: 0px !important
   width: 100%
   font-size: 15px
</style>
