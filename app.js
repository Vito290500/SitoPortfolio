// Nav Bar Selector
const OpenMenuBtn = document.querySelector('.hamburger');
const CloseMenuBtn = document.getElementById('closeModal');
const BackDrop = document.getElementById('backdrop');
const MobileLinkNav = document.getElementById('mobile__nav');
const Body = document.querySelector('body');
const headerHeight = document.querySelector('.navBar').offsetHeight;
const AboutMeContainer1 = document.querySelector('.AboutMe__container');


// About Me Selector
const CvBtn = document.getElementById('CvBtn');
const MyProjectsBtn = document.getElementById('MyProjects-Btn');
const MyServicesBtn = document.getElementById('MyServices-Btn');
const ContactMeBtn = document.getElementById('ContactMe-btn');

const headerHeight__AboutSection = document.querySelector('header').offsetHeight;
const AboutMeContainers = document.querySelectorAll('.AboutMe__container');


// My Projects Selector
const RightBtn = document.querySelector('.right-btn');
const LeftBtn = document.querySelector('.left-btn');
const ListItem = document.querySelector('.MyProjects__List-Item');

const Counter = document.querySelector('.MyProjects-counter');
const AllCounter = document.querySelectorAll('.counter');

const CurrentShowItem = document.querySelector('.MyProjects__Card.active');
const LeftActiveItem = document.querySelector('.left-active');
const RightctiveItem = document.querySelector('.right-active');




/* Mobile Nav Bar */
function open(){
    BackDrop.style.display = 'block';
    CloseMenuBtn.style.display = 'block';
    MobileLinkNav.style.display = 'flex';
    OpenMenuBtn.style.display = 'none';
    Body.style.overflow = 'hidden';
}
function close(){
    BackDrop.style.display = 'none';
    CloseMenuBtn.style.display = 'none';
    MobileLinkNav.style.display = 'none';
    OpenMenuBtn.style.display = 'flex';
    Body.style.overflow = 'auto';
}
OpenMenuBtn.addEventListener('click', open);
CloseMenuBtn.addEventListener('click', close);


/* Nav Bar Scroll Effect */
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - headerHeight,
            behavior: 'smooth'
          });
          AboutMeContainer1.classList.add('animation-start');
      } else {
          window.location.href = this.getAttribute('href');
      }
  });
});


/* Writter Effect on text Home */
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  const htmlTags = [".presentation__first-h2", ".presentation__second-h2"];
  const texts = ["I'm Vito", "A Full Stack Web Developer"];

  function createTypeWriterEffect(htmlTag, text) {
    let output = "";
    let charIndex = 0;

    function write() {
      if (charIndex === text.length) {
        document.querySelector(htmlTag).innerHTML = output;
        clearInterval(interval);
        return;
      }
      output += text.charAt(charIndex);
      document.querySelector(htmlTag).innerHTML = output + '|';
      charIndex++;
    }

    const interval = setInterval(write, 100);
  }

  function startTypeWriterEffect() {
    setTimeout(function() {
      createTypeWriterEffect(htmlTags[1], texts[1]); 
    }, 1500); 
    createTypeWriterEffect(htmlTags[0], texts[0]);
  }

  function resetAnimations() {
    htmlTags.forEach((tag) => {
      const element = document.querySelector(tag);
      element.style.animation = 'none';
      element.offsetHeight; 
      element.style.animation = '';
    });
    startTypeWriterEffect();
  }

  ScrollTrigger.create({
    trigger: "#Home",
    start: "top 80%",
    end: "bottom 20%",
    onEnter: resetAnimations,
    onEnterBack: resetAnimations,
  });

  resetAnimations();
});


/* Scroll effect to arrow Home*/
const Arrow = document.querySelector('.arrow');
Arrow.addEventListener('click', function(e){
  e.preventDefault();
  const SectionTarget = document.getElementById("AboutMe");

  window.scrollTo({
    top: SectionTarget.offsetTop - headerHeight,
    behavior: 'smooth'
  });

  AboutMeContainer1.classList.add('animation-start');
})


/* Scroll effect About Me Section */
CvBtn.addEventListener('click', ()=>{
  const link = document.createElement('a');
  link.href = 'document/CV.pdf';
  link.download = 'CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
})
MyProjectsBtn.addEventListener('click', function(e){
  e.preventDefault();
  const SectionTarget = document.getElementById("MyProjects");

  window.scrollTo({
    top: SectionTarget.offsetTop - headerHeight,
    behavior: 'smooth'
  });
})
MyServicesBtn.addEventListener('click', function(e){
  e.preventDefault();
  const SectionTarget = document.getElementById("Services");

  window.scrollTo({
    top: SectionTarget.offsetTop - headerHeight,
    behavior: 'smooth'
  });
})
ContactMeBtn.addEventListener('click', function(e){
  e.preventDefault();
  const SectionTarget = document.getElementById("ContactMe");

  window.scrollTo({
    top: SectionTarget.offsetTop - headerHeight,
    behavior: 'smooth'
  });
})


// Scroll Effect My Project
for (const btn of AllCounter) {
  btn.addEventListener('click', function() {
    const dataCounterValue = this.getAttribute('data-counter');
    const ItemToShow = document.getElementById(dataCounterValue);

    let NewLeft, NewRight;

    if (parseInt(dataCounterValue) === 1) {
      NewLeft = document.getElementById(10); // Changed from 9 to 10 for the last element
      NewRight = document.getElementById(parseInt(dataCounterValue) + 1);
    } else if (parseInt(dataCounterValue) === 10) { // Changed from 9 to 10
      NewLeft = document.getElementById(parseInt(dataCounterValue) - 1);
      NewRight = document.getElementById(1);
    } else {
      NewLeft = document.getElementById(parseInt(dataCounterValue) - 1);
      NewRight = document.getElementById(parseInt(dataCounterValue) + 1);
    }

    const currentShowItem = document.querySelector('.MyProjects__Card.active');
    const leftActiveItem = document.querySelector('.left-active');
    const rightActiveItem = document.querySelector('.right-active');

    if (currentShowItem) currentShowItem.classList.remove('active');
    if (leftActiveItem) leftActiveItem.classList.remove('left-active');
    if (rightActiveItem) rightActiveItem.classList.remove('right-active');

    if (ItemToShow) ItemToShow.classList.add('active');
    if (NewLeft) NewLeft.classList.add('left-active');
    if (NewRight) NewRight.classList.add('right-active');

    const lightCounter = document.querySelector('.counter.light');
    if (lightCounter) lightCounter.classList.remove('light');

    this.classList.add('light');
  });
}

LeftBtn.addEventListener('click', () => {
  const ActiveItem = document.querySelector('.MyProjects__Card.active');
  const RightActive = document.querySelector('.MyProjects__Card.right-active');
  const LeftActive = document.querySelector('.MyProjects__Card.left-active');
  var NextIdItem = parseInt(LeftActive.id) - 1;

  if(NextIdItem === 0){
      NextIdItem = 10;
  }

  ActiveItem.classList.remove('active');
  RightActive.classList.remove('right-active');
  LeftActive.classList.remove('left-active');

  LeftActive.classList.add('active');
  ActiveItem.classList.add('right-active');

  const NextItemToShow = document.getElementById(NextIdItem);
  NextItemToShow.classList.add('left-active'); 
  
  const element = document.querySelector(`[data-counter='${NextIdItem}']`);

  const next = document.querySelector(`[data-counter='${LeftActive.id}']`);
  const current = document.querySelector(`[data-counter='${ActiveItem.id}']`);
  current.classList.remove('light');
  next.classList.add('light');
});

RightBtn.addEventListener('click', () => {
  const ActiveItem = document.querySelector('.MyProjects__Card.active');
  const RightActive = document.querySelector('.MyProjects__Card.right-active');
  const LeftActive = document.querySelector('.MyProjects__Card.left-active');
  var NextIdItem = parseInt(RightActive.id) + 1;

  if (NextIdItem === 11) {
      NextIdItem = 1;
  }

  ActiveItem.classList.remove('active');
  RightActive.classList.remove('right-active');
  LeftActive.classList.remove('left-active');

  RightActive.classList.add('active');
  ActiveItem.classList.add('left-active');

  const NextItemToShow = document.getElementById(NextIdItem);
  NextItemToShow.classList.add('right-active');

  const next = document.querySelector(`[data-counter='${RightActive.id}']`);
  const current = document.querySelector(`[data-counter='${ActiveItem.id}']`);
  current.classList.remove('light');
  next.classList.add('light');
});



// Animation
gsap.registerPlugin(ScrollTrigger); 

// Home Section Animation
const homeAnimation = gsap.fromTo(
  ".Home", 
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1}
);
const homeTittleAnimation = gsap.fromTo(
  ".presentation__first-h1",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1 }
)
const homeSubtitleAnimation = gsap.fromTo(
  ".presentation__second-h1",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1 }
)
ScrollTrigger.create({
  trigger: "#Home",
  start: "top 80%", 
  end: "bottom 20%", 
  onEnter: () => {
    homeAnimation.restart();
    homeTittleAnimation.restart();
    homeSubtitleAnimation.restart();
    },
  onEnterBack: () => {
    homeAnimation.restart();
    homeTittleAnimation.restart();
    homeSubtitleAnimation.restart();
  }
});


// About Me Section Animation
// Top
const AboutMeDescriptionAnimation = gsap.fromTo(
  ".AboutMe-container__description",
  { opacity: 0, y: -50 },
  { opacity: 2, y: 0, duration: 1}
)
const AboutMeDescriptionImageAnimation = gsap.fromTo(
  ".description-img",
  { opacity: 0, y: -50 },
  { opacity: 2, y: 0, duration: 1}
)
ScrollTrigger.create({
  trigger: "#AboutMe",
  start: "top 80%", 
  end: "bottom 100%", 
  onEnter: () => {
    AboutMeDescriptionAnimation.restart();
    AboutMeDescriptionImageAnimation.restart();
    },
  onEnterBack: () => {
    AboutMeDescriptionAnimation.restart();
    AboutMeDescriptionImageAnimation.restart();
  }
});

// Middle
const AboutMeWhatIdoAnimation = gsap.fromTo(
  ".WhatIdo-container__description",
  { opacity: 0, y: -50 },
  { opacity: 2, y: 0, duration: 2, delay: 2}
)
const AboutMeWhatIdoImageAnimation = gsap.fromTo(
  ".WhatIdo-img",
  { opacity: 0, y: -50 },
  { opacity: 2, y: 0, duration: 2, delay: 2}
)
ScrollTrigger.create({
  trigger: "#AboutMe",
  start: "top 30%", 
  end: "bottom 80%", 
  onEnter: () => {
    AboutMeWhatIdoAnimation.restart();
    AboutMeWhatIdoImageAnimation.restart();
    },
  onEnterBack: () => {
    AboutMeWhatIdoAnimation.restart();
    AboutMeWhatIdoImageAnimation.restart();
  }
});

// Bottom
const MySkillAnimation = gsap.fromTo(
  ".Skills__container",
  { opacity: 0, y: -50 },
  { opacity: 2, y: 0, duration: 2, delay: 10}
)
ScrollTrigger.create({
  trigger: "#AboutMe",
  start: "top 20%", 
  end: "bottom 80%", 
  onEnter: () => {
    MySkillAnimation.restart();
    },
  onEnterBack: () => {
    MySkillAnimation.restart();
  }
});


// My Projects Animation
const MyProjectsAnimation = gsap.fromTo(
  ".MyProjects-tittle",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1}
)
ScrollTrigger.create({
  trigger: "#MyProjects",
  start: "top 30%", 
  end: "bottom 80%", 
  onEnter: () => {
    MyProjectsAnimation.restart();
    },
  onEnterBack: () => {
    MySkillAnimation.restart();
  }
});
const MyProjectsCounterAnimation = gsap.fromTo(
  ".MyProjects-counter",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1}
)
ScrollTrigger.create({
  trigger: "#MyProjects",
  start: "top 80%", 
  end: "bottom 80%", 
  onEnter: () => {
    MyProjectsCounterAnimation.restart();
    },
  onEnterBack: () => {
    MyProjectsCounterAnimation.restart();
  }
});


// Services Section Animation
const ServicesTittleAnimation = gsap.fromTo(
  ".Services__title",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1}
)
const ServicesListAnimation = gsap.fromTo(
  ".Services-list__card",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1}
)
ScrollTrigger.create({
  trigger: "#Services",
  start: "top 80%", 
  end: "bottom 80%", 
  onEnter: () => {
    ServicesListAnimation.restart();
    ServicesTittleAnimation.restart();
    },
  onEnterBack: () => {
    ServicesListAnimation.restart();
    ServicesTittleAnimation.restart();
  }
});


// Contact Me Section Animation
const ContactMeTitleAnimation = gsap.fromTo(
  ".ContactMe-title",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1 }
);
const ContactMeSubtitleAnimation = gsap.fromTo(
  ".ContactMe-subtitle",
  { opacity: 0, y: -50}, 
  { opacity: 1, y: 0, duration: 1}
);
const ContactMeGetInTouchAnimation = gsap.fromTo(
  ".link",
  { opacity: 0, y: -50},
  { opacity: 1, y: 0, duration: 1}
)
const trigger = ScrollTrigger.create({
  trigger: "#ContactMe",
  start: "top 80%",
  end: "bottom 20%",
  onEnter: () => {
    ContactMeTitleAnimation.restart();
    ContactMeSubtitleAnimation.restart();
    ContactMeGetInTouchAnimation.restart();
  },
  onEnterBack: () => {
    ContactMeTitleAnimation.restart();
    ContactMeSubtitleAnimation.restart();
    ContactMeGetInTouchAnimation.restart();
  }
});



/* Mobile Adjust */


/* Services Truncate text*/
function truncateText() {
  const mobileMaxWidth = 40; 
  const maxLength = 200; 

  const textElements = document.querySelectorAll("p#Services-text"); 

  for (const textElement of textElements) {
    if (window.matchMedia(`(max-width: ${mobileMaxWidth}${typeof mobileMaxWidth === 'number' ? 'rem' : 'px'})`).matches) {
      let text = textElement.textContent;
      if (text.length > maxLength) {
        text = text.substring(0, maxLength - 65) + "...";
      }
      textElement.innerHTML = text;
    }
  }
}
window.onload = truncateText;
window.onresize = truncateText;












