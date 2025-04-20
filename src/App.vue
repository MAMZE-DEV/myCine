<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComp from './components/layout/headerComp.vue'
</script>

<template>
  <headerComp></headerComp>
  <RouterView />
</template>
