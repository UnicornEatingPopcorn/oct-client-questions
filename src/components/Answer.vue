<template lang="pug">
.column.is-6
  component(
    :is="question.component"
    :label="question.title"
    :options="question.select_options"
    @updatePropValue="updateValueFromChild"
    )
</template>

<script>
import AirportSelect from "@/components/AirportSelect.vue";
import BaseCalendar from "@/components/BaseCalendar.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  props: {
    answer: Object
  },
  computed: {
    question() {
      return this.answer.question;
    }
  },
  components: {
    AirportSelect,
    BaseCalendar,
    BaseSelect
  },
  methods: {
    updateValueFromChild(event) {
      return (this.answer.value = event);
    }
  }
};
</script>

<style lang="sass">
.top
  margin-top: 10px
</style>
