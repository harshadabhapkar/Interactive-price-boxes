function setupBoxHoverToggle() {
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      const options = box.querySelector('.box-options');
  
      if (!options) return;
  
      box.addEventListener('mouseenter', () => {
        options.style.display = 'grid';
      });
  
      box.addEventListener('mouseleave', () => {
        options.style.display = 'none';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', setupBoxHoverToggle);
  