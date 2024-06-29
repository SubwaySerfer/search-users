<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" class="component"></component>
    </transition>
  </router-view>
  <!-- <the-footer /> -->
</template>

<script>
// import TheFooter from './components/layouts/TheFooter.vue';

export default {
  // components: {
  //   TheFooter,
  // },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
