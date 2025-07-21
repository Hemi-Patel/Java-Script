
const viewRecord = () => {
    let tbl = "";
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.map((val)=>{
        tbl += `
                    <tr>
                        <td>${val.userid}</td>
                        <td>${val.name}</td>
                        <td>${val.age}</td>
                        <td>
                            <button onclick="deleteUser(${val.userid})">Delete</button>
                            ||
                            <button onclick="editUser(${val.userid})">Edit</button>
                        </td>
                    </tr>   
                `
    })
    document.getElementById('record').innerHTML = tbl;
}
viewRecord();

const saveRecord = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let editid = document.getElementById('editid').value;
    let obj = {
        userid : Math.floor(Math.random()*10000),
        name : name,
        age : age
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if(editid){
        let up = users.map((val)=>{
            if(val.userid == editid){
                val.name = name;
                val.age = age;
            }
            return val;
        })
        localStorage.setItem('users',JSON.stringify(up));
        alert("record update");
        document.getElementById('editid').value= "";
    }else{
        users.push(obj);
        localStorage.setItem('users',JSON.stringify(users))
    }
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    viewRecord();
}

const deleteUser = (id) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let deletedata = users.filter(val => val.userid != id);
    localStorage.setItem('users',JSON.stringify(deletedata));
    alert("record delete");
    viewRecord();   
}

const editUser = (id) => {
   let users = JSON.parse(localStorage.getItem('users')) || [];
   let single = users.find(val => val.userid == id);  

   document.getElementById('name').value = single.name;
   document.getElementById('age').value = single.age;
   document.getElementById('editid').value = id;
  
}