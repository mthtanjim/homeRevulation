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


// start for form 

// Target the element to animate
const calBox = document.querySelector('.calBox');

// Options for the Intersection Observer
const optionss = {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Callback function for the Intersection Observer
const callbacks = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to show the form with animation
            calBox.classList.add('show');
            // Unobserve the target element after animation has been triggered
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer
const observers = new IntersectionObserver(callbacks, optionss);

// Start observing the target element
observers.observe(calBox);


// for sports container 

// Target all elements with the class name 'grid-item'
const sportsContainers = document.querySelectorAll('.grid-item');

// Options for the Intersection Observer
const optionsForS = {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Callback function for the Intersection Observer
const callbackForS = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to show the sports content with animation
            entry.target.classList.add('show');
            // Unobserve the target element after animation has been triggered
            observer.unobserve(entry.target);
        }
    });
};

// Create a separate Intersection Observer for each sports container
sportsContainers.forEach(container => {
    const observerForS = new IntersectionObserver(callbackForS, optionsForS);
    observerForS.observe(container);
});

  


const serviceCosts = {
    kitchen: 150,  // $150 per sqft
    bathroom: 120, // $120 per sqft
    flooring: 30,  // $30 per sqft
    painting: 15,  // $15 per sqft
    roof: 50       // $50 per sqft
};


const serviceSelect = document.getElementById('service-select');
const areaInput = document.getElementById('area');
const consultationCheckbox = document.getElementById('consultation');
const calculateButton = document.getElementById('calculate-button');
const costResult = document.getElementById('cost-result');

calculateButton.addEventListener('click', () => {
    const selectedService = serviceSelect.value;
    const area = parseFloat(areaInput.value);
    const consultationFee = consultationCheckbox.checked ? 100 : 0;

    if (isNaN(area) || area <= 0) {
        alert("Please enter a valid area (greater than 0).");
        return;
    }

    const baseCost = serviceCosts[selectedService] * area;
    const totalCost = baseCost + consultationFee;

    costResult.textContent = `Estimated Renovation Cost: $${totalCost.toFixed(2)}`;
});
