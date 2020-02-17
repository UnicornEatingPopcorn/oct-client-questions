<template lang="pug">
.navbar-bottom
  .content.has-text-centered
    a.navbar-bottom__creator-name(href="https://github.com/UnicornEatingPopcorn") 🦄 Unicorn Eating Popcorn &nbsp;
      img.navbar-bottom__image(src="@/assets/GitHub-Mark-32px.png")
</template>

<script></script>

<style lang="sass">
.navbar-bottom
  width: 100%
  background-color: #363636
  height: 63px
  justify-content: center
  align-items: center
  display: flex

  &__creator-name
    color: #000000e3
    display: flex
    justify-content: center
    align-items: center

  &__creator-name:hover
    transform: scale(1.1)
    color: black

  &__image
    margin-left: 5px
</style>
