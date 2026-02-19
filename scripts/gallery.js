const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});


const galleryContainer = document.querySelector("#gallery-container");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modalImage");
const modalCaption = document.querySelector("#modalCaption");
const closeModal = document.querySelector("#closeModal");

const galleryImages = [
    { id: 1, src: "images/gallery1.webp", caption: "License Achievement" },
    { id: 2, src: "images/gallery2.webp", caption: "Parking Practice" },
    { id: 3, src: "images/gallery3.webp", caption: "Highway Training " },
    { id: 4, src: "images/gallery4.webp", caption: "Instructor Guidance" },
    { id: 5, src: "images/gallery5.webp", caption: "Road Test Prep" },
    { id: 6, src: "images/gallery6.webp", caption: "Driving Class" },
    { id: 7, src: "images/gallery7.webp", caption: "Defensive Driving Course" },
    { id: 8, src: "images/gallery8.webp", caption: "Student Success Day" },
    { id: 9, src: "images/gallery9.webp", caption: "Driving Practice Session" }
];

function displayGallery() {

    galleryImages.forEach(image => {

        const container = document.createElement("div");
        container.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.caption;
        img.loading = "lazy";

        container.appendChild(img);
        galleryContainer.appendChild(container);

        container.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = image.src;
            modalCaption.textContent = image.caption;

            localStorage.setItem("lastViewedImage", JSON.stringify(image));
        });
    });
}

function restoreLastViewed() {
    const saved = JSON.parse(localStorage.getItem("lastViewedImage"));

    if (saved) {
        modal.style.display = "flex";
        modalImage.src = saved.src;
        modalCaption.textContent = saved.caption;
    }
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    displayGallery();
    restoreLastViewed();
});
