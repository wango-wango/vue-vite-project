<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore2 } from '../stores/counter';

const counterStore = useCounterStore2();
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
  <div class="platform">
    <h1>This is an platform page</h1>
    <div>
      <div>counter1: {{ counter }}</div>
      <div>dbCounter2: {{ counterStore.doubleCount }}</div>
      <button @click="doDecrease">-</button>
      <button @click="doIncrement">+</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .platform {
    
  }
}
</style>
