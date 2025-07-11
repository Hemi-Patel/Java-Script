
let user = JSON.parse(localStorage.getItem('user')) || [];
const saveRecord = () => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let obj = {
        userID: Math.floor(Math.random() * 10000),
        name: name,
        age: age
    }
    user.push(obj);
    localStorage.setItem('user', JSON.stringify(user));
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    viewRecord();
}
const viewRecord = () => {
    let tbl = "";
    let user = JSON.parse(localStorage.getItem('user')) || [];

    user.map((val, index) => {
        tbl += `
            <tr>
                <td>${val.userID}</td>
                <td>${val.name}</td>
                <td>${val.age}</td>
                <td><button onclick="deleteUser(${val.userID})">Delete</button></td>
            </tr>        
        `
    })
    document.getElementById("userData").innerHTML = tbl;
}
const deleteUser = (id) => {
    let deleteData = user.filter(val => val.userID != id);
    localStorage.setItem('user', JSON.stringify(deleteData));
    viewRecord();
}
viewRecord();