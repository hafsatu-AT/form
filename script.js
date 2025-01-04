// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Function to show the next page (page 2)
function nextPage() {
    // Validate Page 1
    let isValid = true;
    
    // Clear previous error messages
    clearErrors();

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === "") {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (email.trim() === "") {
        document.getElementById('emailError').textContent = "Email is required.";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate country
    const country = document.getElementById('country').value;
    if (country === "") {
        document.getElementById('countryError').textContent = "Please select a country.";
        isValid = false;
    }

    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = "Please select a gender.";
        isValid = false;
    }

    // If Page 1 is valid, show Page 2
    if (isValid) {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
    }
}

// Function to validate condition information (Page 2)
function validateCondition() {
    const condition = document.querySelector('input[name="condition"]:checked');
    if (!condition) {
        document.getElementById('conditionError').textContent = "Please select a medical condition option.";
        return false;
    }

    if (condition.value === "yes") {
        const conditionDetails = document.getElementById('conditionDetails').value.trim();
        if (conditionDetails === "") {
            document.getElementById('detailsError').textContent = "Please specify your medical condition.";
            return false;
        }
    }

    return true;
}

// Show condition details text area
function showConditionDetails() {
    document.getElementById('medicalDetails').style.display = 'block';
}

// Hide condition details text area
function hideConditionDetails() {
    document.getElementById('medicalDetails').style.display = 'none';
}

// Clear error messages
function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('countryError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('conditionError').textContent = '';
    document.getElementById('detailsError').textContent = '';
}

// Handle form submission
document.getElementById('userFormPage2').onsubmit = function (e) {
    e.preventDefault();

    // Validate condition details
    if (validateCondition()) {
        // Display submitted information
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const condition = document.querySelector('input[name="condition"]:checked').value;
    }
}    