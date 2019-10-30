let image = document.querySelector("#puppyChange");
let text1 = document.querySelector("#puppySource");
let text2 = document.querySelector("#adultSource");

text2.style.display = "none";

image.onclick = () => {
  if (image.getAttribute("src") === "images/puppy.jpg") {
    image.setAttribute("src", "images/adult.jpg")
    text1.style.display = "none";
    text2.style.display = "";
  } else {
    image.setAttribute("src", "images/puppy.jpg")
    text1.style.display = "";
    text2.style.display = "none";
  }
};

image.onmouseover = () => {
   image.classList.toggle("borderChange");
};
