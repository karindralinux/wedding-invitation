<template>
  <section>
    <MainCover id="mainCover"></MainCover>
    <GroomBride></GroomBride>
    <Timelines v-on:goToGuestBook="navigationHandler('#guest-book')"></Timelines>
    <OurGallery></OurGallery>
    <GuestBook id="guest-book"></GuestBook>
  </section>
</template>

<script setup>

import MainCover from '@/components/MainCover.vue'
import GroomBride from '@/components/GroomBride.vue'
import Timelines from '@/components/Timelines.vue'
import OurGallery from '@/components/OurGallery.vue'
import GuestBook from '@/components/GuestBook.vue'

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>
