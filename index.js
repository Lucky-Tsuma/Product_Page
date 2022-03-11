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