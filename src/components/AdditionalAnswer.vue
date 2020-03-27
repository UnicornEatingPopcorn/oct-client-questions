<template lang="pug">
.additional-answer
  p.additional-answer__title {{ additionalAnswer.title}} : 
  p.additional-answer__value {{ additionalAnswer.value}}  
</template>

<script>
export default {
  props: {
    additionalAnswer: {
      type: Object,
      default() {
        return {
          title: "",
          value: ""
        };
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
