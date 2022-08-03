<script>
export default {
    name: "AdviceBox"
}
</script>

<template>
    <div class="h-screen w-screen grid place-content-center">
        <div class="relative w-96 h-56 bg-dark-grayish-blue pt-8 rounded-xl px-10">
            <h2 class="text-neon-green uppercase text-xs font-semibold tracking-widest mb-5">Advice #117</h2>
            <div>
                <q class="text-light-cyan">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vero?</q>
                <img src="../assets/pattern-divider-desktop.svg" alt="divider" class="mt-5">
            </div>

            <div class="absolute bg-neon-green w-12 h-12 grid place-content-center left-0 right-0 mx-auto m-0 bottom-0 -mb-5 rounded-full">
                <img src="../assets/icon-dice.svg" class="w-5 h-5   " alt="dice">
            </div>
        </div>
    </div>
</template>