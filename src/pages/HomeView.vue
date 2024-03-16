<script setup lang="ts">
import { useUnit } from 'effector-vue/composition'
import { $count, incremented } from './model'

const count = useUnit($count)
const onClick = useUnit(incremented)
</script>

<template>
  <main>
    <p>asd</p>
    <button @click="onClick">increment</button>
    <p>{{ count }}</p>
  </main>
</template>
