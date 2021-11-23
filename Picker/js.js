const input = document.getElementById('input')
const nameList = document.getElementById('name-list')
const reset = document.getElementById('reset')
const inputFile = document.getElementById('input-file')
const display = document.getElementById('display')
const checkbox = document.getElementById('checkbox')
const date = document.getElementById("date");

da = [];
let nextDay = 0;
let numberList = 0;
let sortList = ""





inputFile.addEventListener('change', function (event) {
    input.value = ''
    let files = inputFile.files

    if (files.length === 0) return;

    let file = files[0]
    let reader = new FileReader()

    reader.onload = (e) => {
        const file = e.target.result
        const name = file.split(',');
        input.value = name.join(',')
    }
    reader.onerror = (e) => alert(e.target.error.name)
    reader.readAsText(file)
})

reset.addEventListener('click', function (event) {
    input.value = ''
    inputFile.value = ''
    input.removeAttribute('disabled')
    display.innerHTML = 'Pas Encore...'
    checkbox.checked = false
    nameList.innerHTML = ''

})

ready.addEventListener('click', function (event) {


    if (input.value === '') {
        Swal.fire('Oops...', 'La liste des noms est vide !', 'info')
    } else {
        let ListName = input.value.split(/[\n,]+/).map(arr => arr.trim())
        NomsParticipants = [...ListName]
        numberList = ListName.length;
        input.value = NomsParticipants.join('\n')
        input.setAttribute('disabled', false)



        let NomTirage = TirageArray(NomsParticipants)



        for (let i = 0; i < NomTirage.length; i++) {
            (function (i, count) {
                setTimeout(() => {
                    let rand = Math.floor(Math.random() * (NomTirage.length))
                    display.innerHTML = NomTirage[rand]
                    if (count === NomTirage.length - 1) {
                        if (checkbox.checked == true) {
                            let index = NomsParticipants.indexOf(NomTirage[rand])
                            NomsParticipants.splice(index, 1)
                            input.value = NomsParticipants.join('\n')
                            console.log(NomsParticipants)
                        }

                        winnerAlert(NomTirage[rand])


                    }

                }, i)
            })
                (i * 150, i)
        }
    }

})

function TirageArray(array) {
    let shuffeledArr = [...array]

    for (let i = shuffeledArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffeledArr[rand]

        shuffeledArr[rand] = shuffeledArr[i]
        shuffeledArr[i] = temp
    }
    return shuffeledArr;
}

function winnerAlert(name) {

    Swal.fire({

        position: 'center',
        icon: 'success',
        title: `Congratulations ${name}`,
        input: 'text',
        inputPlaceholder: `Veuillez d'ajouter le sujet veille ${name}.`,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            } else {
                let D2 = new Date(date.value);
                D2.setDate(D2.getDate() + nextDay);
                
                let dd = String(D2.getDate()).padStart(2, "0");
                let mm = String(D2.getMonth() + 1).padStart(2, "0");
                let yyyy = D2.getFullYear();
                
                let FixDate = dd+"/"+mm+"/"+yyyy;
                let DayName = D2.toString().split(' ')[0];
                 console.log(DayName);
                
                if(DayName == "Fri"){
                    nextDay += 3;
                }else if(DayName == "Sat"){ 
                    nextDay += 2;
                }
                else{
                    nextDay += 1;

                }
                result = FixDate;
                    da.push({ name: name, sujet: value, date: result });

                
                    sortList += `
                            <tr>
                            <th scope="row">#</th>
                            <td> ${name} </td>
                            <td>${value}</td>
                            <td>${result}</td>
                            </tr>
                            `

                    nameList.innerHTML = sortList
                return
            }

        },


    })

}
function Down() {
        var sTable = document.getElementById('tab').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
}