<template>
  <header class="header">
    <h1 class="header__logo" @click="reloadData">Жилфонд</h1>
    <p class="header__user-role">Пользователь</p>
  </header>
</template>

<script>
export default {
  methods: {
    reloadData() {
      window.location.reload();
    },
  },
};
</script>
