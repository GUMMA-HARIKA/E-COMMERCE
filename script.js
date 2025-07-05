
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".rating-stars").forEach(container => {
    const stars = container.querySelectorAll("i");

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.remove("ri-star-line");
            s.classList.add("ri-star-fill");
          } else {
            s.classList.remove("ri-star-fill");
            s.classList.add("ri-star-line");
          }
        });
      });
    });
  });


  const heartIcons = document.querySelectorAll(".heart-icon");
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  heartIcons.forEach(icon => {
    const itemId = icon.closest(".item").dataset.id;
    
    if (wishlist.includes(itemId)) {
      icon.classList.remove("ri-heart-3-line");
      icon.classList.add("ri-heart-3-fill");
    }

    icon.addEventListener("click", () => {
      if (wishlist.includes(itemId)) {
        wishlist = wishlist.filter(id => id !== itemId);
        icon.classList.remove("ri-heart-3-fill");
        icon.classList.add("ri-heart-3-line");
      } else {
        wishlist.push(itemId);
        icon.classList.remove("ri-heart-3-line");
        icon.classList.add("ri-heart-3-fill");
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });
});