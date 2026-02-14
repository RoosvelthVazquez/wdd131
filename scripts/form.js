const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const productselect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;

        productselect.appendChild(option);
    });

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    const visitDisplay = document.querySelector(".numVisits");

    let numOfVisitis = Number(window.localStorage.getItem("numVisits-Is")) || 0;
    if (numOfVisitis !== 0) {
        visitDisplay.textContent = numOfVisitis;
    }
    else {
        visitDisplay.textContent = `This is your first visit. Welcome!`;
    }
    numOfVisitis++;

    localStorage.setItem("numVisits-Is", numOfVisitis);
});