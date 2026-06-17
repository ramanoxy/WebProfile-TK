<template>
  <section id="hero" class="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden bg-neutral-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Teks Kiri -->
        <div class="space-y-8 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-dark leading-tight">
            Tempat Bermain, Belajar & <span class="text-secondary">Tumbuh.</span>
          </h1>
          <p class="text-lg md:text-xl text-neutral-base max-w-lg mx-auto md:mx-0">
            Kami menyediakan lingkungan belajar yang aman, kreatif, dan menyenangkan untuk memaksimalkan potensi emas anak Anda.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" class="bg-secondary hover:bg-secondary-hover text-white px-8 py-3.5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-secondary/40 text-center">
              Mulai Petualangan
            </a>
          </div>
        </div>

        <!-- Ilustrasi Kanan -->
        <div class="hidden md:block">
          <div class="aspect-square bg-white/50 rounded-[3rem] rotate-3 p-4 shadow-xl">
            <div class="w-full h-full bg-secondary-light rounded-[2.5rem] flex items-center justify-center border-4 border-white">
               <img
                  src="/images/hero.jpeg"
                  alt="Foto Anak Ceria"
                  class="w-full h-full object-cover rounded-3xl"
                />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>