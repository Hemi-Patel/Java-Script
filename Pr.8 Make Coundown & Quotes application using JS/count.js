let count=0;
let click_increment=0;
let click_decrement=0;

document.getElementById('clickIncrement').innerHTML=`Clicks On Increment : ${click_increment}`;
document.getElementById('clickDecrement').innerHTML=`Clicks On Decrement : ${click_decrement}`;

document.getElementById('count').innerHTML= count;    
const increment = () => {
    count++;
    document.getElementById('count').innerHTML= count;   
    click_increment++;  
    document.getElementById('clickIncrement').innerHTML=`Clicks On Increment : ${click_increment}`;
}

const decrement = () => {
    count--;
    document.getElementById('count').innerHTML= count; 
    click_decrement++;    
    document.getElementById('clickDecrement').innerHTML=`Clicks On Decrement : ${click_decrement}`;   
}
