var cnum = document.getElementsByClassName('c-num')[0];
var cope = document.getElementsByClassName('c-operator')[0];
var intop = document.getElementById('intop');
var inbottom = document.getElementById('inbottom');
var newinbottom;
var newinbottom2;
var sign;
for (i = 0; i < 10; i++) {
    cnum.innerHTML += '<span class="numb" value="' + i + '" id="numid' + i + '" onclick="puton(' + i + ')">' + i + '</span>';
}

function puton(numb) {
    inbottom.value += numb
}

function ans(answer) {
    if (inbottom.value == '') {
        alert('type input');
    } else if (sign == "plus") {
        newinbottom2 = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = parseInt(newinbottom) + parseInt(newinbottom2);
    } else if (sign == "minus") {
        newinbottom2 = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = newinbottom - newinbottom2;
    } else if (sign == "divi") {
        newinbottom2 = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = newinbottom / newinbottom2;
    } else if (sign == "mul") {
        newinbottom2 = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = newinbottom * newinbottom2;
    }

    sign = '';

}

function opr(opra) {
    if (sign != '' && sign != undefined) {
        ans();
    } else 
    if (opra == "clr") {
        intop.value = ''
        inbottom.value = '';
        newinbottom = '';
        newinbottom = '';
        sign = '';
    } else if (opra == "plus") {
        newinbottom = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = '';
        sign = "plus";
    } else if (opra == "minus") {
        newinbottom = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = '';
        sign = "minus";
    } else if (opra == "divi") {
        newinbottom = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = '';
        sign = "divi";
    } else if (opra == "mul") {
        newinbottom = inbottom.value;
        intop.value = inbottom.value;
        inbottom.value = '';
        sign = "mul";
    }
}


//////////////////////////////////
// const form=document.querySelector('.myform');
// let res
// let html=``
// const getinput=document.querySelector('#getinput')
// form.addEventListener('submit', e=> {
//     e.preventDefault();
//   res =getinput.value.toLowerCase()
//    console.log(res)
//    html = `<p>${res}</p>`
//    console.log(html)
//    form.innerHTML += html;
// })
