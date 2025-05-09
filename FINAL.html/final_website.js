function change() {
    // Change image on hover
    document.getElementById("img1").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvA0FFWDQ6P0dVed5CQfFUbV91-LzeG8aT8wQHG67tVqTjB_-GQ&s=10&ec=72940545";
}

function toggleInfo() {
    const infoBox = document.getElementById("on");

    // Toggle with fade effect
    if (infoBox.classList.contains("show")) {
        infoBox.classList.remove("show");
    } else {
        infoBox.classList.add("show");
    }
}
