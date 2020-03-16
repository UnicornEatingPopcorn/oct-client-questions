<template lang="pug">
nav.navbar
  .container.is-desktop
    .navbar-brand.navbar-container
      span.navbar-item
        p.navbar__title Demo version of creating travel plan
      span.navbar-burger.burger(@click="isNavbarMenuOpened = !isNavbarMenuOpened" role="button" aria-expanded="false")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    // Menu
    .navbar-menu
      .navbar-end
        .navbar__items
          .navbar__item
            router-link.navbar__item-link(:to="{ name: 'plan-create' }") Create plan 
          .navbar__item
            router-link.navbar__item-link(:to="{ name: 'plan-list' }") Show all my plans
          .navbar__item-button(@click="isSignInModalOpened = true") 
            span.navbar__item-button_title Sign in
    
    .dropdown.is-right(:class="{'is-active': isNavbarMenuOpened}")
      .dropdown-menu(id="dropdown-menu" role="menu")
        .dropdown-content
          .dropdown-item.is-nav-link(@click="isNavbarMenuOpened = false")
            router-link.dropdown-item__link.is-centered-responsive(:to="{ name: 'plan-create' }") Create plan
            hr.dropdown-divider
          .dropdown-item.is-nav-link(@click="isNavbarMenuOpened = false")
            router-link.dropdown-item__link.is-centered-responsive(:to="{ name: 'plan-list' }") Show all my plans 
            hr.dropdown-divider
          .dropdown-item.is-nav-link(@click="closeNavbarDropdown")
            .dropdown__item-button
              span.navbar__item-button_title Sign in

    .modal(:class="{ 'is-active': isSignInModalOpened }")
      .modal-background(@click="isSignInModalOpened = false")
      .modal-card.modal__container
        header.modal-card-head
          p.modal-card-title Please, sign in!
          button.delete(@click="isSignInModalOpened = false")
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
          button.button.is-dark(@click="signIn") Sign in
          button.button.is-black(@click="isSignInModalOpened = false") Register
</template>

<script>
import firebase from "@/services/FirebaseService";

export default {
  data() {
    return {
      isNavbarMenuOpened: false,
      isSignInModalOpened: false,
      login: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login, this.password)
        .catch(function() {});
      return (this.isSignInModalOpened = false);
    },
    closeNavbarDropdown() {
      return (
        (this.isNavbarMenuOpened = false), (this.isSignInModalOpened = true)
      );
    }
  }
};
</script>

<style lang="sass">
.navbar

  &-container
    padding: 0px 60px

  &__title
    font-size: 20px !important
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
    margin: 0px 20px
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

  &__columns
    display: flex
    align-items: center

.dropdown
  display: block !important

.dropdown-item
  font-size: 1.2rem !important
  transition: 0.1s linear
  &:hover
    transform: scale(1.1)

.dropdown-content
  width: 300px
  padding-left: 20px
  padding-right: 20px

.dropdown-item__link
  color: white !important
  transition: all 0.1s linear
  font-size: 1.2rem

.dropdown__item-button
  min-width: 130px
  font-size: 1.2rem !important
  height: 40px
  transition: 0.1s linear
  background-image: linear-gradient(to right bottom, rgba(252,234,187,1) 0%, rgba(248,181,0,1) 47%, rgba(252,205,77,1) 76%, rgba(251,223,147,1) 100%)
  transform: skewX(-18deg)
  border-radius: 4px
  display: flex
  justify-content: center
  align-items: center

  &:hover
    transform: scale(1.1) skewX(-18deg)
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

.modal__container
  max-width: 400px
</style>
