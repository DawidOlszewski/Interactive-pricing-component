// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const pageDetails = [['10K', '8'], ['50K','12'], ['100K','16'], ['500K','24'] ,['1M','36']]

const toggleSwitch = document.querySelector('input[type="checkbox"]')
const costNode = document.querySelector(".cost")
const viewsNode = document.querySelector(".pageviews")
const billingNode = document.querySelector('.billing-type')
const discount = document.querySelector('.discount')

const responsiveDiscount = () => {
    if(document.body.clientWidth > 900){
        discount.innerText = '25% discount'
    }
    else{
        discount.innerText = '25%'
    }
}

const changeCardDetails = function(viewsNode, costNode){
    let pageDetailsIndex = range.value - 1
    let isYear = +toggleSwitch.checked;
    let details = pageDetails[pageDetailsIndex]

    discount.style.display = ["none", "block"][isYear]

    viewsNode.innerText = `${details[0]} pageviews`
    costNode.innerHTML = `$${isYear == 0?details[1]:details[1]*9}.00<span class="billing-type">/${['month','year'][isYear]}</span>`
}

responsiveDiscount();
range.addEventListener('input',() => changeCardDetails(viewsNode, costNode));
toggleSwitch.addEventListener('input',() => changeCardDetails(viewsNode, costNode));
window.addEventListener("resize", responsiveDiscount)