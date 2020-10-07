const scrollToName = (doc, win, name) => {
  const el = doc.getElementsByName(name)[0];
  if (el) {
    const scrollLength = el.offsetTop - doc.body.scrollTop;
    win.scrollTo({
      top: scrollLength,
      behavior: 'smooth'
    });
  }
};

export default scrollToName;
