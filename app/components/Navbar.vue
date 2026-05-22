<script setup>
const links = [
  { name: 'Tentang', href: '#about' },
  { name: 'Fasilitas', href: '#feature' },
  { name: 'Program', href: '#program' },
  { name: 'Galeri', href: '#gallery' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <!-- Ganti Div ini dengan Image Tag -->
          <NuxtImg 
            src="/images/TKAAC.png" 
            alt="TK Aisyiyah Alam Ceria" 
            class="h-12 w-auto object-contain"
            width="100"
            height="120"
            loading="eager"
          />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8 items-center">
          <a v-for="link in links" :key="link.name" :href="link.href" 
             class="text-neutral-dark font-semibold hover:text-primary transition-colors duration-200">
            {{ link.name }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>