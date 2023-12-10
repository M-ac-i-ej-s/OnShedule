<template>
        <div class="EmployerForm">
                <div class="employer-form-card">
                    <div class="employer-form-card-inputs">
                        <div class="employer-form-card-inputs-container">
                            <v-icon class="employer-form-card-inputs-container-label" size='large' icon="mdi-account-outline" />
                            <v-text-field hide-details variant="outlined"></v-text-field>
                        </div>
                        <div class="employer-form-card-inputs-container">
                            <v-icon class="employer-form-card-inputs-container-label" size='large' icon="mdi-alarm" />
                            <VueDatePicker v-model="time" time-picker />
                        </div>
                        <div class="employer-form-card-inputs-container">
                            <v-icon class="employer-form-card-inputs-container-label" size='large' icon="mdi-flag-checkered" />
                            <VueDatePicker v-model="time" time-picker />
                        </div>
                    </div>
                </div>
        </div>
</template>

<script lang='ts'>

export default {
    props: {
        position: String,
        from: String,
        to: String
    },

}
</script>

<style lang="scss">
.EmployerForm {
    min-width: 300px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    margin: 10px 20px 10px 20px;
    -webkit-box-shadow: 8px 8px 24px -22px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px -22px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px -22px rgba(66, 68, 90, 1);
    .employer-form-card {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .employer-form-card-inputs {
            .employer-form-card-inputs-container {
                display: flex;
                align-items: center;
                padding: 5px 0 5px 0;
                .employer-form-card-inputs-container-label {
                    color: #a44fb8;
                    padding: 0 10px 0 0;
                }
            }
        }
    }
}
</style>