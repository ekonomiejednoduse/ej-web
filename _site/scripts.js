console.log('bob')
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active')
});

console.log('bob')
    $('.slider-container').slick({
        autoplay: true,        // Do we want it to autoplay? true or false
        autoplaySpeed: 2000,   // How long between each slide when autoplaying
        speed: 650,            // How fast is the transition 
        arrows: false,          // Do you want to show arrows to trigger each slide
        accessibility: true,   // Enables tabbing and arrow key navigation 
        dots: true,            // Enables the dots below to show how many slides
        fade: false,           // Changes the animate from slide to fade if true
        infinite: true,       // When true, means that it will scroll in a circle
        pauseOnHover: true,   // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
        slidesToShow: 2,
        slidesToScroll: 1,
    });

let copyTextButtons = document.querySelectorAll(".copy-code");
copyTextButtons.forEach(button => button.addEventListener('click', copy)); 
function copy(){
  console.log('clickedon' + this)
  let input = this.querySelector("input.text");
  input.select();
  document.execCommand("copy");
};

const body = document.querySelector('body'); 
const darkmodeButton = document.querySelector('#dark-btn');
if (document.cookie.includes('dark-mode=active')){
  body.classList.add('dark-mode');
}
function toggleDarkMode(){
  console.log('clickedon' + document.cookie)
body.classList.toggle('dark-mode');
if (body.classList.contains('dark-mode')){
  document.cookie = "dark-mode=active";
}
else {
  document.cookie = "dark-mode=deactive";
};

console.log('clickedon' + document.cookie)
};

darkmodeButton.addEventListener('click', toggleDarkMode);

AOS.init({
  duration: 2500 // values from 0 to 3000, with step 50ms
});


// .querySelector("button").addEventListener("click",function(){
//   let input = copyText.querySelector("input.text");
//   input.select();
//   document.execCommand("copy");
//   copyText.classList.add("active");
//   window.getSelection().removeAllRanges();
//   setTimeout(function(){
//     copyText.classList.remove("active");
//   },2500);
// });

// let copyText = document.querySelector(".copy-text");
// copyText.querySelector("button").addEventListener("click",function(){
//   let input = copyText.querySelector("input.text");
//   input.select();
//   document.execCommand("copy");
//   copyText.classList.add("active");
//   window.getSelection().removeAllRanges();
//   setTimeout(function(){
//     copyText.classList.remove("active");
//   },2500);
// });

// const btn = document.querySelector(".btn-toggle");
// // Select the stylesheet <link>
// const theme = document.querySelector("#theme-link");

// // Listen for a click on the button
// btn.addEventListener("click", function() {
//   // If the current URL contains "ligh-theme.css"
//   if (theme.getAttribute("href") == "style.css") {
//     // ... then switch it to "dark-theme.css"
//     theme.href = "dark.css";
//   // Otherwise...
//   } else {
//     // ... switch it to "light-theme.css"
//     theme.href = "style.css";
//   }
// });

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

/* <div id="cookie-notice">
      <span>We would like to use third party cookies and scripts to improve the functionality of this website.</span>
      
      <a href="/privacy" class="button-subtle">More info</a>
      <a id="cookie-notice-accept" class="button">Approve</a>
      <!-- Optional close button that declines the cookies -->
      <span id="close-cookie-banner"> X </span>
  </div>
  <script>
      function createCookie(name,value,days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days*24*60*60*1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + value + expires + "; path=/";
      }
      function readCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
              var c = ca[i];
              while (c.charAt(0)==' ') c = c.substring(1,c.length);
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
          }
          return null;
      }
      function eraseCookie(name) {
          createCookie(name,"",-1);
      }
      if(readCookie('cookie-notice-dismissed')=='true') {
        const body = document.querySelector('body'); 
const darkmodeButton = document.querySelector('#dark-btn');
if (document.cookie.includes('dark-mode=active')){
  body.classList.add('dark-mode');
}
function toggleDarkMode(){
  console.log('clickedon' + document.cookie)
body.classList.toggle('dark-mode');
if (body.classList.contains('dark-mode')){
  document.cookie = "dark-mode=active";
}
else {
  document.cookie = "dark-mode=deactive";
};

console.log('clickedon' + document.cookie)
};

darkmodeButton.addEventListener('click', toggleDarkMode);
          // End tracking scripts 
      } else {
          document.getElementById('cookie-notice').style.display = 'block';
      }
      document.getElementById('cookie-notice-accept').addEventListener("click",function() {
          createCookie('cookie-notice-dismissed','true',31);
          document.getElementById('cookie-notice').style.display = 'none';
          location.reload();
      });
      document.querySelector("#close-cookie-banner").addEventListener("click", (e) => {
          
          document.querySelector("#cookie-notice").style.display = 'none';
      });
  </script> */