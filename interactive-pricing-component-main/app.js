let view = document.getElementById("payment");
let price = document.querySelector('.tag');
let price2 = document.querySelector('.tag2');
let range = document.querySelector(".range");
let toggle = document.getElementById('billing');
let pageViews = ["10k", "50k", "100k", "500k", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;



range.addEventListener('input', function() {
    updateValue();
    view.innerHTML = pageViews[range.value];
    
});
        

toggle.addEventListener('change', function() {
    if(isYearly == false){
        isYearly = true;
    } else {
        isYearly = false;
    }
    updateValue()
});


function updateValue(){
    if(isYearly){
        price.innerHTML = perMonth[range.value] * .75
    } else {
        price.innerHTML = perMonth[range.value]
    } 
}

function updateVal(){
    if(isYearly){
        price2.innerHTML = perMonth[range.value] * .75
    } else {
        price2.innerHTML = perMonth[range.value]
    } 
}
toggle.addEventListener('change', function() {
    if(isYearly == false){
        isYearly = true;
    } else {
        isYearly = false;
    }
    updateVal()
});
range.addEventListener('input', function() {
    updateVal();
    view.innerHTML = pageViews[range.value];
    
});



 





