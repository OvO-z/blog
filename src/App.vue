<template>
  <v-app id="app">
    <!-- 导航栏 -->
    <TopNavBar></TopNavBar>
    <!-- 内容 -->
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<script>

import TopNavBar from '@/components/layout/TopNavBar';

export default {
  name: 'App',
  components: {
    TopNavBar
 }
}
</script>