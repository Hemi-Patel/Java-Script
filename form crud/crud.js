user = [];

const saveRecord = () => {
        let name=document.getElementById('name').value ;
        let age=document.getElementById('age').value ;

       let obj={
        grid:Math.floor(Math.random()*100000),
        name:name,
        age:age
       }
       user.push(obj);
       viewRecord();
       alert("Successfully added");
       document.getElementById('name').value="";
       document.getElementById('age').value="";
       
}
const viewRecord=()=>{
    let tbl="";
    user.map((val,index)=>{
        tbl +=`
                <tr>
                    <td>${val.grid}</td>
                    <td>${val.name}</td>
                    <td>${val.age}</td>
                </tr>
                `
    })
    document.getElementById('data').innerHTML=tbl;
}
