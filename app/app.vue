<script setup>
// Bagian Otak: Mengatur judul tab browser dan memanggil Font dari Google
useHead({
  title: 'TK Aisyiyah Alam Ceria',
  meta: [
    { name: 'description', content: 'Sekolah TK alam untuk pertumbuhan optimal anak Anda.' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap' }
  ]
})
</script>

<template>
  <!-- Bagian Wajah: Membungkus semua balok komponen -->
  <div class="font-sans text-neutral-base antialiased bg-white selection:bg-primary-light selection:text-primary">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Feature />
      <Program />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
/* CSS murni untuk membuat efek scroll layar jadi halus (tidak lompat) */
html {
  scroll-behavior: smooth;
}
</style>