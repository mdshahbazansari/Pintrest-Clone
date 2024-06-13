var arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "stone", image: "https://i.pinimg.com/564x/8a/59/a9/8a59a9492c9b6fed6f76bb457a0a2b30.jpg" },
    { name: "dice", image: "https://i.pinimg.com/564x/9f/b9/8b/9fb98b74cd376f9892fdde25dc375657.jpg" },
    { name: "bhutta", image: "https://i.pinimg.com/564x/be/e7/18/bee71877bba82faded3c91e83e21c018.jpg" },
    { name: "owl", image: "https://i.pinimg.com/564x/c9/07/84/c9078461bd73cc77dfc8e88e40d28b10.jpg" },
    { name: "iphone", image: "https://i.pinimg.com/736x/ed/5a/76/ed5a7699059732868ed4e97f6c8312c7.jpg" },
    { name: "hacker", image: "https://i.pinimg.com/564x/f6/99/89/f69989d362798d0294e25a31bf58f6e9.jpg" },
    { name: "coffy", image: "https://i.pinimg.com/736x/8e/ed/e9/8eede9085e303dcbb86a098ffb9f7e52.jpg" }
]

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container").innerHTML = clutter;
}

function searchFunction() {
    var input = document.querySelector("#searchinput");


    input.addEventListener("focus", function () {
            document.querySelector(".overlay").style.display = "block";
        })

    input.addEventListener("blur", function () {
            document.querySelector(".overlay").style.display = "none";
        })

    input.addEventListener("input", function () {
            const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
            var clutter = "";
            filteredArray.forEach(function (obj) {
                clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
            })

            document.querySelector(".searchdata").style.display = "block";
            document.querySelector(".searchdata").innerHTML = clutter;
        })
}

searchFunction();
showTheCards();