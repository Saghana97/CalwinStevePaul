
var totalbudget
var education,transport,food;
var educationarr=[];
var transportarr=[];
var foodarr=[];




const submitclick= ()=>{
    education=parseInt(document.getElementById("education").value);
    transport=parseInt(document.getElementById("transport").value);
    food=parseInt(document.getElementById("food").value);

    totalbudget=education+transport+food;

    

    document.getElementById("innerContainer1").style.display="none";
    document.getElementById("innerContainer2").style.display="block";
    document.getElementById("budgetDisplay").innerHTML= " Monthly budget is Rs-"+totalbudget;
    // console.log(totalbudget+", "+education+", "+transport+", "+food);
    
}


var count=0;
document.getElementById("addRow").addEventListener("click",function(){
    count+=1;
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.innerHTML=` 
    <select id="select${count}" >
        <option value="0">Education</option>
        <option value="1">Transport</option>
        <option value="2">Food</option>
    </select>`;

    
    var cell2 = document.createElement("td");
    cell2.innerHTML=`<input id="discreption${count}" type="text" placeholder="Description">`;
    var cell3 = document.createElement("td");
    cell3.innerHTML=`<input id="amount${count}" type="number" placeholder="Amount">`;

    row.appendChild(cell1);
	row.appendChild(cell2);
    row.appendChild(cell3);

    var element= document.getElementById("table1");
    element.appendChild(row);

        
});

const submitclick2=()=>{
    console.log("submitting")
    var l = document.getElementById("table1").children.length;
    for(var i = 0;i<l;i++){
        category = parseInt(document.getElementById("select"+i).value);
        discreption = document.getElementById("discreption"+i).value
        amount = parseInt(document.getElementById("amount"+i).value);
        obj={};
        switch(category){
            case 0:
               obj={name:discreption, amount:amount};
                educationarr.push(obj);
                // console.log(obj)
                break;
            case 1:
                obj={name:discreption, amount:amount};
                transportarr.push(obj);
                break;
            case 2:
                obj={name:discreption, amount:amount};
                foodarr.push(obj);
                break;                          
        }
       
    }
    console.log(education,transport,food);
    console.log(educationarr,transportarr,foodarr);


    document.getElementById("innerContainer2").style.display="none";
    document.getElementById("innerContainer3").style.display="block";
    
    var totalEdu = 0;
    var totalTrans = 0;
    var totalFood = 0;

    for(var i=0;i<educationarr.length;i++){
        totalEdu+= educationarr[i].amount;
    }
    for(var i=0;i<transportarr.length;i++){
        totalTrans+= transportarr[i].amount;
    }
    for(var i=0;i<foodarr.length;i++){
        totalFood+= foodarr[i].amount;
    }
    console.log(totalEdu,totalTrans,totalFood);
    var totalExpence= totalEdu+totalTrans+totalFood;

    document.getElementById("table2").innerHTML=`
    <tr>
        <td>Education</td>
        <td>${totalEdu}</td>
        <td>${education-totalEdu}</td>
    </tr>
    <tr>
        <td>Transport</td>
        <td>${totalTrans}</td>
        <td>${transport-totalTrans}</td>
    </tr>
    <tr>
        <td>Food</td>
        <td>${totalFood}</td>
        <td>${food-totalFood}</td>
    </tr>
    <tr>
        <td>TOTAL</td>
        <td>${totalExpence}</td>
        <td>${totalbudget-totalExpence}</td>
    </tr>
    `;
} 
