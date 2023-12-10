<template>
  <div class='Home'>
    <div class="home-form">
      <EmployerDates v-for="(day, index) in this.calendar" :key="index"/>
      <div class="home-form-div">
        <v-btn icon="mdi-plus" color='#a44fb8' @click='addDay'></v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EmployerDates from '../components/EmployerDates.vue'

export default {
    components: {
      EmployerDates
    },
    data() {
        return {
            calendar: [
                        {
                          day: '',
                          isWorkingDay: true,
                          shifts: []
                        },
            ]
        }
    },
    methods: {
        addDay() {
            this.calendar.push({
                day: '',
                isWorkingDay: true,
                shifts: []
            })
        }
    } 
}

</script>

<style scoped lang='scss'>
.Home {
  .home-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .home-form-div {
      width: 70%;
    }
  }
}
</style>