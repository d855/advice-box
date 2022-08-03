<template>
    <AdviceBox :advice="advice"></AdviceBox>
</template>

<script>
import AdviceBox from "@/components/AdviceBox";
import axios from "axios";

export default {
    name: 'App',
    components: {
        AdviceBox
    },

    data() {
        return {
            advice: {},
        }
    },
    mounted() {
        axios({
            method: 'get',
            url: 'https://api.adviceslip.com/advice',
        })
            .then((response) => {
                this.advice = response.data.slip
            })
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Manrope', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>