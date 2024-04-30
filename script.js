const sportSelect = document.getElementById('sport');
const ageGroupSelect = document.getElementById('age-group');
const calcButton = document.getElementById('calc-button');
const feeResult = document.getElementById('fee-result');

// Example fee structure
const fees = {
    soccer: {
        under10: 50,
        '10-15': 75,
        '15-20': 85,
        '20+': 100,
    },
    basketball: {
        under10: 55,
        '10-15': 80,
        '15-20': 90,
        '20+': 110,
    },
    softball: {
        under10: 45,
        '10-15': 70,
        '15-20': 80,
        '20+': 95,
    },
    tennis: {
        under10: 60,
        '10-15': 85,
        '15-20': 95,
        '20+': 120,
    },
    volleyball: {
        under10: 50,
        '10-15': 75,
        '15-20': 85,
        '20+': 100,
    }
};

calcButton.addEventListener('click', () => {
    const sport = sportSelect.value;
    const ageGroup = ageGroupSelect.value;

    if (fees[sport] && fees[sport][ageGroup]) {
        feeResult.textContent = 'Registration Fee: $' + fees[sport][ageGroup];
    } else {
        feeResult.textContent = 'Fee information not available, contact in helpline number.';
    }
});


function getAllStyles(element) {
    const computedStyle = getComputedStyle(element);
  
    // Simple example, would need better handling for full website
    for (let i = 0; i < computedStyle.length; i++) {
      let prop = computedStyle[i];
      let value = computedStyle.getPropertyValue(prop);
      console.log(`${prop}: ${value}`);
    }
  }



  document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show the success message
    document.getElementById('success-message').style.display = 'block';

    // Clear the form fields
    document.getElementById('inquiry-form').reset();
});


// Target the element to animate
const animatedText = document.querySelector('.animated-text');

// Options for the Intersection Observer
const options = {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Callback function for the Intersection Observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class when the element comes into view
            animatedText.classList.add('fade-in-up-animation');
            // Unobserve the target element after animation has been triggered
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Start observing the target element
observer.observe(animatedText);

  