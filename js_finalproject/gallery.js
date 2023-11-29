document.addEventListener('DOMContentLoaded', function () {
  const figures = document.querySelectorAll('.gallery figure');

  figures.forEach(function (figure) {
    figure.addEventListener('mouseover', handleMouseOver);
    figure.addEventListener('mouseleave', handleMouseLeave);
    figure.addEventListener('focus', handleFocus);
    figure.addEventListener('blur', handleBlur);
  });

  window.addEventListener('load', addTabIndexAttributes);

  function handleMouseOver() {
    // Handle mouseover event
  }

  function handleMouseLeave() {
    // Handle mouseleave event
  }

  function handleFocus() {
    // Handle focus event
  }

  function handleBlur() {
    // Handle blur event
  }

  function addTabIndexAttributes() {
    const figures = document.querySelectorAll('.gallery figure');

    for (let i = 0; i < figures.length; i++) {
      figures[i].setAttribute('tabindex', i + 1);
    }

    console.log('Tabindex attributes added successfully.');
  }
});
