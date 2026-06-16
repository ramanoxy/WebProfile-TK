<template>
  <section id="about" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      <!-- Intro Section -->
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <div class="w-full md:w-1/2">
          <div class="bg-neutral-light h-80 rounded-3xl overflow-hidden shadow-md flex justify-center items-center">
            <img
              src="/images/jjuk.webp"
              alt="Foto Anak Ceria"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <span class="text-primary font-bold text-sm tracking-wider uppercase bg-primary-light px-4 py-1.5 rounded-full">Tentang Kami</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-neutral-dark">Membangun Karakter Sejak Dini</h2>
          <p class="text-lg text-neutral-base leading-relaxed">
            TK Aisyiyah Alam Ceria lebih dari sekadar sekolah. Kami adalah rumah kedua bagi anak-anak untuk mengeksplorasi rasa ingin tahu mereka dengan kurikulum yang berpusat pada anak dan menyatu dengan alam.
          </p>
        </div>
      </div>

      <!-- Visi, Misi & Tujuan Section -->
      <div class="pt-8 border-t border-neutral-100">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Visi Card -->
          <div class="bg-primary-light/30 border border-primary/10 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-neutral-dark mb-4">Visi Kami</h3>
            <p class="text-neutral-base leading-relaxed text-sm sm:text-base">
              Mencetak generasi berkarakter islami, cerdas, kreatif, mandiri, ceria, dan peduli lingkungan.
            </p>
          </div>

          <!-- Misi Card -->
          <div class="bg-secondary-light/30 border border-secondary/10 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-neutral-dark mb-4">Misi Kami</h3>
            <ul class="space-y-3 text-neutral-base text-sm sm:text-base">
              <li class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                <span>Mengembangkan berbagai potensi dan keunggulan anak didik sesuai dengan tahapan perkembangan anak.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                <span>Membiasakan perilaku anak didik sesuai dengan Al Qur’an dan Hadits.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                <span>Membiasakan kemandirian anak.</span>
              </li>
            </ul>
          </div>

          <!-- Tujuan Card -->
          <div class="bg-neutral-light border border-neutral-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-12 h-12 bg-neutral-dark rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-neutral-dark/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-extrabold text-neutral-dark mb-4">Tujuan Kami</h3>
            <ul class="space-y-3 text-neutral-base text-sm sm:text-base">
              <li class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-dark mt-2.5 shrink-0"></span>
                <span>Membentuk anak yang berkarakter kuat, ceria, mandiri, dan berakhlak mulia.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-dark mt-2.5 shrink-0"></span>
                <span>Mengembangkan stimulus anak usia dini.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-dark mt-2.5 shrink-0"></span>
                <span>Menekankan pada kemandirian dan leadership.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>