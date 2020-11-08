let points = document.querySelectorAll(".points");
// let singlePoint = document.createElement("span");
// singlePoint.innerHTML = ".";

function pointActive(point) {
  point.classList.remove("points");
  point.classList.add("active");
}

function pointInactive(point) {
  point.classList.remove("active");
  point.classList.add("points");
}

points.forEach((point) =>
  point.addEventListener("mouseover", () => pointActive(point))
);

points.forEach((point) =>
  point.addEventListener("mouseout", () => pointInactive(point))
);
