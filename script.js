document.addEventListener('DOMContentLoaded', function() {
    // Função genérica para criar um slider
    function createSlider(slideSelector, interval) {
        let currentSlide = 0;
        const slides = document.querySelectorAll(slideSelector);
        const totalSlides = slides.length;

        function updateSlides() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlides();
        }

        // Iniciar o slider
        updateSlides();
        
        // Mudar slide no intervalo especificado
        setInterval(nextSlide, interval);
    }

    // Iniciar slider do banner principal
    createSlider('.slide', 5000); // 5 segundos

    // Iniciar slider do cabeçalho
    createSlider('.header-slide', 3000); // 3 segundos
});