let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;
let i = prompt('сколько дроидов купить?');
let x;
let c;

if (i === null){
    console.log('отмена');
}else{
    x = i * pricePerDroid;
    if (x < credits){
        console.log(credits - x);
    } else {
        console.log('Недостаточно средств на счету!');
    }
    
}
