<script setup lang="ts">
import AppLayout from '@/layout/AppLayout.vue'
import { useUnit } from 'effector-vue/composition'
import { $count, incremented } from './model'

const counter = useUnit($count)
const onClick = useUnit(incremented)
</script>

<template>
  <app-layout>
    <div>
      <p>asd</p>
      <button @click="onClick">increment</button>
      <p>{{ counter }}</p>
    </div>
  </app-layout>
</template>
