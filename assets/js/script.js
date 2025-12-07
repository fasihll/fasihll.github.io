'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
	elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
	elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// modal variable
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// modal toggle function
const testimonialsModalFunc = function () {
	modalContainer.classList.toggle('active');
	overlay.classList.toggle('active');
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener('click', function () {
		modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
		modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
		modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
		modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

		testimonialsModalFunc();
	});
}

// add click event to modal close button
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {
	elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
	selectItems[i].addEventListener('click', function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		elementToggleFunc(select);
		filterFunc(selectedValue);
	});
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
	for (let i = 0; i < filterItems.length; i++) {
		if (selectedValue === 'all') {
			filterItems[i].classList.add('active');
		} else if (selectedValue === filterItems[i].dataset.category) {
			filterItems[i].classList.add('active');
		} else {
			filterItems[i].classList.remove('active');
		}
	}
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
	filterBtn[i].addEventListener('click', function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		filterFunc(selectedValue);

		lastClickedBtn.classList.remove('active');
		this.classList.add('active');
		lastClickedBtn = this;
	});
}

// contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
	formInputs[i].addEventListener('input', function () {
		// check form validation
		if (form.checkValidity()) {
			formBtn.removeAttribute('disabled');
		} else {
			formBtn.setAttribute('disabled', '');
		}
	});
}

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener('click', function () {
		for (let i = 0; i < pages.length; i++) {
			if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
				pages[i].classList.add('active');
				navigationLinks[i].classList.add('active');
				window.scrollTo(0, 0);
			} else {
				pages[i].classList.remove('active');
				navigationLinks[i].classList.remove('active');
			}
		}
	});
}

document.getElementById('sendMessageBtn').addEventListener('click', function () {
	var fullname = document.getElementById('fullname').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	var recipient = 'fasihullisan091966@gmail.com';
	var subject = fullname;
	var body = message;
	var url = 'https://mail.google.com/mail/?view=cm&to=' + encodeURIComponent(recipient) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

	window.location.href = url;
});

let elements = document.querySelectorAll('#itemView');

elements.forEach(function (element) {
	element.addEventListener('click', function (event) {
		event.preventDefault(); // Mencegah link default

		// Ambil URL dari atribut x-data
		let videoUrl = this.getAttribute('x-data');

		// Konversi URL ke format embed
		let videoId = videoUrl.split('v=')[1];
		let embedUrl = `https://www.youtube.com/embed/${videoId}`;

		// Set URL ke iframe
		let videoFrame = document.getElementById('videoFrame');
		videoFrame.src = embedUrl;

		// Tampilkan overlay dan popup
		document.getElementById('overlay').style.display = 'block';
		document.getElementById('popup').style.display = 'block';
	});
});

// Tutup popup saat klik ikon "X"
document.getElementById('closeIcon').addEventListener('click', closePopup);

// Tutup popup saat klik di luar popup
document.getElementById('overlay').addEventListener('click', closePopup);

function closePopup() {
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('popup').style.display = 'none';
	document.getElementById('videoFrame').src = ''; // Hentikan video saat popup ditutup
}

// --- LOGIKA POPUP PORTFOLIO BARU ---

const popupOverlay = document.getElementById('overlay');
const popupBox = document.getElementById('popup');
const closeIcon = document.getElementById('closeIcon');

// Elemen di dalam Popup
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupCategory = document.getElementById('popup-category');
const popupDesc = document.getElementById('popup-desc');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Variabel Slider
let currentImages = [];
let currentIndex = 0;

// Fungsi Update Gambar Slider
function updateSliderImage() {
	if (currentImages.length > 0) {
		popupImg.src = currentImages[currentIndex];
	}
}

// Event Listener untuk Tombol Prev/Next
prevBtn.addEventListener('click', function () {
	if (currentImages.length > 0) {
		currentIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
		updateSliderImage();
	}
});

nextBtn.addEventListener('click', function () {
	if (currentImages.length > 0) {
		currentIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
		updateSliderImage();
	}
});

// Ambil semua link portfolio
// Pastikan Anda sudah menambahkan class "portfolio-trigger" di HTML seperti di langkah 1
const portfolioLinks = document.querySelectorAll('.portfolio-trigger');

portfolioLinks.forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		// 1. Ambil data dari atribut HTML
		const title = this.getAttribute('data-title');
		const category = this.getAttribute('data-category');
		const desc = this.getAttribute('data-description');

		// Parse data-images (string JSON menjadi Array)
		// Jika error/kosong, pakai gambar default dari tag img di dalamnya
		try {
			currentImages = JSON.parse(this.getAttribute('data-images'));
		} catch (error) {
			const fallbackImg = this.querySelector('img').src;
			currentImages = [fallbackImg];
		}

		// 2. Masukkan data ke elemen Popup
		popupTitle.innerText = title;
		popupCategory.innerText = category;
		popupDesc.innerText = desc;

		// 3. Reset Index Slider & Tampilkan Gambar Pertama
		currentIndex = 0;
		updateSliderImage();

		// Sembunyikan tombol navigasi jika hanya ada 1 gambar
		if (currentImages.length <= 1) {
			prevBtn.style.display = 'none';
			nextBtn.style.display = 'none';
		} else {
			prevBtn.style.display = 'block';
			nextBtn.style.display = 'block';
		}

		// 4. Tampilkan Popup
		popupOverlay.style.display = 'block';
		popupBox.style.display = 'block';
	});
});

// Fungsi Tutup Popup
function closePopup() {
	popupOverlay.style.display = 'none';
	popupBox.style.display = 'none';
}

closeIcon.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);
