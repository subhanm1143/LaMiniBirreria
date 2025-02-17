
AOS.init();
let menuItems = [
    {
      title: "Menu Item 1",
      description: "Description of menu item 1.",
      image: "imgs/MenuItem1.jpg",
    },
    {
      title: "Menu Item 2",
      description: "Description of menu item 2.",
      image: "imgs/MenuItem2.jpg",
    },
    {
      title: "Menu Item 3",
      description: "Description of menu item 3.",
      image: "imgs/MenuItem3.jpg",
    },
  ];
  
  let currentIndex = 0;
  let cardElement = document.getElementById("menu-card");
  
  function updateMenuItem() {
    cardElement.classList.remove("fade-in-out"); // Fade out first
    setTimeout(() => {
      cardElement.querySelector("h3").innerText = menuItems[currentIndex].title;
      cardElement.querySelector("p").innerText = menuItems[currentIndex].description;
      cardElement.querySelector(".menu-card-img").src = menuItems[currentIndex].image;
      cardElement.classList.add("fade-in-out"); // Fade in new content
      currentIndex = (currentIndex + 1) % menuItems.length;
    }, 1000); // Wait for fade-out before updating content
  }
  
  setInterval(updateMenuItem, 4000); // Change item every 4 seconds
  updateMenuItem(); // Initialize with the first menu item
  

  //POPULAR ITEMS
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

document.addEventListener("DOMContentLoaded", () => {
    const flyingContainer = document.querySelector('.flying-chickens');
  
    const chickenImages = [
      'imgs/FlyingChicken1.png',
      'imgs/FlyingChicken2.png',
      'imgs/FlyingChicken3.png',
    ];
    const chickens = [];
  
    // Create 3 of each chicken image
    chickenImages.forEach((imageSrc) => {
      for (let i = 0; i < 3; i++) {
        const chicken = document.createElement('img');
        chicken.src = imageSrc; // Set the chicken image
        chicken.classList.add('chicken-piece');
  
        // Set initial random positions
        chicken.style.top = `${Math.random() * (window.innerHeight - 70)}px`;
        chicken.style.left = `${Math.random() * (window.innerWidth - 70)}px`;
  
        // Random speed and direction
        chickens.push({
          element: chicken,
          speedX: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
          speedY: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
        });
  
        flyingContainer.appendChild(chicken);
      }
    });
  
    function moveChickens() {
      chickens.forEach((chicken) => {
        const rect = chicken.element.getBoundingClientRect();
  
        // Current positions
        let currentTop = parseFloat(chicken.element.style.top);
        let currentLeft = parseFloat(chicken.element.style.left);
  
        // Update positions
        currentTop += chicken.speedY;
        currentLeft += chicken.speedX;
  
        // Bounce off edges
        if (currentTop <= 0 || currentTop + rect.height >= window.innerHeight) {
          chicken.speedY *= -1; // Reverse vertical direction
        }
        if (currentLeft <= 0 || currentLeft + rect.width >= window.innerWidth) {
          chicken.speedX *= -1; // Reverse horizontal direction
        }
  
        // Apply new positions
        chicken.element.style.top = `${currentTop}px`;
        chicken.element.style.left = `${currentLeft}px`;
      });
  
      // Animate the movement
      requestAnimationFrame(moveChickens);
    }
  
    // Start animation
    moveChickens();
  });
  