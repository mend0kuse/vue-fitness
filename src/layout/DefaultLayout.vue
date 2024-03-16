<template>
  <v-layout class="app-layout">
    <v-app-bar>
      <slot name="header"></slot>
    </v-app-bar>

    <v-navigation-drawer>
      <slot name="sidebar"></slot>
    </v-navigation-drawer>

    <v-main>
      <slot name="main"></slot>
    </v-main>
  </v-layout>
</template>

<style>
.app-layout {
  height: 100vh;
}
</style>
