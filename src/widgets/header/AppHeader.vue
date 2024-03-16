<template>
  <div class="d-flex ga-2 px-3">
    <router-link :to="APP_ROUTES.HOME.path">
      <p class="text-body-1 text-blue">{{ APP_ROUTES.HOME.name }}</p>
    </router-link>
    <router-link :to="APP_ROUTES.ABOUT.path">
      <p class="text-body-1 text-blue">{{ APP_ROUTES.ABOUT.name }}</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { APP_ROUTES } from '@/shared/routing'
</script>
