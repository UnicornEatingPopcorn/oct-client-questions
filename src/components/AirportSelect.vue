<template lang="pug">
.column.is-paddingless.airport-select
  .airports-dropdown
    label.airport-select__label {{ label }}
    input.base-input.airport-select__placeholder(type="text" placeholder="Find the city" @change="updateValue")
    //- .dropdown-items
    //-   .dropdown-item(v-for="airport in airports" :key="airport.icao" @click="setAirport(airport)") {{ airport.name }}
    //-     span.badge.badge-primary {{ airport.city }} {{ airport.country }}
    //-     .sm-line
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
    setAirport(airport) {
      this.value = airport.id;
      this.query = airport.city;
    },
    updateValue(event) {
      this.$emit("updatePropValue", event.target.value);
    }
  }
};
</script>

<style lang="sass">
.select-input
  width: 220px

.airports-dropdown
  position: relative

.dropdown-items
  position: absolute
  top: 38px
  left: 0px
  z-index: 99
  background: white
  width: 100%

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

  &__label
    color: white
    font-size: 14px

  &__placeholder::placeholder
    color: #f7b944
</style>
