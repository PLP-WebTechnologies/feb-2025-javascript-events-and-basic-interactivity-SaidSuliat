document.getElementById('magicButton').addEventListener('click', () => {
  const button = document.getElementById('magicButton');
  button.textContent = 'Clicked!';
  button.style.backgroundColor = '#ffa';
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.classList.add('hovered'));
hoverBox.addEventListener('mouseleave', () => hoverBox.classList.remove('hovered'));

document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById('secretButton').addEventListener('dblclick', () => {
  alert('🎉 Secret double-click action triggered!');
});

const images = [
  "./img3.jpg",
  "./img2.jpg",
  "./img1.jpg",
];
let currentImage = 0;

document.getElementById('nextImage').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('slideImage').src = images[currentImage];
});

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
    document.getElementById(tab.dataset.tab).classList.remove('hidden');
  });
});

const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (!email.value.includes('@') || password.value.length < 8) {
    feedback.textContent = 'Please enter a valid email and a password with at least 8 characters.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
  }
});

document.getElementById('password').addEventListener('input', (e) => {
  if (e.target.value.length < 8) {
    feedback.textContent = 'Password too short!';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = '';
  }
});
