try {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 35) {
      if (
        document.getElementsByClassName("header")[0] &&
        document.getElementsByClassName("header")[0].classList
      ) {
        document
          .getElementsByClassName("header")[0]
          .classList.remove("is-transparent");
      }
    } else {
      if (
        document.getElementsByClassName("header")[0] &&
        document.getElementsByClassName("header")[0].classList
      ) {
        document
          .getElementsByClassName("header")[0]
          .classList.add("is-transparent");
      }
    }
  });
} catch (err) {
  console.log(err);
}
