<template lang="pug">
router-link.plan-link(:to="{ name: 'plan-show', params: { id: plan.id } }")
  .plan-card
    h4.title Plan № {{ plan.id }}
</template>

<script>
export default {
  props: {
    plan: Object
  }
};
</script>

<style lang="sass">
.plan-card
  background-color: #f7b944
  padding: 20px
  margin-bottom: 24px
  transition: all 0.2s linear
  cursor: pointer
  border: solid 4px rgba(54, 54, 54, 0.25)

.plan-card:hover
  transform: scale(1.1)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

.plan-link
  color: #000000e3
  text-decoration: none
  font-weight: 100
</style>
