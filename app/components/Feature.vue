<script setup>
const features = [
  { title: 'Guru Tersertifikasi', desc: 'Tim pengajar memiliki sertifikat pengajaran anak.', bg: 'bg-primary-light', text: 'text-primary' },
  { title: 'Keamanan', desc: 'Material area bermain yang soft-fall.', bg: 'bg-secondary-light', text: 'text-secondary' },
  { title: 'Kurikulum Kreatif', desc: 'Menggabungkan Montessori dan kurikulum nasional.', bg: 'bg-yellow-100', text: 'text-yellow-500' }
]
</script>

<template>
  <section id="feature" class="py-24 bg-neutral-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-neutral-dark">Keunggulan Kami</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="feat in features" :key="feat.title" class="bg-white p-10 rounded-3xl shadow-sm border border-gray-50">
          <div :class="[feat.bg, feat.text]" class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 font-bold text-2xl">✓</div>
          <h3 class="text-xl font-bold text-neutral-dark mb-3">{{ feat.title }}</h3>
          <p class="text-neutral-base">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>