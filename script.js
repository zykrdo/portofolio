// Fungsi untuk toggle taskbar
function toggleTaskbar() {
    const taskbarContent = document.querySelector('.taskbar-content');
    taskbarContent.classList.toggle('show');
}

// Fungsi untuk membuka modal foto
function openModal(src, caption) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = "none";
}

// Tutup modal ketika klik di luar gambar
window.onclick = function (event) {
    const modal = document.getElementById('photoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Tutup taskbar ketika klik di luar
document.addEventListener('click', function (event) {
    const taskbarContent = document.querySelector('.taskbar-content');
    const taskbarToggle = document.querySelector('.taskbar-toggle');

    if (!taskbarContent.contains(event.target) && !taskbarToggle.contains(event.target)) {
        taskbarContent.classList.remove('show');
    }
});

// Fungsi untuk toggle taskbar
function toggleTaskbar() {
    const taskbarContent = document.querySelector('.taskbar-content');
    taskbarContent.classList.toggle('show');
}

// Fungsi untuk membuka modal foto
function openModal(src, caption) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = "none";
}

// Tutup modal ketika klik di luar gambar
window.onclick = function (event) {
    const modal = document.getElementById('photoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Tutup taskbar ketika klik di luar
document.addEventListener('click', function (event) {
    const taskbarContent = document.querySelector('.taskbar-content');
    const taskbarToggle = document.querySelector('.taskbar-toggle');

    if (!taskbarContent.contains(event.target) && !taskbarToggle.contains(event.target)) {
        taskbarContent.classList.remove('show');
    }
});