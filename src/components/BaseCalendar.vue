<template lang="pug">
.column.is-paddingless
  label.base-calendar__label {{ label }}
  input.base-input(type="date" @change="updateValue")
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String]
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("updatePropValue", event.target.value);
    }
  }
};
</script>

<style lang="sass">
.base-calendar__label
  color: white
  font-size: 16px
</style>
