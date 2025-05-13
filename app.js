document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".sliderwrapper");
    const menuitems = document.querySelectorAll(".menuitem");

    if (wrapper && menuitems.length > 0) {
        menuitems.forEach((item, index) => {
            item.addEventListener("click", () => {
                wrapper.style.transform = `translateX(${-100 * index}vw)`;
            });
        });
    } else {
        console.error("Slider elements not found!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // List of products
    const products = ["AIR FORCE", "JORDAN", "BLAZER" , "raju" , "jackiy" ,"bob" , "masala" ,];

    // Get search input field
    const searchInput = document.querySelector(".searchinput");

    // Create the dropdown list container
    const searchResults = document.createElement("ul");
    searchResults.classList.add("search-results");
    searchInput.parentNode.appendChild(searchResults); // Append below input

    // Handle input event
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = ""; // Clear previous results

        if (query.length > 0) {
            // Filter products based on input
            const filteredProducts = products.filter(product =>
                product.toLowerCase().includes(query)
            );

            // Show filtered results
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const li = document.createElement("li");
                    li.textContent = product;
                    li.classList.add("search-item");

                    // Set selected item in input on click
                    li.addEventListener("click", function () {
                        searchInput.value = product;
                        searchResults.innerHTML = ""; // Hide suggestions
                    });

                    searchResults.appendChild(li);
                });
            } else {
                searchResults.innerHTML = "<li class='search-item no-result'>No results found</li>";
            }
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.innerHTML = "";
        }
    });
});


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

// Run this function on page load
updateCartCount();



let carousel = document.getElementById("carousel");

function scrollCarousel(direction) {
    let scrollAmount = 320; // Adjust based on card width + margin
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

let carousel1 = document.getElementById("carousel");

function scrollCarousel(direction) {
    let scrollAmount = 320; // Adjust based on card width + margin
    carousel1.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}




// Wait until the DOM is fully loaded
window.onload = function () {
  const mainImage = document.querySelector(".slideritem .sliderimg"); // First main image
  const sideImages = document.querySelectorAll(".leftimages .sideimg, .leftimages #sideimg");

  sideImages.forEach((sideImg) => {
    sideImg.addEventListener("click", function () {
      // Swap image sources
      const tempSrc = mainImage.src;
      mainImage.src = sideImg.src;
      sideImg.src = tempSrc;

      // Optional: Swap sizes (if needed)
      const tempWidth = mainImage.width;
      const tempHeight = mainImage.height;
      mainImage.width = sideImg.width;
      mainImage.height = sideImg.height;
      sideImg.width = tempWidth;
      sideImg.height = tempHeight;
    });
  });
};










  function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const card = carousel.querySelector(".card");
    const cardWidth = card.offsetWidth + 16; // 16 = assumed margin/gap
    carousel.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }



  



  const slider = document.getElementById('genderSlider');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // For touch devices
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

