// ========== Prefix Kelompok ==========
// Prefix class dan id Kelompok 3.
const PREFIX = 'k3';

// ========== Scroll Reveal ==========
const revealEls = document.querySelectorAll('.k3-reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(`${PREFIX}-in`); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add(`${PREFIX}-in`));
}

// Back to top button removed per user request

// ========== DOM Elements ==========
const menuToggle = document.getElementById(`${PREFIX}-menu-toggle`);
const menuList = document.getElementById(`${PREFIX}-menu-list`);
const wadahGaleri = document.getElementById(`${PREFIX}-wadah-galeri`);
const formKontak = document.getElementById(`${PREFIX}-form-kontak`);

// ========== Menu Hamburger Toggle (Semua Halaman) ==========
if (menuToggle && menuList) {
  menuToggle.addEventListener('click', function() {
    const open = menuList.classList.toggle(`${PREFIX}-show`);
    menuToggle.classList.toggle(`${PREFIX}-open`, open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

// ========== Data Galeri (Khusus galeri.html) ==========
const labelKategori = {
  sejarah: 'Sejarah',
  alam: 'Alam',
  kuliner: 'Kuliner'
};

const dataGaleri = [
  {
    file: 'img/makam_rajo.jpg',
    alt: 'Makam Rajo',
    judul: 'Makam Rajo',
    keterangan: 'Makam tempat bersemayamnya raja-raja Jambi .',
    kategori: 'sejarah',
    ukuran: 'besar'
  },
  {
    file: 'img/candi_2.jpeg',
    alt: 'Candi Muaro Jambi',
    judul: 'Candi Muaro Jambi',
    keterangan: 'Sisa percandian kuno yang menjadi jejak peradaban Melayu di Jambi.',
    kategori: 'sejarah',
    ukuran: 'normal'
  },
  {
    file: 'img/benteng_muara_tembesi.jpg',
    alt: 'Benteng Muaro Tembesi',
    judul: 'Benteng Muaro Tembesi',
    keterangan: 'Benteng peninggalan kolonial Belanda di kawasan Muaro Jambi.',
    kategori: 'sejarah',
    ukuran: 'tinggi'
  },
  {
    file: 'img/klenteng_hok_tek.webp',
    alt: 'klenteng Hok Tek',
    judul: 'klenteng Hok Tek',
    keterangan: 'Kelenteng tertua di Jambi berdiri sekitar tahun 1800.',
    kategori: 'sejarah',
    ukuran: 'lebar'
  },
  {
    file: 'img/rumah_batu.jpg',
    alt: 'Rumah Batu',
    judul: 'Rumah Batu',
    keterangan: 'Rumah Batu merupakan rumah dari Pangeran Wirokusumo, yang bernama asli Ali Idrus Al-Jufri.',
    kategori: 'sejarah',
    ukuran: 'normal'
  },
  {
    file: 'img/masjid_alfalah.jpg',
    alt: 'Masjid Alfalah',
    judul: 'Masjid Alfalah',
    keterangan: 'Masjid yang sangat terkenal dengan sebutan "masjid seribu tiang".',
    kategori: 'sejarah',
    ukuran: 'besar'
  },
  {
    file: 'img/gunung_kerinci.jpg',
    alt: 'Gunung Kerinci',
    judul: 'Gunung Kerinci',
    keterangan: 'Puncak tertinggi di Sumatera dengan panorama alam Kerinci.',
    kategori: 'alam',
    ukuran: 'besar'
  },
  {
    file: 'img/danau_sipin.jpeg',
    alt: 'Danau Sipin',
    judul: 'Danau Sipin',
    keterangan: 'Pemandangan tenang di tengah Kota Jambi yang cocok untuk bersantai.',
    kategori: 'alam',
    ukuran: 'lebar'
  },
  {
    file: 'img/danau_kaco.jpeg',
    alt: 'Danau Kaco',
    judul: 'Danau Kaco',
    keterangan: 'Danau jernih di kawasan Taman Nasional Kerinci Seblat.',
    kategori: 'alam',
    ukuran: 'tinggi'
  },
  {
    file: 'img/pulau_berhala.jpg',
    alt: 'Pulau Berhala',
    judul: 'Pulau Berhala',
    keterangan: 'pulau tropis yang terletak di Selat Berhala di antara wilayah Jambi dan Kabupaten Lingga, Provinsi Kepulauan Riau.',
    kategori: 'alam',
    ukuran: 'tinggi'
  },
  {
    file: 'img/gentala.jpg',
    alt: 'Jembatan Gentala Arasy',
    judul: 'Gentala Arasy',
    keterangan: 'Jembatan ikonik di atas Sungai Batanghari, wajah modern kota Jambi.',
    kategori: 'alam',
    ukuran: 'tinggi'
  },
  {
    file: 'img/hutan_kota.jpeg',
    alt: 'Hutan Kota Muhammad Sabki',
    judul: 'Hutan Kota Muhammad Sabki',
    keterangan: 'Ruang hijau untuk menikmati suasana alami di Kota Jambi.',
    kategori: 'alam',
    ukuran: 'normal'
  },
  {
    file: 'img/danau_gunung_tujuh.jpeg',
    alt: 'Danau Gunung Tujuh',
    judul: 'Danau Gunung Tujuh',
    keterangan: 'danau kaldera vulkanik yang terletak di Desa Pelompek, Kecamatan Kayu Aro, Kabupaten Kerinci, Provinsi Jambi.',
    kategori: 'alam',
    ukuran: 'lebar'
  },
  {
    file: 'img/sungai_batanghari.jpeg',
    alt: 'Pemandangan Sungai Batanghari',
    judul: 'Pemandangan Sungai Batanghari',
    keterangan: 'sungai terpanjang di Pulau Sumatra dengan panjang sekitar 775-800 kilometer.',
    kategori: 'alam',
    ukuran: 'normal'
  },
  {
    file: 'img/jambi_paradise.jpeg',
    alt: 'Taman Wisata Jambi Paradise',
    judul: 'Jambi Paradise',
    keterangan: 'Destinasi rekreasi keluarga di Jambi.',
    kategori: 'alam',
    ukuran: 'normal'
  },
  {
    file: 'img/taman_rimba.jpg',
    alt: 'Taman Rimbo Jambi',
    judul: 'Taman Rimbo Jambi',
    keterangan: 'Kawasan rekreasi dan konservasi satwa di Kota Jambi.',
    kategori: 'alam',
    ukuran: 'tinggi'
  },
  {
    file: 'img/bolu_kojo.webp',
    alt: 'Bolu Kojo',
    judul: 'Bolu Kojo',
    keterangan: 'kue khas Jambi yang punya warna hijau mencolok dan aroma pandan yang menggoda.',
    kategori: 'kuliner',
    ukuran: 'besar'
  },
  {
    file: 'img/nasi_gemuk.webp',
    alt: 'Nasi Gemuk Khas Jambi',
    judul: 'Nasi Gemuk Khas Jambi',
    keterangan: 'Kalau di Jawa ada nasi uduk, di Jambi ada Nasi Gemuk!.',
    kategori: 'kuliner',
    ukuran: 'normal'
  },
  {
    file: 'img/dodol_kentang.webp',
    alt: 'Dodol Kentang Khas Jambi',
    judul: 'Dodol Kentang Khas Jambi',
    keterangan: 'Di Jambi, Dodol Kentang jadi oleh-oleh khas yang banyak diminati.',
    kategori: 'kuliner',
    ukuran: 'lebar'
  },
  {
    file: 'img/kuliner_tempoyak.jpeg',
    alt: 'Tempoyak khas Jambi',
    judul: 'Tempoyak',
    keterangan: 'Durian fermentasi dengan rasa unik yang menjadi ciri kuliner lokal.',
    kategori: 'kuliner',
    ukuran: 'normal'
  },
  {
    file: 'img/kue_padamaran.webp',
    alt: 'Kue Padamaran Khas Jambi',
    judul: 'Kue Padamaran Khas Jambi',
    keterangan: 'Memiliki cita rasa gurih dengan tekstur lembut mirip bubur sumsum, kue ini juga dikenal dengan warna hijaunya yang dihasilkan dari larutan air suji.',
    kategori: 'kuliner',
    ukuran: 'besar'
  },
];

let galeriAktif = [...dataGaleri];
let lightboxIndex = 0;

const lightbox = document.getElementById(`${PREFIX}-lightbox`);
const lightboxImg = document.getElementById(`${PREFIX}-lightbox-img`);
const lightboxTitle = document.getElementById(`${PREFIX}-lightbox-title`);
const lightboxDesc = document.getElementById(`${PREFIX}-lightbox-desc`);
const lightboxKategori = document.getElementById(`${PREFIX}-lightbox-kategori`);

function bukaLightbox(index) {
  if (!lightbox || !galeriAktif.length) return;
  lightboxIndex = (index + galeriAktif.length) % galeriAktif.length;
  const foto = galeriAktif[lightboxIndex];

  lightboxImg.src = foto.file;
  lightboxImg.alt = foto.alt;
  lightboxTitle.textContent = foto.judul;
  lightboxDesc.textContent = foto.keterangan;
  lightboxKategori.textContent = labelKategori[foto.kategori] || foto.kategori;

  lightbox.hidden = false;
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add(`${PREFIX}-lightbox-open`);
}

function tutupLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove(`${PREFIX}-lightbox-open`);
  lightboxImg.removeAttribute('src');
}

function geserLightbox(step) {
  bukaLightbox(lightboxIndex + step);
}

// ========== Fungsi Tampilkan Galeri ==========
function tampilkanGaleri(kategori) {
  if (!wadahGaleri) return;

  wadahGaleri.innerHTML = '';

  galeriAktif = kategori === 'semua'
    ? [...dataGaleri]
    : dataGaleri.filter(foto => foto.kategori === kategori);

  if (galeriAktif.length === 0) {
    const empty = document.createElement('p');
    empty.className = `${PREFIX}-galeri-empty`;
    empty.textContent = 'Belum ada foto untuk kategori ini.';
    wadahGaleri.appendChild(empty);
    return;
  }

  galeriAktif.forEach((foto, index) => {
    const figure = document.createElement('figure');
    const ukuranClass = foto.ukuran && foto.ukuran !== 'normal'
      ? ` ${PREFIX}-mosaic-${foto.ukuran}`
      : '';
    figure.className = `${PREFIX}-foto-item${ukuranClass} ${PREFIX}-reveal`;
    figure.setAttribute('data-kategori', foto.kategori);
    figure.setAttribute('tabindex', '0');
    figure.setAttribute('role', 'button');
    figure.setAttribute('aria-label', `Perbesar foto ${foto.judul}`);

    const img = document.createElement('img');
    img.src = foto.file;
    img.alt = foto.alt;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');
    const title = document.createElement('h3');
    title.textContent = foto.judul;
    figcaption.appendChild(title);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    wadahGaleri.appendChild(figure);

    const buka = () => bukaLightbox(index);
    figure.addEventListener('click', buka);
    figure.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        buka();
      }
    });

    requestAnimationFrame(() => {
      setTimeout(() => figure.classList.add(`${PREFIX}-in`), index * 50);
    });
  });
}

// ========== Filter Galeri (Khusus galeri.html) ==========
const galeriTabs = document.querySelectorAll(`.${PREFIX}-galeri-tab`);

if (galeriTabs.length > 0 && wadahGaleri) {
  galeriTabs.forEach(btn => {
    btn.addEventListener('click', function() {
      const kategori = this.getAttribute('data-kategori');

      galeriTabs.forEach(b => {
        b.classList.remove(`${PREFIX}-aktif`);
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add(`${PREFIX}-aktif`);
      this.setAttribute('aria-selected', 'true');

      tampilkanGaleri(kategori);
    });
  });

  tampilkanGaleri('semua');
}

// ========== Lightbox controls ==========
if (lightbox) {
  lightbox.querySelectorAll('[data-lightbox-close]').forEach(el => {
    el.addEventListener('click', tutupLightbox);
  });

  const prevBtn = lightbox.querySelector(`.${PREFIX}-lightbox-prev`);
  const nextBtn = lightbox.querySelector(`.${PREFIX}-lightbox-next`);
  if (prevBtn) prevBtn.addEventListener('click', () => geserLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => geserLightbox(1));

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') tutupLightbox();
    if (e.key === 'ArrowLeft') geserLightbox(-1);
    if (e.key === 'ArrowRight') geserLightbox(1);
  });
}

// ========== Filter Destinasi (Khusus data.html) ==========
const dataCards = document.getElementById(`${PREFIX}-data-cards`);
const dataFilterBtns = document.querySelectorAll(`.${PREFIX}-data-filter-btn`);

if (dataCards && dataFilterBtns.length > 0) {
  dataFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const kategori = this.getAttribute('data-kategori');

      dataFilterBtns.forEach(b => b.classList.remove(`${PREFIX}-aktif`));
      this.classList.add(`${PREFIX}-aktif`);

      dataCards.querySelectorAll(`.${PREFIX}-data-card`).forEach(card => {
        const match = kategori === 'semua' || card.getAttribute('data-kategori') === kategori;
        card.classList.toggle(`${PREFIX}-hide`, !match);
      });
    });
  });
}

// ========== Fungsi Helper: Tampilkan Error ==========
function tampilkanError(inputId, pesan) {
  // Hapus error lama kalau ada
  const input = document.getElementById(inputId);
  if (!input) return;
  
  const oldError = input.parentNode.querySelector(`.${PREFIX}-error`);
  if (oldError) {
    oldError.remove();
  }
  
  // Buat elemen error baru
  const error = document.createElement('span');
  error.className = `${PREFIX}-error`;
  error.textContent = pesan;
  
  // Insert setelah input
  input.parentNode.insertBefore(error, input.nextSibling);
}

// ========== Fungsi Helper: Hapus Semua Error ==========
function hapusSemuaError() {
  const errors = document.querySelectorAll(`.${PREFIX}-error`);
  errors.forEach(err => err.remove());
}

// ========== Validasi Form (Khusus kontak.html) ==========
if (formKontak) {
  formKontak.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validasi bawaan HTML untuk required, email, dan pattern.
    if (!formKontak.checkValidity()) {
      formKontak.reportValidity();
      return;
    }

    hapusSemuaError();

    const pesanDiv = document.getElementById(`${PREFIX}-pesan`);
    if (pesanDiv) {
      pesanDiv.className = '';
      pesanDiv.innerHTML = '';
      pesanDiv.style.display = 'none';
    }

    let valid = true;

    // Validasi 1: Minimal 1 checkbox dicentang
    const checkboxes = formKontak.querySelectorAll('input[name="minat"]:checked');
    if (checkboxes.length === 0) {
      valid = false;
      const minatInput = formKontak.querySelector('input[name="minat"]');
      const minatFieldset = minatInput && minatInput.closest('fieldset');
      if (minatFieldset) {
        const errorSpan = document.createElement('span');
        errorSpan.className = `${PREFIX}-error`;
        errorSpan.textContent = 'Pilih minimal satu minat wisata';
        minatFieldset.appendChild(errorSpan);
      }
    }

    // Validasi 2: Textarea minimal 20 karakter
    const textarea = document.getElementById('pesan');
    if (textarea) {
      const pesanValue = textarea.value.trim();
      if (pesanValue.length < 20) {
        valid = false;
        tampilkanError('pesan', `Pesan minimal 20 karakter (saat ini: ${pesanValue.length} karakter)`);
      }
    }

    if (valid) {
      if (pesanDiv) {
        pesanDiv.className = `${PREFIX}-success`;
        pesanDiv.innerHTML = '<strong>Terima kasih!</strong> Pesan Anda berhasil dikirim. Kami akan segera merespons.';
        pesanDiv.style.display = 'block';
      }
      formKontak.reset();
      if (pesanDiv) pesanDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (pesanDiv) {
      pesanDiv.className = `${PREFIX}-error-state`;
      pesanDiv.innerHTML = '<strong>Gagal!</strong> Mohon perbaiki kesalahan pada formulir di atas.';
      pesanDiv.style.display = 'block';
      pesanDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

// ========== Inisialisasi Galeri (fallback jika tab filter tidak ada) ==========
if (wadahGaleri && galeriTabs.length === 0) {
  tampilkanGaleri('semua');
}

// ========== Lazy Loading removed - images show immediately ==========

// ========== Navigation Shadow on Scroll ==========
const nav = document.getElementById(`${PREFIX}-nav`);
if (nav) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Add shadow when scrolled
    nav.classList.toggle(`${PREFIX}-scrolled`, currentScroll > 10);
    
    lastScroll = currentScroll;
  }, { passive: true });
}

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Ignore empty hash or hash-only links
    if (href === '#' || href === '#!') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = nav ? nav.offsetHeight : 0;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========== Enhanced Menu Toggle with Animation ==========
if (menuToggle && menuList) {
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
      if (menuList.classList.contains(`${PREFIX}-show`)) {
        menuList.classList.remove(`${PREFIX}-show`);
        menuToggle.classList.remove(`${PREFIX}-open`);
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
  
  // Close menu when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuList.classList.contains(`${PREFIX}-show`)) {
      menuList.classList.remove(`${PREFIX}-show`);
      menuToggle.classList.remove(`${PREFIX}-open`);
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close menu when clicking menu item
  menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 600) {
        menuList.classList.remove(`${PREFIX}-show`);
        menuToggle.classList.remove(`${PREFIX}-open`);
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ========== Stats Counter Animation ==========
const statsNumbers = document.querySelectorAll('.k3-stat strong, .k3-profil-stat strong, .k3-data-stat strong');
if ('IntersectionObserver' in window && statsNumbers.length > 0) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalText = target.textContent;
        
        // Only animate if it contains numbers
        if (/\d/.test(finalText)) {
          // Extract number and unit
          const matches = finalText.match(/([\d.,]+)\s*(.*)/);
          if (matches) {
            const numberStr = matches[1].replace(/[.,]/g, '');
            const number = parseInt(numberStr);
            const unit = matches[2] || '';
            
            // Skip if too large
            if (number > 0 && number <= 100000) {
              let current = 0;
              const increment = number / 50;
              const duration = 1500;
              const stepTime = duration / 50;
              
              target.textContent = '0' + (unit ? ' ' + unit : '');
              
              const counter = setInterval(() => {
                current += increment;
                if (current >= number) {
                  // Format number with proper separators
                  const formatted = number.toLocaleString('id-ID');
                  target.textContent = formatted + (unit ? ' ' + unit : '');
                  clearInterval(counter);
                } else {
                  const formatted = Math.floor(current).toLocaleString('id-ID');
                  target.textContent = formatted + (unit ? ' ' + unit : '');
                }
              }, stepTime);
            }
          }
        }
        
        statsObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  statsNumbers.forEach(stat => statsObserver.observe(stat));
}

// ========== Card Tilt Effect (Subtle 3D) ==========
const tiltCards = document.querySelectorAll('.k3-kartu, .k3-data-card, .k3-featured-card');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    const tiltX = deltaY * -5; // Max 5 degrees
    const tiltY = deltaX * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ========== Enhanced Form Validation Feedback ==========
if (formKontak) {
  const inputs = formKontak.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    // Real-time validation feedback
    input.addEventListener('blur', function() {
      if (this.hasAttribute('required') && !this.value.trim()) {
        this.style.borderColor = 'var(--primary-red)';
      } else if (this.type === 'email' && this.value) {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
        this.style.borderColor = emailValid ? 'var(--primary-gold)' : 'var(--primary-red)';
      } else if (this.value) {
        this.style.borderColor = 'var(--primary-gold)';
      }
    });
    
    input.addEventListener('focus', function() {
      this.style.borderColor = '';
    });
  });
  
  // Character counter for textarea
  const textarea = formKontak.querySelector('#pesan');
  if (textarea) {
    const counterDiv = document.createElement('div');
    counterDiv.className = `${PREFIX}-char-counter`;
    textarea.parentNode.appendChild(counterDiv);
    
    const updateCounter = () => {
      const length = textarea.value.length;
      const minLength = 20;
      counterDiv.textContent = `${length} / ${minLength} karakter minimum`;
      counterDiv.classList.toggle(`${PREFIX}-char-counter-valid`, length >= minLength);
    };
    
    textarea.addEventListener('input', updateCounter);
    updateCounter();
  }
}

// ========== Loading Progress Bar ==========
const loadingBar = document.createElement('div');
loadingBar.className = `${PREFIX}-loading-bar`;
document.body.appendChild(loadingBar);

let loadingProgress = 0;
const showLoading = () => {
  loadingProgress = 0;
  loadingBar.style.width = '0%';
  
  const interval = setInterval(() => {
    loadingProgress += Math.random() * 10;
    if (loadingProgress >= 90) {
      clearInterval(interval);
    }
    loadingBar.style.width = Math.min(loadingProgress, 90) + '%';
  }, 200);
  
  return interval;
};

const hideLoading = (interval) => {
  if (interval) clearInterval(interval);
  loadingBar.style.width = '100%';
  setTimeout(() => {
    loadingBar.style.width = '0%';
  }, 300);
};

// Show loading on page load
window.addEventListener('DOMContentLoaded', () => {
  const interval = showLoading();
  window.addEventListener('load', () => hideLoading(interval));
});

// Parallax Effect removed - background stays fixed

// ========== Easter Egg: Logo Click Counter ==========
const logo = document.querySelector('.k3-logo');
if (logo) {
  let clickCount = 0;
  let clickTimer = null;
  
  logo.addEventListener('click', () => {
    clickCount++;
    
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 2000);
    
    if (clickCount === 5) {
      // Easter egg: Change page theme briefly
      document.body.style.filter = 'hue-rotate(180deg)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 1000);
      
      // Show message
      const msg = document.createElement('div');
      msg.textContent = '🎉 Easter Egg Found! Jambi Power Activated!';
      msg.className = `${PREFIX}-easter-egg-message`;
      document.body.appendChild(msg);
      
      setTimeout(() => {
        msg.remove();
      }, 2000);
      
      clickCount = 0;
    }
  });
}

// ========== Keyboard Navigation Enhancement ==========
document.addEventListener('keydown', (e) => {
  // Alt + H: Go to Home
  if (e.altKey && e.key === 'h') {
    e.preventDefault();
    window.location.href = 'index.html';
  }
  
  // Alt + G: Go to Gallery
  if (e.altKey && e.key === 'g') {
    e.preventDefault();
    window.location.href = 'galeri.html';
  }
  
  // Alt + C: Go to Contact
  if (e.altKey && e.key === 'c') {
    e.preventDefault();
    window.location.href = 'kontak.html';
  }
});

// ========== Accessibility: Skip to Main Content ==========
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.className = `${PREFIX}-skip-link`;
skipLink.addEventListener('focus', () => {
  skipLink.classList.add(`${PREFIX}-skip-link-visible`);
});
skipLink.addEventListener('blur', () => {
  skipLink.classList.remove(`${PREFIX}-skip-link-visible`);
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Add ID to main if not exists
const main = document.querySelector('main');
if (main && !main.id) {
  main.id = 'main-content';
}
