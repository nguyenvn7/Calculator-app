var li = document.querySelectorAll('li')
var inp_li = document.querySelector('#inp_li')
var inp = document.querySelectorAll('.inp')
var text_err = document.querySelectorAll('.text_err')
var Tip = document.querySelector('#Tip')
var Total = document.querySelector('#Total')
var inp_li = document.querySelector('#inp_li')
var reset = document.querySelector("#Reset")
var temp = null;
var Index = null;


reset.onclick = function(){
    inp[0].value = inp[1].value = inp_li.value= ""
    inp[0].placeholder = inp[1].placeholder = 0
    inp_li.placeholder = "Custom"
    if(Index != 5 )
    li[Index].classList.remove("li_click")
    Tip.textContent = Tip.textContent = `$0.00`
    Total.textContent = Total.textContent =`$0.00`
}

inp_li.onclick = function(){
    temp = (temp != null? li[temp].classList.remove("li_click"):null)
    temp=null
}


inp[0].onblur  = function(){
    inp[0].placeholder = inp[0].value == 0? 0:inp[0].value
    if(inp[0].value == 0){
         text_err[0].style.display = "inline-block"
         inp[0].classList.add("inp_err")
        }
    else{
        text_err[0].style.display = "none"
        inp[0].classList.remove("inp_err")
        Result()
    }
}

inp[1].onblur = function(){
    inp[1].placeholder = inp[1].value == 0? 0:inp[1].value
    if(inp[1].value == 0){
        inp[1].classList.add("inp_err")
        text_err[1].style.display = "inline-block"
    }else{
        if(inp_li.value != 0) Index =5
                Result()     
        text_err[1].style.display = "none"
        inp[1].classList.remove("inp_err")
    }
}

li.forEach((data,index) => {
    data.onclick = function(){
        temp = ((temp == null || temp == index)? null:li[temp].classList.remove("li_click"))
        data.classList.toggle("li_click")
        Index = index
        temp = index
        Result()
    }
})

function Result(){
    var rs;
    if(inp[0].value != 0 && inp[1].value != 0){
    switch(Index){
        case null:
            Total.textContent = `$${Math.round(((inp[0].value / inp[1].value))*100)/100}`
            break;
        case 0:
            rs =  Math.round(((inp[0].value * 0.05 )/inp[1].value)*100)/100
            Tip.textContent = `$${rs}`
            Total.textContent = `$${Math.round((rs + (inp[0].value / inp[1].value))*100)/100}`
            break;
        case 1:
            
            rs =  Math.round(((inp[0].value * 0.10 )/inp[1].value)*100)/100
            Tip.textContent = `$${rs}`
            Total.textContent = `$${Math.round((rs + (inp[0].value / inp[1].value))*100)/100}`
            break;
        case 2:
            rs =  Math.round(((inp[0].value * 0.15 )/inp[1].value)*100)/100
            Tip.textContent = `$${rs}`
            Total.textContent = `$${Math.round((rs + (inp[0].value / inp[1].value))*100)/100}`
            break;
        case 3:
           
            rs =  Math.round(((inp[0].value * 0.25 )/inp[1].value)*100)/100
            Tip.textContent = `$${rs}`
            Total.textContent = `$${Math.round((rs + (inp[0].value / inp[1].value))*100)/100}`
            break;
        case 4:
            rs =  Math.round(((inp[0].value * 0.50 )/inp[1].value)*100)/100
            Tip.textContent = `$${rs}`
            Total.textContent = `$${Math.round((rs + (inp[0].value / inp[1].value))*100)/100}`
            break;
        case 5:
            rs =  Math.round(((inp[0].value * inp_li.value/100 )/inp[1].value)*100)/100
            Tip.textContent = `$${rs}`
            Total.textContent = `$${Math.round((rs + (inp[0].value / inp[1].value))*100)/100}`
            break;
    }}
    if(isOverflown(Tip)){
        Tip.style.fontSize = "15px"
    }else{
        Tip.style.fontSize = "40px"
    }
    if(isOverflown(Total)){
        Total.style.fontSize = "15px"
    }else {
        Total.style.fontSize = "40px"
    }
}
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }