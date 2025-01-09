<template>
  <div class="min-h-screen bg-[#13132B]">
    <TopNavBar class="px-10 topnavbar" />
    <div class="w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNavBar from '@/components/TopNavBar.vue'
</script>
