<template>
    <div class="center-tool">
        <div class="Navbar">
            <div class="navbar-socials">
                <v-icon class="navbar-socials-icon" size='x-large' icon="mdi-facebook" />
                <v-icon class="navbar-socials-icon" size='x-large' icon="mdi-twitter" />
                <v-icon class="navbar-socials-icon" size='x-large' icon="mdi-instagram" />
            </div>
            <div class="navbar-logo">
                <img src="../assets/logo-no-background.png" alt="logo">
            </div>
            <div class="navbar-routes">
                <span>MY SCHEDULES</span>
                <span>WORKERS</span>
                <span>CONTACT</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.center-tool {
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 0px 9px 24px -17px rgba(144, 144, 144, 1);
    -moz-box-shadow: 0px 9px 24px -17px rgba(144, 144, 144, 1);
    box-shadow: 0px 9px 24px -17px rgba(144, 144, 144, 1);
    padding: 20px 0 10px 0;
}
.Navbar {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-socials {
        display: flex;
        gap: 10px;
        width: 400px;
        .navbar-socials-icon {
            color: #a44fb8;
        }
    }
    .navbar-logo {
        img {
            width: 250px;
        }
    }
    .navbar-routes {
        display: flex;
        gap: 20px;
        width: 400px;
        span {
            font-size: 20px;
            font-weight: 600;
            color: #a44fb8;
            cursor: pointer;
        }
    }
}
</style>