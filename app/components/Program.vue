<script setup>
const programs = [
  { name: 'Toddler Class', age: '2-3 Tahun', desc: 'Fokus pada sensori & motorik kasar.', badge: 'bg-primary' },
  { name: 'Nursery Class', age: '3-4 Tahun', desc: 'Pengenalan bahasa & kemandirian.', badge: 'bg-secondary' },
  { name: 'Kindergarten', age: '5-6 Tahun', desc: 'Persiapan calistung & problem solving.', badge: 'bg-neutral-dark' },
]
</script>

<template>
  <section id="program" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-12">Program Unggulan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="prog in programs" :key="prog.name" class="bg-neutral-light rounded-3xl p-8 relative">
          <div :class="prog.badge" class="absolute top-6 right-6 px-4 py-1.5 rounded-full text-sm font-bold text-white">
            {{ prog.age }}
          </div>
          <h3 class="text-2xl font-extrabold text-neutral-dark mt-8 mb-3">{{ prog.name }}</h3>
          <p class="text-neutral-base">{{ prog.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>