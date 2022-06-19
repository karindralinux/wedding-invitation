<template>
  <section class="bg-soccer-field-texture bg-cover bg-center w-full relative flex flex-col justify-center gap-3 bg-gradient-to-b from-blue-400 to-orange-200 h-screen">
    <div class="w-8/12 mx-auto text-center text-gray-100 relative">
      <!-- <img src="@/assets/nice_cloud.png" class="w-3/12 absolute -right-3 -top-12"> -->
      
      <h1 class="lovers-quarre-font text-5xl lg:text-6xl my-6 font-bold text-black">Fulan & Fulanah</h1>
      <!-- <h1 class="lovers-quarre-font text-5xl lg:text-6xl my-6 font-bold text-white drop-shadow-md">&</h1> -->
      <!-- <h1 class="lovers-quarre-font text-5xl lg:text-6xl my-6 font-bold text-white drop-shadow-md">Fulanah</h1> -->
      <!-- <img src="@/assets/nice_cloud.png" class="w-3/12 absolute -left-5 content-center"> -->

      <p class="text-black font-medium">Hitung mundur pernikahan kami</p>

      <Countdown></Countdown>

      <br>
    </div>
    

    <waveBlock class="absolute -bottom-1 left-0 right-0"/>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router' 
import Countdown from '@/components/Countdown.vue'
import waveBlock from '@/assets/svg/wave.svg'

const route = useRoute()
let query = computed(() => route.query)

if (route.query.to === undefined) query = { to: 'Saudara/i' } 

</script>
