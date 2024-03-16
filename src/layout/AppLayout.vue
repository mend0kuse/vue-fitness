<script setup lang="ts">
import DefaultLayout from './DefaultLayout.vue'
import { APP_ROUTES } from '../shared/routing'
</script>

<template>
  <default-layout class="app-layout">
    <template #header>
      <div class="d-flex ga-2 px-3">
        <router-link :to="APP_ROUTES.HOME.path">
          <p class="text-body-1 text-blue">{{ APP_ROUTES.HOME.name }}</p>
        </router-link>
        <router-link :to="APP_ROUTES.ABOUT.path">
          <p class="text-body-1 text-blue">{{ APP_ROUTES.ABOUT.name }}</p>
        </router-link>
      </div>
    </template>

    <template #sidebar>
      <p>Sidebar</p>
    </template>

    <template #main>
      <slot></slot>
    </template>
  </default-layout>
</template>
