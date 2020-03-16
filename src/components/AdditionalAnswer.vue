<template lang="pug">
.additional-answer
  p.additional-answer__title {{ additionalAnswer.title}} : 
  p.additional-answer__value {{ additionalAnswer.value}}  
</template>

<script>
export default {
  data() {
    return {
      uniqueAnswers: this.findUniqueAnswers()
    };
  },
  props: {
    additionalAnswer: Object,
    additionalAnswers: Array
  },
  methods: {
    findUniqueAnswers() {
      if (this.additionalAnswers.length > 1) {
        const titles = this.additionalAnswers
          .map(answer => answer)
          .map(answer => answer.title);

        const uniqueAnswers = titles
          .map((title, index) => titles.lastIndexOf(title) === index && index)
          .filter(index => titles[index])
          .map(index => titles[index]);
        return uniqueAnswers;
      }
    }
  }
};
</script>

<style lang="sass">
.additional-answer
  padding-top: 10px

  &__title
    color: white
    font-size: 16px

  &__value
    color: #f7b944
    font-size: 18px
</style>
