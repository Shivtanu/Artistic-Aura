var b = document.getElementsByTagName("div")[0];  

b.addEventListener("mousemove", function(event) {
  parallaxed(event);

});

function parallaxed(e) {
      var amountMovedX = (e.clientX * 0.2 / 8);
      var amountMovedY = (e.clientY * 0.2 / 8);
      var x = document.getElementsByClassName("parallaxed");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}

const initpXDropdown = () => {
  const dropdownElements = document.querySelectorAll(".editor-dropdown");

  // Close all dropdowns when clicking anywhere on the page
  window.addEventListener("click", () => {
    dropdownElements.forEach((item) => {
      item.classList.remove("active");
    });
  });

  // Toggle individual dropdowns
  dropdownElements.forEach((item) => {
    const dropdownInput = item.querySelector(".editor-dropdown-input");

    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      // Close other open dropdowns
      dropdownElements.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      // Toggle the clicked dropdown
      item.classList.toggle("active");
    });
  });
};

initpXDropdown();

