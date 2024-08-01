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
