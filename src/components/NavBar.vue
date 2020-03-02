<template lang="pug">
.header
  .columns.header__columns.is-marginless
    .column.is-3.is-offset-1
      p.header__title Portfolio version of creating travel plan
    // Responsive toggle
    //- .column.is-1
    //-   a.navbar-burger.burger(@mouseover="navbarMenu = !navbarMenu" role="button" aria-expanded="false")
    //-     span(aria-hidden="true")
    //-     span(aria-hidden="true")
    //-     span(aria-hidden="true")
    // Menu
    .column
      .header__items
        .header__item
          router-link.header__item-link(:to="{ name: 'plan-create' }") Create plan 
        .header__item
          router-link.header__item-link(:to="{ name: 'plan-list' }") Show all my plans
        .header__item-button
          span.header__item-button_title(@click="isSignInModalOpen = true") Sign in

    .modal(:class="{ 'is-active': isSignInModalOpen }")
      .modal-background(@click="isSignInModalOpen = false")
      .modal-card
        header.modal-card-head
          p.modal-card-title Please, sign in!
          button.delete(@click="isSignInModalOpen = false")
        section.modal-card-body
           .field
             .control
               label.brand-profile__edit-modal--form_label Login
               input.input(v-model="login")
           .field
             .control
               label.brand-profile__edit-modal--form_label Password
               input.input(v-model="password")
        footer.modal-card-foot
          button.button.is-success(@click="saveUser") Save Changes
          button.button(@click="isSignInModalOpen = false") Cancel



      //- .dropdown.is-right(:class="{'is-active': navbarMenu}")
      //-   .dropdown-menu(id="dropdown-menu" role="menu")
      //-     .dropdown-content
      //-       .dropdown-item.is-nav-link(v-for="navItem in navItems")
      //-         router-link.a-navbar.is-centered-responsive(to="navItem.path") {{ navItem.title }}
  .header__border
</template>

<script>
export default {
  data() {
    return {
      navbarMenu: false,
      isSignInModalOpen: false,
      login: "",
      password: ""
    };
  },
  methods: {
    saveUser() {
      return (this.isSignInModalOpen = false);
    }
  }
};
</script>

<style lang="sass">
.header

  &__title
    color: #f7b944
    font-size: 20px
    margin-bottom: 0px

  &__items
    display: flex
    justify-content: space-evenly
    align-items: center

  &__item:hover
    transform: scale(1.1)

  &__item-link
    color: white
    font-size: 18px
    &.router-link-exact-active
      color: #f7b944

  &__item-link:hover
    color: #f7b944

  &__item-button
    min-width: 130px
    font-size: 1.2rem !important
    height: 40px
    transition: 0.1s linear
    background-image: linear-gradient(to right bottom, rgba(252,234,187,1) 0%, rgba(248,181,0,1) 47%, rgba(252,205,77,1) 76%, rgba(251,223,147,1) 100%)
    transform: skewX(-18deg)
    border-radius: 4px
    display: inherit
    justify-content: inherit
    align-items: inherit

    &:hover
      transform: scale(1.1) skewX(-18deg)
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

  &__item-button_title
    transform: skewX(18deg)
    display: block
    z-index: 3

  &__border
    border-bottom: 1px solid black

  &__columns
    display: flex
    align-items: center
</style>
