// start map function
var enqScriptURL =
  "https://script.google.com/macros/s/AKfycbwsoQhQT0IY1rnJApxkTh8pQj8tlTS1SXMUGiZTtNIPmpz_ZG8eZT0hS-e5yEMpEdAuiQ/exec";

function submitForm(form, successMessage, googeScriptURL) {
  // Add current date and time to the form data
  var formData = new FormData(form);
  var currentDate = new Date();
  formData.append("Date", currentDate.toLocaleString());

  showLoader();

  fetch(googeScriptURL, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      hideLoader();
      if (data.result == "success") {
        alert("succes");
        form.reset();
        resetBorderColors(form);
      } else {
        alert("fail2");
      }
    })
    .catch((error) => {
      hideLoader();

      alert("fail3");

      console.error("Error!", error.message);
    });
}

function resetBorderColors(form) {
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.style.borderColor = "#ccc";
    input.style.outlineColor = "#ccc";
  });
}

function setupFormValidation(form, scriptURL, successMessage) {
  // Function to check if an input is valid
  function isValidInput(input) {
    return input.checkValidity();
  }
  var inputs = form.querySelectorAll("input[required]");
  // Function to check all inputs and enable/disable submit button
  function validateForm() {
    let isValidForm = true;

    inputs.forEach((input) => {
      if (!isValidInput(input)) {
        isValidForm = false;
        input.style.borderColor = "#bd3135";
        input.style.outlineColor = "#bd3135";
      } else {
        input.style.borderColor = "#2ec97e";
        input.style.outlineColor = "#2ec97e";
      }
    });
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validateForm();
    });
  });

  // Submit form function
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = Array.from(inputs).every(isValidInput);
    if (isValid) {
      submitForm(form, successMessage, scriptURL);
    } else {
      alert("fail4");
    }
  });
}

// Example usage for form1
var form1 = document.getElementById("enquiryForm");
if (form1) {
  setupFormValidation(
    form1,
    enqScriptURL,
    "Thank you! Your quote request has been sent successfully."
  );
}

function showLoader() {
  const overlay = document.querySelector(".overlay-screen");
  if (overlay) {
    overlay.style.display = "block";
  }
}

function hideLoader() {
  const overlay = document.querySelector(".overlay-screen");
  if (overlay) {
    overlay.style.display = "none";
  }
}

$("#fun-deals").slick({
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  // variableWidth: true
  responsive: [
    {
      breakpoint: 2000,
      settings: "unslick",
    },
    {
      breakpoint: 591,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$("#bday-tales").slick({
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  // variableWidth: true
  responsive: [
    {
      breakpoint: 2000,
      settings: "unslick",
    },
    {
      breakpoint: 591,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
