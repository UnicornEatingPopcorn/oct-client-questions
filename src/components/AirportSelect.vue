<template lang="pug">
.column.is-paddingless.airport-select
  label.airport-select__label {{ label }}
  // vue-fuse(:list="airports" :keys="keys" :inputChangeEventName="foundAirport")
  input.airport-select__input.airport-select__placeholder(type="text" placeholder="Find the city" @change="updateValue" @click="showDropdownItems")
  .dropdown-items(:class="{'show-dropdown-items': showItems}")
    .dropdown-item(v-for="airport in airports" :key="airport.icao" @click="setAirport(airport)") {{ airport.name }}
     span.badge.badge-primary {{ airport.city }} {{ airport.country }}
     .sm-line
</template>

<script>
import ClientService from "@/services/ClientService.js";

export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String]
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showItems: false,
      airports: []
    };
  },
  created() {
    ClientService.getAirports()
      .then(response => {
        this.airports = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    updateValue(event) {
      this.$emit("updatePropValue", event.target.value);
    },
    showDropdownItems() {
      this.showItems = !this.showItems;
    }
  }
};
</script>

<style lang="sass">
.dropdown-items
  position: absolute
  top: 47px
  left: 0px
  z-index: 99
  background: white
  width: 100%
  display: none

.show-dropdown-items
  display: block

.dropdown-item
  cursor: pointer

.badge-primary
  margin-left: 10px

.sm-line
  height: 1px
  background: #b8daff8c
  width: 100%
  margin-top: 5px

.airport-select
  margin-top: 10px
  position: relative

  &__label
    color: white
    font-size: 14px

  &__placeholder::placeholder
    color: #f7b944

  &__input
    background-color: #495057 !important
    color: #f7b944 !important
    border-inline-start: 0px !important
    border-block-end: 1px solid black !important
    border-block-start: 0px !important
    border-inline-end: 0px !important
    width: 100%
    font-size: 15px
</style>
