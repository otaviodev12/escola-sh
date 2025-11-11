

let slideIndex = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    function moveSlide(n) {
        slideIndex = (slideIndex + n + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    
    setInterval(() => {
        moveSlide(1);
    }, 5000);

  