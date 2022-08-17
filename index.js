// let obj = {
//     nama: "mself",
//     age: 19,
//     alive: true
// }

// console.log(obj)
// console.log(JSON.stringify(obj))
// let objJSON = JSON.stringify(obj);
//  ````````````````` Mengubah Object menjadi JSON

// `````````````` Vanilla JS JSON
// let xhr = XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(JSON.parse(xhr.responseText));
//     } else {
//         console.log(xhr.statusText);
//     }

// }

// xhr.open('GET', url, true);
// xhr.send();


// `````````` JQUERy JSON
// $.getJSON( 'index.json', data => {
//     console.log(data)
// })


// $.getJSON('LINK LINK LINK', data => {
//     console.log(data[0][4])
// })



// setTimeout ( () => {
//     console.log("-Async 1");
// }, 1000)
// setTimeout ( () => {
//     console.log("--Async 2")
// }, 2000)
// setTimeout ( () => {
//     console.log("---Async 3")
// }, 3000)

// console.log("Sync 1")
// console.log("Sync 2")


fetch('https://covid19.mathdro.id/api/')
    .then ( response => response.json() )
    .then ( data => {
        document.getElementById("global-case").innerHTML = data.confirmed.value
        document.getElementById("global-recovered").innerHTML = data.recovered.value
        document.getElementById("global-deaths").innerHTML = data.deaths.value
        document.getElementById("last-update-date").innerHTML = data.lastUpdate
    })

fetch('https://covid19.mathdro.id/api/countries/indonesia')
    .then ( response => response.json() )
    .then ( data => {
        document.getElementById("ind-case").innerHTML = data.confirmed.value
        document.getElementById("ind-recovered").innerHTML = data.recovered.value
        document.getElementById("ind-deaths").innerHTML = data.deaths.value
    })

