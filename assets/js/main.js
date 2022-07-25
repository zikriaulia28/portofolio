document.querySelector('.menu-toggle').addEventListener('click', function () {
    const cls = [...this.classList];
    this.classList.remove(cls.includes('bxs-grid-alt') ? 'bxs-grid-alt' : 'bx-x');
    this.classList.add(cls.includes('bxs-grid-alt') ? 'bx-x' : 'bxs-grid-alt');
  })