<template>
  <main class="home-page">
    <!-- <the-header />
    <promo-section />
    <about-us />
    <ContactForm />
    <the-footer /> -->
    HomePage
  </main>
</template>

<script>
import AboutUs from '../components/home/AboutUs.vue';
import PromoSection from '../components/home/PromoSection.vue';
import ContactForm from '../components/home/ContactForm.vue';

export default {
  components: {
    PromoSection,
    AboutUs,
    ContactForm,
  },
};
</script>
