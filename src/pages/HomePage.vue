<template>
  <main class="home-page">
    <the-header />
    <div class="home-page__wrapper">
      <the-sidebar />
    </div>
    <!-- 
    <promo-section />
    <about-us />
    <ContactForm />
     -->
  </main>
</template>

<script>
import TheSidebar from '../components/layouts/TheSidebar.vue';

export default {
  components: {
    TheSidebar,
  },
};
</script>
