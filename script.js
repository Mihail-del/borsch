document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("fixedheader");
    const cart = document.getElementById("cart");
    const number = document.getElementById("number");
    const header_img = document.getElementById("header_img");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("fixed_header");
            cart.style.opacity = "1"
            number.style.opacity = "1"
            header_img.style.background = "transparent"
        } else {
            header.classList.remove("fixed_header");
            header_img.style.background = "rgba(255, 255, 255, 0.3)";
            cart.style.opacity = "0"
            number.style.opacity = "0"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const bg = document.querySelector(".bg");
    const widget = document.querySelector(".widget");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 150) {
            left.style.position = "fixed"
            left.style.top = "0px"
            right.style.position = "fixed"
            right.style.top = "0px"
            bg.style.position = "fixed"
            bg.style.top = "0px"
        } else {
            left.style.position = "absolute"
            left.style.top = "150px"
            right.style.position = "absolute"
            right.style.top = "150px"
            bg.style.position = "absolute"
            bg.style.top = "150px"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("image-carousel");

    let currentIndex = 0;
    const numImages = document.querySelectorAll(".carousel-item").length;
    const imageWidth = document.querySelector(".carousel-item").clientWidth;

    function moveCarousel() {
        const translateX = -currentIndex * imageWidth;
        carousel.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(() => {
        if (currentIndex < numImages - 1) {
            currentIndex++;
            moveCarousel();
        } else {
            currentIndex = 0;
            moveCarousel();
        }
    }, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("pickle_coin");
    const moveButton = document.getElementById("pickle_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

var number = 0
document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("pickle_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("borsch_coin");
    const moveButton = document.getElementById("borsch_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("borsch_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("mushroom_coin");
    const moveButton = document.getElementById("mushroom_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("mushroom_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("herring_coin");
    const moveButton = document.getElementById("herring_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("herring_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("sausages_coin");
    const moveButton = document.getElementById("sausages_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("sausages_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("aspic_coin");
    const moveButton = document.getElementById("aspic_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("aspic_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("shank_coin");
    const moveButton = document.getElementById("shank_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("shank_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("pike_coin");
    const moveButton = document.getElementById("pike_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("pike_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("lamb_coin");
    const moveButton = document.getElementById("lamb_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("lamb_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("poppy_coin");
    const moveButton = document.getElementById("poppy_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("poppy_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("strudel_coin");
    const moveButton = document.getElementById("strudel_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("strudel_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("cherry_coin");
    const moveButton = document.getElementById("cherry_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(155px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("cherry_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("h_honey_coin");
    const moveButton = document.getElementById("h_honey_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("h_honey_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("h_pepper_coin");
    const moveButton = document.getElementById("h_pepper_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("h_pepper_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("h_horse_coin");
    const moveButton = document.getElementById("h_horse_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("h_horse_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("w_white_coin");
    const moveButton = document.getElementById("w_white_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("w_white_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("w_red_coin");
    const moveButton = document.getElementById("w_red_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("w_red_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("w_rose_coin");
    const moveButton = document.getElementById("w_rose_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("w_rose_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("s_compote_coin");
    const moveButton = document.getElementById("s_compote_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("s_compote_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("s_fruit_coin");
    const moveButton = document.getElementById("s_fruit_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("s_fruit_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movingPicture = document.getElementById("s_morse_coin");
    const moveButton = document.getElementById("s_morse_btn");

    let isMovedRight = false;

    moveButton.addEventListener("click", function() {
        if (isMovedRight) {
            movingPicture.style.transform = `translateX(0)`;
        } else {
            movingPicture.style.transform = `translateX(50px)`;
        }
        isMovedRight = !isMovedRight;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberDisplay = document.getElementById("number");
    const toggleButton = document.getElementById("s_morse_btn");
    
    let isIncreasing = true;

    toggleButton.addEventListener("click", function() {
        if (isIncreasing) {
            number++;
            numberDisplay.textContent = number;
        } else {
            number--;
            numberDisplay.textContent = number;
        }

        isIncreasing = !isIncreasing;
    });

    const audioElement = new Audio('sounds/coin_fall.mp3');

    toggleButton.addEventListener("click", function() {
        audioElement.play();
    });
});


//widgets
document.addEventListener("DOMContentLoaded", function() {
    const openWidgetButton = document.getElementById("open-widget-button-borsch");
    const widgetContainer = document.getElementById("widget-container-borsch");
    const closeWidgetButton = document.getElementById("widget-borsch-close-button");

    openWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "block";
    });

    closeWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openWidgetButton = document.getElementById("open-widget-button-aspic");
    const widgetContainer = document.getElementById("widget-container-aspic");
    const closeWidgetButton = document.getElementById("widget-aspic-close-button");

    openWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "block";
    });

    closeWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openWidgetButton = document.getElementById("open-widget-button-varenik");
    const widgetContainer = document.getElementById("widget-container-varenik");
    const closeWidgetButton = document.getElementById("widget-varenik-close-button");

    openWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "block";
    });

    closeWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openWidgetButton = document.getElementById("cart_btn");
    const widgetContainer = document.getElementById("cart-widget");
    const closeWidgetButton = document.getElementById("cart_close");

    openWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "block";
    });

    closeWidgetButton.addEventListener("click", function() {
        widgetContainer.style.display = "none";
    });

    const audioElement = new Audio('sounds/check.mp3');

    openWidgetButton.addEventListener("click", function() {
        audioElement.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    const list = document.getElementById("order_list");

    toggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");
            const existingListItem = document.getElementById(`${targetId}-list-item`);

            if (existingListItem) {
                list.removeChild(existingListItem);
            } else {
                const listItem = document.createElement("li");
                listItem.id = `${targetId}-list-item`;
                listItem.className = "list-item";
                listItem.textContent = `${targetId}`;
                list.appendChild(listItem);

                const smallImage = document.createElement("img");
                smallImage.src = "images/coin.png";
                smallImage.width = 30;
                smallImage.height = 30;
                listItem.appendChild(smallImage);

                list.appendChild(listItem);
            }
        });
    });
});
