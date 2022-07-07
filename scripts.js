$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active')
  });


    $('.slider-container').slick({
        autoplay: true,        // Do we want it to autoplay? true or false
        autoplaySpeed: 2000,   // How long between each slide when autoplaying
        speed: 500,            // How fast is the transition 
        arrows: true,          // Do you want to show arrows to trigger each slide
        accessibility: true,   // Enables tabbing and arrow key navigation 
        dots: true,            // Enables the dots below to show how many slides
        fade: false,           // Changes the animate from slide to fade if true
        infinite: true,       // When true, means that it will scroll in a circle
        pauseOnHover: true,   // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
        slidesToShow: 2,
        slidesToScroll: 1,
    });

let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click",function(){
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function(){
    copyText.classList.remove("active");
  },2500);
});

const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
#btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "style.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "style.css";
  }
});

// $('.slider-container').slick({
//     autoplay: true,        // Do we want it to autoplay? true or false
//       autoplaySpeed: 2000,   // How long between each slide when autoplaying
//       speed: 500,            // How fast is the transition 
//     arrows: true,          // Do you want to show arrows to trigger each slide
//     accessibility: true,   // Enables tabbing and arrow key navigation 
//     dots: true,            // Enables the dots below to show how many slides
//     fade: false,           // Changes the animate from slide to fade if true
//     infinite: true,       // When true, means that it will scroll in a circle
//     pauseOnHover: true,   // When true means the autoplay pauses when hovering
//     pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

// responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]