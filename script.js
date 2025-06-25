console.log("Studio Kamu Website Loaded");

// Efek scroll halus untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Slider otomatis (jika dibutuhkan, harus ada elemen .slider di HTML)
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slider img");
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 3000);
}

// WA toggle menu
function toggleWAOptions(event) {
  event.preventDefault();
  const menu = document.getElementById('wa-options');
  if (menu) {
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
  }
}

// Filter gallery berdasarkan kategori
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    const isExclusive = item.classList.contains('exclusive');
    if (category === 'all') {
      item.style.display = isExclusive ? 'none' : 'block';
    } else {
      item.style.display = item.classList.contains(category) ? 'block' : 'none';
    }
  });
}

// Tutup menu WA jika klik di luar
window.addEventListener('click', function(e) {
  const menu = document.getElementById('wa-options');
  if (menu && !e.target.closest('.whatsapp-float') && !e.target.closest('#wa-options')) {
    menu.style.display = 'none';
  }
});

// Modal preview gambar galeri
document.addEventListener("DOMContentLoaded", function () {
  showSlides(); // Aktifkan slider jika ada elemen .slider

  const modalImg = document.getElementById("modalImage");
  const modalElement = document.getElementById("imageModal");

  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    });
  });

  // Tampilkan semua gambar pada awal
  filterGallery('all');
});
