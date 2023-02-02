
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetch_data();
    }
};


let page=1;
const results=10;
async function fetch_data(){
    page+=1;
    const resp=await fetch(`http://127.0.0.1:8000/?page=${page}&results=${results}&seed=abc`);
    const data=await resp.json();
    let table=document.getElementById('tableBody');
    data.results.map((user)=>{
        let tab_row=document.createElement('tr');
        let img_row=document.createElement('td');
        let img=document.createElement('img');
        img.src=user.picture.thumbnail;
        img_row.appendChild(img);
        let name_row=document.createElement('td');
        name_row.innerText=user.name.first;
        let city_row=document.createElement('td');
        city_row.innerText=user.location.city;
        let state_row=document.createElement('td');
        state_row.innerText=user.location.state;
        let country_row=document.createElement('td');
        country_row.innerText=user.location.country;
        let username_row=document.createElement('td');
        username_row.innerText=user.login.username;
        tab_row.appendChild(img_row);
        tab_row.appendChild(name_row);
        tab_row.appendChild(city_row);
        tab_row.appendChild(state_row);
        tab_row.appendChild(country_row);
        tab_row.appendChild(username_row);
        table.appendChild(tab_row);
        
    });
}


function sortTable(colnum) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
  
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[colnum];
        y = rows[i + 1].getElementsByTagName("TD")[colnum];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }


  function search() {
    var input, filter, table, tr, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        let td1 = tr[i].getElementsByTagName("td")[1];
        let td2 = tr[i].getElementsByTagName("td")[2];
        let td3 = tr[i].getElementsByTagName("td")[3];
        let td4 = tr[i].getElementsByTagName("td")[4];
        let td5 = tr[i].getElementsByTagName("td")[5];
        txtValue = td1.textContent || td1.innerText;
        txtValue += td2.textContent || td2.innerText;
        txtValue += td3.textContent || td3.innerText;
        txtValue += td4.textContent || td4.innerText;
        txtValue += td5.textContent || td5.innerText;
        console.log(txtValue);
        if (txtValue.toLowerCase().includes(filter)) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}