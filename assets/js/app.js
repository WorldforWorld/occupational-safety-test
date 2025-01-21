document.addEventListener("DOMContentLoaded", () => {
  // Инициализация Fancybox для слайдера
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Ваши настройки (опционально)
    loop: true,
    arrows: true,
    buttons: ["slideShow", "thumbs", "close"],
  });
});
