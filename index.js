const plans = [
    {
        name: "BRONZE",
        price: "$600",
        description: "150 photos.<br />Props(Costumes) available.<br />Free editing"
    },
    {
        name: "SILVER",
        price: "$900",
        description: "200 photos.<br />Props(Costumes) available.<br />Free editing<br />3 hour video coverage"
    },
    {
        name: "GOLD",
        price: "$1200",
        description: "Unlimited photos.<br />Props(Costumes) available.<br />Free editing<br /> Full video coverage<br />Drone shots"
    }
];

const divPlans = document.getElementById('plans');
let navBarDisplay = document.getElementById('nav-bar').style.display;
const menuIcon = document.getElementById('menu-icon');
const header = document.getElementById('header');
const sizer = document.getElementById('sizer');
const links = document.querySelectorAll('.nav-link');

plans.map(element => {
    divPlans.innerHTML += `<div class="plan-item">
                <div class="plan-name">
                    <b>${element.name}</b>
                </div>
                <div class="plan-price">
                    ${element.price}
                </div>
                <div class="plan-description">
                    ${element.description}
                </div>
                <div class="div-btn">
                    <button class="btn-select">SELECT</button>
                </div>
            </div>`
});

menuIcon.onclick = () => {
    if (navBarDisplay === 'none') {
        document.querySelector('#nav-bar').style.display = 'flex';
        header.style.height = '360px';
        sizer.style.minHeight = '360px';
        navBarDisplay = 'flex';
    } else {
        document.querySelector('#nav-bar').style.display = "none";
        header.style.height = '160px';
        sizer.style.minHeight = '160px';
        navBarDisplay = 'none';
    }
}

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){
    if(window.innerWidth < 720) {
        document.querySelector('#nav-bar').style.display = "none";
        header.style.height = '160px';
        sizer.style.minHeight = '160px';
        navBarDisplay = 'none';
    }
  });
}


window.addEventListener('resize', function(){
    if(this.window.innerWidth > 720) {
        document.querySelector('#nav-bar').style.display = 'flex';
        navBarDisplay = 'flex';
        header.style.height = '80px';
        sizer.style.minHeight = '80px';
    } else {
        document.querySelector('#nav-bar').style.display = 'none';
        navBarDisplay = 'none';
        header.style.height = '160px';
        sizer.style.minHeight = '160px';
    }
});