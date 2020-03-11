<template lang="pug">
.additional-answer
  p.additional-answer__label {{ additionalAnswer.title}}: {{ additionalAnswer.value}}  
</template>

<script>
export default {
  props: {
    additionalAnswer: Object
  }
};
</script>

<style lang="sass">
.additional-answer
  padding-top: 10px

  &__label
    color: white
    font-size: 16px
</style>
