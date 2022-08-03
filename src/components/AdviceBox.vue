<script>

import axios from "axios";

export default {
    name: "AdviceBox",
    data() {
        return {
            advice: {}
        }
    },
    mounted() {
        if(localStorage.getItem("advice") === null) {
            this.fetchAdvice()
        } else {
            this.advice = JSON.parse(localStorage.getItem("advice"))
        }

    },
    methods: {
        fetchAdvice() {
            axios({
                method: 'get',
                url: 'https://api.adviceslip.com/advice',
            })
                .then((response) => {
                    this.advice = response.data.slip
                    localStorage.setItem("advice", JSON.stringify(response.data.slip))
                })
        }

    }
}
</script>

<template>
    <div class="h-screen w-screen grid place-content-center">
        <div class="relative w-72 sm:w-desktop h-auto bg-dark-grayish-blue flex flex-col items-center pt-8 rounded-xl px-10">
            <h2 class="text-neon-green uppercase text-xs font-semibold tracking-widest mb-5 transition-all duration-700 ease-in-out">
                Advice #{{ advice.id }}</h2>
            <div class="mb-16">
                <q class="text-light-cyan text-xl">{{ advice.advice }}</q>
                <img src="../assets/pattern-divider-desktop.svg" alt="divider" class="mt-5">
            </div>

            <div @click="fetchAdvice"
                 class="absolute bg-neon-green w-12 h-12 grid place-content-center left-0 right-0 mx-auto m-0 bottom-0 -mb-5 rounded-full transition ease-in-out duration-150 hover:cursor-pointer active:shadow-buttonShadow active:shadow-neon-green">
                <img src="../assets/icon-dice.svg" class="w-5 h-5   " alt="dice">
            </div>
        </div>
    </div>
</template>