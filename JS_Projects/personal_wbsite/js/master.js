
// let mainColor = localStorage.getItem("option_color");

// if (mainColor !== null) {
    
//     document.documentElement.style.setProperty("--main-color", localStorage.getItem("option_color"));
// }


// // Start Setting Box 

// document.querySelector(".toggle-setting .icon").onclick = function() {

//     this.classList.toggle("fa-spin")

// document.querySelector(".setting-box").classList.toggle("open");
// }


// const colorList = document.querySelectorAll(".color-list li");

// colorList.forEach(li => {

//     li.addEventListener("click", (e) => {

//         document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

//         document.querySelectorAll(".color-list li").forEach(element => {

//             element.classList.remove("active")

//             if (element.dataset.color === mainColor) {
//                 element.classList.add("active")
//             }
//         })

//         localStorage.setItem("option_color", e.target.dataset.color)

//         // e.target.parentElement.querySelectorAll(".active").forEach(element => {

//         //     element.classList.remove("active")
//         // })

//         // e.target.classList.add("active");

//         handleActive(e)
//     });
// });

// let radoumBack = document.querySelectorAll(".reandom-background span");

// radoumBack.forEach(span => {

//     span.addEventListener("click", (e) => {

//         e.target.parentElement.querySelectorAll(".active").forEach(element => {

//             element.classList.remove("active")
//         })

//         e.target.classList.add("active");

//         if (e.target.dataset.background === 'push') {

//             backgroundOption = true;

//             localStorage.setItem("background_option", true);

//             randmoizeImg();
//         } else {

//             clearInterval(backgroundInterval);

//             localStorage.setItem("background_option", false);
//         }
//     });
// });


// // End Setting Box 


// let landdingPage = document.querySelector(".landing-page");

// let imgsArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// let backgroundOption = true;

// let backgroundInterval;

// let backgroundRanoum = localStorage.getItem("background_option")

// if (backgroundRanoum !== null) {

//     if (backgroundRanoum === 'true') {

//         backgroundOption = true;
        
//     } else {

//         backgroundOption = false;
//     }

//     document.querySelectorAll(".reandom-background span").forEach(element => {

//         element.classList.remove("active")
//     });

//     if (backgroundRanoum === 'true') {

//         document.querySelector(".reandom-background .push").classList.add("active");

//     } else {
//         document.querySelector(".reandom-background .delete").classList.add("active")
//     }
// } 

// function randmoizeImg() {

//     if (backgroundOption === true) {

//         backgroundInterval = setInterval(() => {
    
//             let numberRAndoum = Math.floor(Math.random() *imgsArray.length);
        
//             landdingPage.style.backgroundImage = 'url("imgs/' + imgsArray[numberRAndoum]+ '")'
        
//         }, 1000);
//     }
// }

// randmoizeImg();


// let ourSkills = document.querySelector(".skills");

// window.onscroll = function() {

// let skillOffset = ourSkills.offsetTop;

// let skillOuter = ourSkills.offsetHeight;

// let windoHeight = this.innerHeight;

// let windoSrollTop = this.scrollY;

// if (windoSrollTop > (skillOffset + skillOuter - windoHeight)) {

//     let allSkill = document.querySelectorAll(".skills-box .skill-progres span");

//     allSkill.forEach(skill => {

//         skill.style.width =  skill.dataset.progrees;
//     })
// };

// };

// let allGullary = document.querySelectorAll(".gullary img");

// allGullary.forEach(img => {

//     img.addEventListener('click', (e) => {

//         let overLay = document.createElement("div");

//         overLay.className = ("pop-overlay");

//         document.body.appendChild(overLay);

//         let popupBox = document.createElement("div");

//         popupBox.className = ("popup-box");

//         if (img.alt !== null) {

//             let heading = document.createElement("h3");
        
//             let imgText = document.createTextNode(img.alt)
        
//             heading.appendChild(imgText);
        
//             popupBox.appendChild(heading);
        
        
//         };

//         let popupImg = document.createElement("img");

//         popupImg.src = img.src;

//         popupBox.appendChild(popupImg);

//         document.body.appendChild(popupBox);

//         let closeButton = document.createElement("span");

//         let closeText = document.createTextNode("X");

//         closeButton.appendChild(closeText);

//         closeButton.className = 'close-button';

//         popupBox.appendChild(closeButton);
//     });
// });


// document.addEventListener('click' , (e) => {

//     if (e.target.className == 'close-button') {

//         e.target.parentNode.remove();

//         document.querySelector(".pop-overlay").remove();
//     };
// });



// // let bullets = document.querySelector(".nav-bullet .bullet");

// // bullets.forEach(bullet => {

// //     bullet.addEventListener("click", (e) => {
        
//         // document.querySelector(".about-us").scrollIntoView({

//         //     behavior: 'smooth'
//         // })
// //     })
// // })




// let allBullet = document.querySelectorAll(".nav-bullet .bullet");

// let allLinks = document.querySelectorAll(".links a");

// function scrollAll(elements) {

//     elements.forEach(ele => {

//         ele.addEventListener("click", (e) => {

//             e.preventDefault();

//             document.querySelector(e.target.dataset.scetion).scrollIntoView({

//                 behavior: 'smooth'
//             });

//         });

//     });
// }

// // scetion

// scrollAll(allBullet);
// scrollAll(allLinks);


// function handleActive(ev) {

//     ev.target.parentElement.querySelectorAll(".active").forEach(element => {

//         element.classList.remove("active")

//     });

//     ev.target.classList.add("active");
// }

// let bulletSpan = document.querySelectorAll(".bullets-option span");

// let bulletContainer = document.querySelector(".nav-bullet");

// let bulletLocation = localStorage.getItem("bullet_option")



// if (bulletLocation !== null) {

//     bulletSpan.forEach(span => {
        
//         span.classList.remove("active");

//     });

//     if (bulletLocation === 'block') {

//         bulletContainer.style.display = 'block';

//         document.querySelector(".bullet_option .push").classList.add("active");

//     } else {

//         bulletContainer.style.display = 'none';

//         document.querySelector(".bullet_option .delete").classList.add("active");
//     }
// }

// bulletSpan.forEach(span => {

//     span.addEventListener( "click", (e) => {

//         if (span.dataset.display === "show") {

//             bulletContainer.style.display = 'block';

//             localStorage.setItem("bullet_option", 'block');

//         } else {

//             bulletContainer.style.display = 'none';

//             localStorage.setItem("bullet_option", 'none');
//         }

//         handleActive(e);
//     })

// });


// document.querySelector(".reset-option").onclick = function() {

//     localStorage.clear();

//     window.location.reload();
// }
















// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");

    }

  });

}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  } else {

    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
  
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

  // Click On Every Span
  span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);

    } else {

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);

    }

  });

});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 10000);

  }

}

randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active State
function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

  // localStorage.clear();
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();

};

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}


