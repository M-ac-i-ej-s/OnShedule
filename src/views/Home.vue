<template>
  <div class='Home'>
    <EmployerDates v-for="day in this.calendar"/>
    <v-btn class='home-add' icon="mdi-plus" color='#a44fb8' @click='addDay'></v-btn>
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
  .home-add {
    margin: 0 0 0 150px
  }
}
</style>