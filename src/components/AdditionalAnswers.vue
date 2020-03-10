<template lang="pug">
.columns.is-multiple
  .column   
    p {{ question.title }} : {{ question.answer.value }}
</template>

<script>
export default {
  props: {
    question: Object
  }
};
</script>

<style lang="sass">
</style>
