// on asset load, animate loading page
export default function revealContent() {
  const animateLoadingPage = () => {
    const loader = document.getElementById('loading-page');
    if (loader) {
      const id = setInterval(moveUp, 10);
      let opacity = 1;
      function moveUp() {
        if (opacity < 0.1) {
          clearInterval(id);
          loader.style.display = 'none';
        } else {
          opacity -= 0.01;
          loader.style.opacity = opacity;
        }
      }
    }
  };

  document.addEventListener('DOMContentLoaded', animateLoadingPage);
}
