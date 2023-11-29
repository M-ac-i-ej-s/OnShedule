<template>
    <div class="EmployerDates">
        <div class="employer-dates-date">
            <v-date-picker></v-date-picker>
        </div>
        <div class="employer-dates-workers">
            <EmployerForm v-for="worker in this.positions" :position="worker.position" :from="worker.from" :to="worker.to" />
            <v-btn class='employer-dates-workers-add' icon="mdi-plus" color='#a44fb8' @click="addPosition"></v-btn>
        </div>
    </div>
</template>
<script lang='ts'>
import EmployerForm from '../components/EmployerForm.vue'

export default {
    components: {
        EmployerForm
    },
    data() {
        return {
            positions: [
                {
                    position: '',
                    from: '',
                    to: '',
                    worker: ''
                },
            ]
        }
    },
    methods: {
        addPosition() {
            this.positions.push({
                position: '',
                from: '',
                to: ''
            })
        }
    }
    
}
</script>
<style lang="scss">
.EmployerDates {
    display: flex;
    align-items: center;
    .employer-dates-date {
        border: 1px solid black;
        border-radius: 5px;
        scale: 0.7;
    }
    .employer-dates-workers {
        display: flex;
        align-items: center;
        border: 1px solid #9e9e9e;
        border-radius: 5px;
        padding: 40px 10px 40px 10px;
        overflow: auto;
        .employer-dates-workers-add {
            margin: 0 150px 0 150px;
        }
    }
}
</style>