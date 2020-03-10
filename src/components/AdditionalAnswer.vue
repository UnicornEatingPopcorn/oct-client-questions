<template lang="pug">
.columns
  .column
    p.additional-answer__label {{ additionalAnswer}} 
</template>

<script>
export default {
  props: {
    additionalAnswer: String
  }
};
</script>

<style lang="sass">
.additional-answer__label
  color: white
  font-size: 14px
</style>
