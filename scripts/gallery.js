const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});

const galleryImages = [
    { id: 1, src: "images/gallery1.webp", caption: "Driving Practice Session" },
    { id: 2, src: "images/gallery2.webp", caption: "Highway Training" },
    { id: 3, src: "images/gallery3.webp", caption: "Parking Practice" },
    { id: 4, src: "images/gallery4.webp", caption: "Instructor Guidance" },
    { id: 5, src: "images/gallery5.webp", caption: "Road Test Prep" },
    { id: 6, src: "images/gallery6.webp", caption: "Night Driving Class" },
    { id: 7, src: "images/gallery7.webp", caption: "Defensive Driving Course" },
    { id: 8, src: "images/gallery8.webp", caption: "Student Success Day" },
    { id: 9, src: "images/gallery9.webp", caption: "License Achievement" }
];

const galleryContainer = document.querySelector("#gallery-container");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modalImage");
const modalCaption = document.querySelector("#modalCaption");
const closeModal = document.querySelector("#closeModal");

/* Function 1: Display Gallery */
function displayGallery() {
    galleryImages.forEach(image => {
        galleryContainer.innerHTML += `
            <div class="gallery-item" data-id="${image.id}">
                <img src="${image.src}" alt="${image.caption}">
            </div>
        `;
    });
}



/* Last Viewed */
function restoreLastViewed() {
    const savedImage = JSON.parse(localStorage.getItem("lastViewedImage"));

    if (savedImage) {
        modal.style.display = "block";
        modalImage.src = `${savedImage.src}`;
        modalCaption.textContent = `${savedImage.caption}`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    displayGallery();
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", openModal);
    });
});

