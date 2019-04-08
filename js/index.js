const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//navigation
//////////////////
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav1=document.querySelector("nav a:nth-child(1)");
nav1.textContent="Services";

let nav2=document.querySelector("nav a:nth-child(2)");
nav2.textContent="Product";

let nav3=document.querySelector("nav a:nth-child(3)");
nav3.textContent="Vision";

let nav4=document.querySelector("nav a:nth-child(4)");
nav4.textContent="Features";

let nav5=document.querySelector("nav a:nth-child(5)");
nav5.textContent="About";

let nav6=document.querySelector("nav a:nth-child(6)");
nav6.textContent="Contact";


//top section
/////////////////////
let centerTxt=document.querySelector(".cta-text h1");
centerTxt.innerHTML="DOM<br> Is<br> Awesome";

let button1=document.querySelector("button");
button1.textContent="Get Started";

let roundImage=document.querySelector("#cta-img");
roundImage.src="img/header-img.png";


//middle section
//////////////////////
let topContent1=document.querySelector(".top-content div:nth-child(1) h4 "); 
 topContent1.textContent="Features";
 let topContent11=document.querySelector(".top-content div:nth-child(1) p");
 topContent11.textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let topContent2=document.querySelector(".top-content div:nth-child(2) h4");
topContent2.textContent="About";
let topContent22=document.querySelector(".top-content div:nth-child(2) p");
topContent22.textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";




let bigImage=document.querySelector("#middle-img");
bigImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);



//footer
//////////////////
let footerContentHeader=document.querySelector(".contact h4");
footerContentHeader.textContent="Contact";

let footerContentP1=document.querySelector(".contact p:nth-child(2)");
footerContentP1.innerHTML="123 Way 456 Street<br/> Somewhere, USA";

let footerContentP2=document.querySelector(".contact p:nth-child(3)");
footerContentP2.textContent="1 (888) 888-8888";

let footerContentP3=document.querySelector(".contact p:nth-child(4)");
footerContentP3.textContent="sales@greatidea.io"






