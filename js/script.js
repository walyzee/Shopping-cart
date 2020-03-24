/**Shopping Cart Script**/

let total = document.getElementById('total')
let plusBtn = Array.from(document.getElementsByClassName('plus-btn'))
let minusBtn = Array.from(document.getElementsByClassName('minus-btn'))
let prices = Array.from(document.getElementsByClassName('price'))
let likes = Array.from(document.getElementsByClassName('like'))
let del = Array.from(document.getElementsByClassName('delete'))
let quantity = Array.from(document.getElementsByClassName('qty'))
let items = Array.from(document.getElementsByClassName('item'))


function calculateSum() {
    let sum=0
    for (let j=0;j<quantity.length;j++){
        sum += parseInt(quantity[j].innerHTML) * parseInt(prices[j].innerHTML)
    }
    total.innerHTML = sum
}

for (let i=0;i<quantity.length;i++) {

    plusBtn[i].addEventListener('click',function(e){
        quantity[i].innerHTML++
        calculateSum()
    })
    minusBtn[i].addEventListener('click',function(e){
        if(quantity[i].innerHTML>0) {
            quantity[i].innerHTML--
            calculateSum()
        }
        else alert ('La quantité est de zero')
    })


    likes[i].addEventListener('click', function(e){
        if (likes[i].style.color!=="red"){
            likes[i].style.color="red"
        }
        else likes[i].style.color="black"
    })

    del[i].addEventListener('click', function(e){
        items[i].style.display='none';
        quantity[i].innerHTML=0
        calculateSum()
    })
}