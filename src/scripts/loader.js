// on asset load, animate loading page
export default function revealContent() {
  const animateLoadingPage = () => {
    const loader = document.getElementById('loading-page');
    if (loader) {
      let { opacity } = loader.style;
      const id = setInterval(() => {
        if (opacity < 0.1) {
          clearInterval(id);
          loader.style.display = 'none';
        } else {
          opacity -= 0.01;
          loader.style.opacity = opacity;
        }
      }, 10);
    }
  };

  document.addEventListener('DOMContentLoaded', animateLoadingPage);
}
