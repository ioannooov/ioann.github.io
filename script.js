const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Переключаем класс 'active' для иконки гамбургера
    hamburger.classList.toggle("active");
    // Переключаем класс 'active' для навигационного меню
    navMenu.classList.toggle("active");
});
