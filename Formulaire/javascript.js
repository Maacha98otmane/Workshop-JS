const enf = document.getElementsByClassName('enfant')[0];
const to = document.getElementsByClassName('intenf');
const form = document.querySelector('.my-form')
const show = document.querySelector('.show')
const numenf = document.querySelector('#n-enf')

form.addEventListener('submit', e => {
    enf.innerHTML = ``;
    e.preventDefault()
    for (i = 1; i <= numenf.value; i++) {
        enf.innerHTML += '<div style="height:70px"><input min="0"  type ="number" class="form-control intenf" placeholder="Age Enfant' + i + ' "id="intenf' + i + '"><center><p class="prenf" id="prenf' + i + '"></p></center><br></div>';
    }
})

function myFunction() {
    if (document.getElementById("mar").checked) {
        document.getElementById("box").style.display = "block"
        calculer()
    } else{
        document.getElementById("box").style.display = "none";
        let tt = document.getElementById('salaire').value
        tt = parseInt(tt) - tt * 0.15;
        show.textContent = "Salaire :" + tt + "DH"    } 
}

function calculer() {
    let ages = [];
    let sal = document.getElementById('salaire').value;
    let tt = document.getElementById('salaire').value
    let enfants = document.getElementsByClassName("intenf");
    for (let i = 0; i < enfants.length; i++) {
        ages.push(enfants[i].value);
    }
    ages.forEach(el => {
        if (el < 5) {
            sal = parseInt(sal) + tt * 0.03;
        } else if (el >= 5 && el < 12) {
            sal = parseInt(sal) + tt * 0.05;
        } else if (el >= 12 && el <= 24) {
            sal = parseInt(sal) + tt * 0.07;
        }
    });
    sal = parseInt(sal) - tt * 0.15;
    show.textContent = "Salaire :" + sal + "DH"
}

enf.addEventListener('keyup', e => {
    calculer()
    let reg = e.target.value;
    let prenf = e.target.parentElement.querySelector('p');
    if (reg > 24) {
        prenf.textContent = "Pas avantage"
    } else if (reg < 5) {
        prenf.textContent = "+3%"

    } else if (reg >= 5 && reg < 12) {
        prenf.textContent = "+5%"


    } else if (reg >= 12 && reg <= 24) {
        prenf.textContent = "+7%"

    } else {
        prenf.textContent = ""
    }

})