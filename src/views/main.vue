<template>
    <div class="flex">
        <div 
            v-for= "(img,index) in  images"
            :key="index"
            :class="getClass(index)"
            @click="activeIndex = index"
        >
            <img :src="img" />
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const images = [
  'https://firebasestorage.googleapis.com/v0/b/photo-9cceb.firebasestorage.app/o/images%2Fimg2.jpg?alt=media&token=7a0d324c-758d-478c-922d-69f04c015270',
  'https://firebasestorage.googleapis.com/v0/b/photo-9cceb.firebasestorage.app/o/images%2Fimg3.jpg?alt=media&token=1016bf3a-3939-4c67-84e2-e452114681d5',
  'https://firebasestorage.googleapis.com/v0/b/photo-9cceb.firebasestorage.app/o/images%2Fimg4.jpg?alt=media&token=7b03c78e-1579-44a6-acda-01713406abe5'
]
function startAutoSlide() {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.length
  }, 3000)
}
const activeIndex = ref(1)
function getClass(index){
    const total = images.length
    if (index === activeIndex.value) return 'center'
    if (index === (activeIndex.value + 1) % total) return 'right'
    if (index === (activeIndex.value + total - 1) % total) return 'left'
    return 'hidden'
}
</script>
<style>

</style>