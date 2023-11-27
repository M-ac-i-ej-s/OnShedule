<template>
    <div class="EmployerDates">
        <div>
            <v-date-picker></v-date-picker>
        </div>
        <div class="employer-dates-workers">
            <EmployerForm/>
            <EmployerForm/>
            <EmployerForm/>
        </div>
    </div>
</template>
<script lang='ts'>
import EmployerForm from '../components/EmployerForm.vue'

export default {
    components: {
        EmployerForm
    },
    
}
</script>
<style lang="scss">
.EmployerDates {
    display: flex;
    align-items: center;
    .employer-dates-workers {
        display: flex;
    }
}
</style>