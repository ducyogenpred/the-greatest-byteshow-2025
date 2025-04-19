const card = document.querySelectorAll('.card');

card.forEach((card) => {
  const card__body = card.querySelector('.card__body');
  card.addEventListener('click', () => {
    if (card.classList.contains('show')) {
      requestAnimationFrame(() => {
        card__body.style.opacity = 0;
        card__body.style.transition = '0.3s ease';
      });
      const handleTransitionEnd = () => {
        card.classList.remove('show');
        card__body.removeEventListener('transitionend', handleTransitionEnd);
      };
      card__body.addEventListener('transitionend', handleTransitionEnd);
    } else {
      card.classList.add('show');
      card__body.style.opacity = 1;
    }
  });
});
