
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const rec = [];

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    fetch('./travel_rec.json')
      .then(response => response.json())
      .then(data => {
        if (input == "country") {
            console.log("Recommendation found!");
            const seed = Math.floor(Math.random() * 3);
            document.getElementById("rec_1").innerHTML = ""
            document.getElementById("rec_2").innerHTML = ""
            document.getElementById("rec_1").innerHTML += `<img style="width: 300px; height: 170px; object-fit: cover;" src="${data.countries[seed].cities[0].imageUrl}" alt=".">`
            document.getElementById("rec_1").innerHTML += `<h2>${data.countries[seed].cities[0].name}<h2>`
            document.getElementById("rec_1").innerHTML += `<p style="font-size: 0.9rem">${data.countries[seed].cities[0].description}<p>`
            document.getElementById("rec_2").innerHTML += `<img style="width: 300px; height: 170px; object-fit: cover;" src="${data.countries[seed].cities[1].imageUrl}" alt=".">`
            document.getElementById("rec_2").innerHTML += `<h2>${data.countries[seed].cities[0].name}<h2>`
            document.getElementById("rec_2").innerHTML += `<p style="font-size: 0.9rem">${data.countries[seed].cities[0].description}<p>`

        } else if (input == "temple"){
            document.getElementById("rec_1").innerHTML = ""
            document.getElementById("rec_2").innerHTML = ""
            document.getElementById("rec_1").innerHTML += `<img style="width: 300px; height: 170px; object-fit: cover;" src="${data.temples[0].imageUrl}" alt=".">`
            document.getElementById("rec_1").innerHTML += `<h2>${data.temples[0].name}<h2>`
            document.getElementById("rec_1").innerHTML += `<p style="font-size: 0.9rem">${data.temples[0].description}<p>`
            document.getElementById("rec_1").innerHTML += `<img style="width: 300px; height: 170px; object-fit: cover;" src="${data.temples[1].imageUrl}" alt=".">`
            document.getElementById("rec_1").innerHTML += `<h2>${data.temples[1].name}<h2>`
            document.getElementById("rec_1").innerHTML += `<p style="font-size: 0.9rem">${data.temples[1].description}<p>`
        
        } else if (input == "beach"){
            console.log("Recommendation found!");
            document.getElementById("rec_1").innerHTML = ""
            document.getElementById("rec_2").innerHTML = ""
            document.getElementById("rec_1").innerHTML += `<img style="width: 300px; height: 170px; object-fit: cover;" src="${data.beaches[0].imageUrl}" alt=".">`
            document.getElementById("rec_1").innerHTML += `<h2>${data.beaches[0].name}<h2>`
            document.getElementById("rec_1").innerHTML += `<p style="font-size: 0.9rem">${data.beaches[0].description}<p>`
            document.getElementById("rec_1").innerHTML += `<img style="width: 300px; height: 170px; object-fit: cover;" src="${data.beaches[1].imageUrl}" alt=".">`
            document.getElementById("rec_1").innerHTML += `<h2>${data.beaches[1].name}<h2>`
            document.getElementById("rec_1").innerHTML += `<p style="font-size: 0.9rem">${data.beaches[1].description}<p>`
        } else {
            console.log("NO Recommendation found!");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log("NO Recommendation found!");
      });
  }

btnSearch.addEventListener('click', search);


function resetSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("rec_1").innerHTML = ""
    document.getElementById("rec_2").innerHTML = ""
  }    

btnClear.addEventListener('click', resetSearch);