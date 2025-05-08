
<img id="img1" class="capitol" src="https://example.com/initial-image.jpg" height="150px" onmouseover="change()" />


<button id="btn" onclick="hello()">Click here to view more information</button>

<div id="on" style="display: none;">
    <p id="hiddenpara">This is more information about Capitol Reef National Park.</p>
    <img id="epicthings" src="https://thaka.bing.com/th/id/OIP.vqkOhZkItCmwKA9MUtax-wHaDH?w=327&h=147&c=7&r=0&o=5&pid=1.7" height="500px">
</div>

function change() {
    document.getElementById("img1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvA0FFWDQ6P0dVed5CQfFUbV91-LzeG8aT8wQHG67tVqTjB_-GQ&s=10&ec=72940545";
}

function hello() {
    document.getElementById("on").style.display = "flex";
}

