const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Optional: Smooth scroll or other scripts can go here

function showPopup(event) {
  event.preventDefault();
  const form = event.target;

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your message has been sent.",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  }).then(() => {
    form.submit();
  });
}

function showHirePopup() {
  Swal.fire({
    icon: 'info',
    title: '📞 Contact Details',
    html: `
      <p><i class="bx bx-phone-call"></i> <strong>Phone:</strong> 9441998178</p>
      <p><i class="bx bx-envelope"></i> <strong>Email:</strong> naveenruttala2020@gmail.com</p>
    `,
    confirmButtonText: 'Close'
  });
}
function showPortfolio() {
  // Hide landing section
  document.getElementById('landing').style.display = 'none';

  // Show main content
  const mainContent = document.getElementById('main-content');
  mainContent.style.display = 'block';

  // Scroll smoothly to the Home section
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}
