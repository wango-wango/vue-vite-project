<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
let { counter } = storeToRefs(counterStore);
let dbCounter = counterStore.doubleCount;
const doDecrease = () => {
  counterStore.decrease();
}
const doIncrement = () => {
  counterStore.increment();
}

</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>counter1: {{ counter }}</div>
    <div>dbCounter2: {{ counterStore.doubleCount }}</div>
    <button @click="doDecrease">-</button>
    <button @click="doIncrement">+</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
