const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});


const packages = [
    { name: "Beginner Package – “Start Smart”", description: "New drivers with little or no experience.", lessons: 5, price: 200 },
    { name: "Intermediate Package – “Confidence Builder”", description: "Students who already know the basics but need more practice.", lessons: 10, price: 350 },
    { name: "Road Test Prep Package – “Pass First Time”", description: "Students preparing for their driving exam.", lessons: 15, price: 500 },
    { name: "Defensive Driving Course – “Drive Safe, Stay Safe”", description:"Drivers who want to improve safety skills.", lessons: 8, price: 280 }

];

const instructors = [
    { name: "Alan Moises", experience: 10, image: "images/instructor1.jpg" },
    { name: "Erka Duran", experience: 8, image: "images/instructor2.jpg" },
    { name: "Juan Roman", experience: 12, image: "images/instructor3.jpg" }
];

const packagesContainer = document.querySelector("#packages-container");
const instructorsContainer = document.querySelector("#instructors-container");
const packageSelect = document.querySelector("#packageSelect");
const form = document.querySelector("#enrollForm");
const message = document.querySelector("#message");

/* Function 1: Packages */
function displayPackages() {
    packages.forEach(pkg => {
        packagesContainer.innerHTML += `
            <div class="card">
                <h3>${pkg.name}</h3>
                <p>Ideal for:  ${pkg.description}</p>
                <p>Lessons: ${pkg.lessons}</p>
                <p>Price: $${pkg.price}</p>
            </div>
        `;
        packageSelect.innerHTML += `<option value="${pkg.name}">${pkg.name}</option>`;
    });
}

/* Function 2: Instructors */
function displayInstructors() {
    instructors.forEach(inst => {
        instructorsContainer.innerHTML += `
            <div class="card-inst">
                <img src="${inst.image}" alt="${inst.name}" class="instructor-img">
                <h3>${inst.name}</h3>
                <p>Experience: ${inst.experience} years</p>
            </div>
        `;
    });
}

/* Function 3: Form */
function handleForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const selectedPackage = packageSelect.value;


    if (!name || !email || !phone || selectedPackage === "") {
        message.textContent = `Please complete all required fields.`;
        return;
    }

    if (!email.includes("@")) {
        message.textContent = `Please enter a valid email address.`;
        return;
    }

    const enrollment = {
        studentName: name,
        studentEmail: email,
        studentPhone: phone,
        package: selectedPackage
    };

    localStorage.setItem("enrollment", JSON.stringify(enrollment));

    message.textContent = `Thank you ${name}! Your enrollment for the ${selectedPackage} package has been received.`;

    form.reset();
}


form.addEventListener("submit", handleForm);

document.addEventListener("DOMContentLoaded", () => {
    displayPackages();
    displayInstructors();
});
