<template>
  <section id="gallery" class="py-24 bg-neutral-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-extrabold text-secondary mb-12">Galeri Keceriaan</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="aspect-square bg-slate-600 rounded-2xl flex items-center justify-center text-slate-400">
          <NuxtImg 
            src="/images/jjuk.webp" 
            alt="TK Aisyiyah Alam Ceria" 
            class="h-full w-full object-cover rounded-2xl"
            width="800"
            height="600"
            loading="eager"
          />
        </div>
        <div class="aspect-square bg-slate-600 rounded-2xl flex items-center justify-center text-slate-400">
          Foto 2
        </div>
        <div class="aspect-square bg-slate-600 rounded-2xl flex items-center justify-center text-slate-400">
          Foto 3
        </div>
        <div class="aspect-square bg-slate-600 rounded-2xl flex items-center justify-center text-slate-400">
          Foto 4
        </div>
        <div class="aspect-square bg-slate-600 rounded-2xl flex items-center justify-center text-slate-400">
          Foto 5
        </div>
        <div class="aspect-square bg-slate-600 rounded-2xl flex items-center justify-center text-slate-400">
          Foto 6
        </div>
      </div>
    </div>
  </section>
</template>