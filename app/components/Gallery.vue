<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    src: '/images/gallery-1.png',
    title: 'Berkebun & Mengenal Alam',
    description: 'Menanamkan rasa cinta lingkungan sejak dini dengan berkebun bersama di taman sekolah.'
  },
  {
    src: '/images/gallery-2.png',
    title: 'Kreativitas & Seni Lukis',
    description: 'Mengekspresikan imajinasi anak secara bebas melalui goresan kuas dan warna-warni yang indah.'
  },
  {
    src: '/images/gallery-3.png',
    title: 'Kolaborasi Balok Susun',
    description: 'Melatih kemampuan motorik halus, logika spasial, dan kerja sama tim secara menyenangkan.'
  },
  {
    src: '/images/gallery-4.png',
    title: 'Dunia Literasi & Cerita',
    description: 'Mengembangkan kecintaan membaca dan kemampuan berbahasa lewat dongeng interaktif.'
  },
  {
    src: '/images/jjuk.webp',
    title: 'Keceriaan di Luar Kelas',
    description: 'Bermain aktif dan eksploratif di lingkungan sekolah yang hijau, teduh, dan aman.'
  }
]

const currentSlide = ref(0)
let autoplayTimer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const setSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(nextSlide, 5000) // Ganti slide setiap 5 detik
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section id="gallery" class="py-24 bg-neutral-light overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Section Title with Accent Decoration -->
      <div class="mb-12">
        <span class="text-primary font-bold text-sm tracking-wider uppercase bg-primary-light px-4 py-1.5 rounded-full">Koleksi Foto</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-secondary mt-3">Galeri Keceriaan</h2>
        <p class="text-neutral-base mt-2 max-w-xl mx-auto text-sm sm:text-base">Intip keseruan dan momen berharga anak-anak saat belajar dan bermain di sekolah kami.</p>
      </div>

      <!-- Carousel Container -->
      <div 
        class="relative bg-white rounded-3xl shadow-xl overflow-hidden group border-4 border-white"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <!-- Main Slides Window -->
        <div class="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950">
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="absolute inset-0 transition-all duration-700 ease-in-out"
            :class="[
              index === currentSlide 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-105 pointer-events-none'
            ]"
          >
            <!-- Image with NuxtImg -->
            <NuxtImg 
              :src="slide.src" 
              :alt="slide.title" 
              class="w-full h-full object-cover"
              loading="lazy"
            />
            
            <!-- Vignette Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <!-- Slide Content / Caption -->
            <div 
              class="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-left text-white transform transition-transform duration-700 delay-100"
              :class="index === currentSlide ? 'translate-y-0' : 'translate-y-4'"
            >
              <h3 class="text-xl sm:text-2xl font-bold text-primary-light mb-2">{{ slide.title }}</h3>
              <p class="text-white/90 text-xs sm:text-sm max-w-2xl leading-relaxed">{{ slide.description }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <!-- Prev Button -->
        <button 
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-primary hover:text-white text-neutral-dark p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next Button -->
        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-primary hover:text-white text-neutral-dark p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Indicator Dots -->
      <div class="flex justify-center space-x-3 mt-6">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          @click="setSlide(index)"
          class="h-3 rounded-full transition-all duration-300"
          :class="index === currentSlide ? 'w-8 bg-primary' : 'w-3 bg-neutral-base/30 hover:bg-neutral-base/60'"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>