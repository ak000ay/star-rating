export function StarWidget(element) {
  let selectedStar = null;
  let selectedState = false;
  let starCount = document.createElement("div");
  const geneateStars = (n) => {
    let fragment = new DocumentFragment();
    for (let i = 0; i < n; i++) {
      let star = document.createElement("span");
      star.innerHTML = "&#9734";
      star.classList.add("stars");
      star.addEventListener("mouseover", () => handleOnmouseOver(i));
      star.addEventListener("mouseleave", () => handleonMouseleave());
      star.addEventListener("click", () => handleOnClick(i));
      fragment.appendChild(star);
    }
    element.appendChild(fragment);
  };

  const handleOnmouseOver = (index) => {
    let allStars = document.querySelectorAll(".stars");
    allStars.forEach((item, loopIndex) => {
      if (loopIndex <= index) {
        item.innerHTML = "&#9733";
        item.classList.add("active");
      }
    });
  };
  const handleonMouseleave = () => {
    if (selectedState) {
      selectedState = false;
      return;
    }
    let allStars = document.querySelectorAll(".stars");
    allStars.forEach((item) => {
      item.innerHTML = "&#9734";
      item.classList.remove("active");
    });
  };
  const handleOnClick = (i) => {
    selectedState = true;
    selectedStar = i;
    starCount.innerHTML = selectedStar + 1;
    element.appendChild(starCount);
    handleOnmouseOver(selectedStar);
  };
  geneateStars(5);
}
