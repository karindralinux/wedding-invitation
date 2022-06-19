<template>
  <section class="w-full bg-gradient-to-b from-amber-600 to-orange-500">
    <section class="container-section">
      <HeaderSection title="Pengantin Pria & Wanita" />
      <div class="w-10/12 mx-auto text-center text-sm text-slate-800" >


        <img data-aos="zoom-in" src="@/assets/bismillah.png" class="w-8/12 mx-auto mb-3">

        <p 
          data-aos="zoom-in"
          class="text-gray-800 mb-3">
          Assalmualaikum Wa Rahmatullahi Wa Baraktuh
        </p>
        <p data-aos="zoom-in">
          Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
        </p>

      </div>
      <Profile />
      <Timelines />
    <!-- <img data-aos="zoom-in" src="@/assets/soccer_design.png" class="w-4/12 absolute p-auto"> -->
    <img data-aos="zoom-in" src="@/assets/soccer_design.png" class="w-12/12 -ml-12 absolute">

      <div class="mt-12 text-center">
        <!-- <h1 
          data-aos="zoom-in"
          class="text-black font-medium text-xl mb-12">Map Location</h1> -->
        <!-- <img data-aos="zoom-in" src="@/assets/soccer_design.png" class="w-5/12 absolute m-auto"> -->

        <iframe 
          data-aos="zoom-in"
          class="w-10/12 mx-auto mt-4 mb-8" height="300" 
          src="https://maps.google.com/maps?q=Politeknik%20Hasnur&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameborder="0" scrolling="no" 
          marginheight="0" marginwidth="0"></iframe>
        <!-- <img data-aos="zoom-in" src="@/assets/soccer_design.png" class="w-6/12 absolute"> -->
        <!-- <img data-aos="zoom-in" src="@/assets/soccer_design.png" class="w-5/12"> -->

        <a 
          data-aos="zoom-in"
          class="px-5 py-2 rounded-lg bg-yellow-600 mx-auto">Open Google Map</a>

      </div>

      <Quote />
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Profile from '@/components/Profile.vue'
import Timelines from '@/components/Timelines.vue'
import Quote from '@/components/Quote.vue'
import wave from '@/assets/svg/wave.svg'
import basketball from '@/assets/svg/basketball.svg'
import basketPerson from '@/assets/svg/basketballperson.svg'


</script>
