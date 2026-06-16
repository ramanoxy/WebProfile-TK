<script setup>
// Data array untuk Sosial Media. 
// Daripada menulis SVG berulang kali, kita simpan 'path' SVG-nya di sini.
const socialMedia = [
  { 
    name: 'Instagram', 
    url: '#', 
    // Class Tailwind untuk warna dasar dan efek hover
    theme: 'text-pink-600 bg-pink-50 hover:bg-pink-600 hover:text-white',
    // Path SVG Instagram murni
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
  },
  { 
    name: 'Facebook', 
    url: '#', 
    theme: 'text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white',
    // Path SVG Facebook
    path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'
  }
]
</script>

<template>
  <section id="contact" class="py-24 bg-neutral-light relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Card Informasi Kontak -->
      <div class="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl text-center">
        <h2 class="text-3xl font-extrabold text-neutral-dark mb-4">Hubungi Kami</h2>
        <p class="text-neutral-base mb-12 max-w-2xl mx-auto">
          Punya pertanyaan seputar TK Aisyiyah Alam Ceria? Jangan ragu untuk menyapa kami melalui kontak di bawah ini.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <!-- 1. Alamat (Menggunakan Outline Icon) -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h4 class="font-bold text-lg text-neutral-dark mb-2">Alamat</h4>
            <p class="text-neutral-base">Komplek Masjid At Taubah<br>Desa Klipan RT2 RW2, Tohudan, Colomadu</p>
          </div>
          
          <!-- 2. Email (Menggunakan Outline Icon) -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-secondary-light text-secondary rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h4 class="font-bold text-lg text-neutral-dark mb-2">Email</h4>
            <a href="mailto:tkaisyiyahtohudan01@gmail.com" class="text-neutral-base hover:text-primary transition-colors">
              tkaisyiyahtohudan01@gmail.com
            </a>
          </div>
          
          <!-- 3. Sosial Media (Icon Interaktif) -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </div>
            <h4 class="font-bold text-lg text-neutral-dark mb-4">Sosial Media</h4>
            <!-- Memanggil SVG dari Array Vue secara dinamis -->
            <div class="flex gap-4">
              <a v-for="sosmed in socialMedia" :key="sosmed.name" :href="sosmed.url" 
                 :class="sosmed.theme"
                 class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                 :aria-label="sosmed.name">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="sosmed.path" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Floating WhatsApp Button Tetap Sama -->
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/6281802505333" target="_blank" rel="noopener noreferrer"
       class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/40 transition-all hover:scale-110 flex items-center justify-center group cursor-pointer">
      
      <!-- Icon SVG WhatsApp Premium -->
      <!-- Icon SVG WhatsApp Premium (Fix) -->
      <svg class="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
      
      <!-- Tooltip -->
      <span class="absolute right-20 bg-white text-neutral-dark text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat Admin
      </span>
    </a>
  </section>
</template>