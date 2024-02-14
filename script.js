// creating an container
var container=document.createElement("div");
container.setAttribute("class","container");
// creating an row
var row=document.createElement("div");
row.setAttribute("class","row");
// creating an col 
var col1=document.createElement("div");
col1.classList.add("col-md-6","col-lg-3");
var col2=document.createElement("div");
col2.classList.add("col-md-6","col-lg-12");
var title1=document.createElement("div");
title1.innerHTML="<p>Form Submission</p>";
var title2=document.createElement("div");
title2.innerHTML="<p>Temporary Database</p>";
// appending col,row,container into html document
row.append(col1,col2);
container.append(row);
document.body.append(container);
function Label(tagname,attrname,attrvalue,attrname1,attrvalue1,innerhtml){
   let res=document.createElement(tagname);
    res.setAttribute(attrname,attrvalue);
    res.setAttribute(attrname1,attrvalue1);
    res.innerHTML=innerhtml;
    return res;
}
let fname=new Label("label","class","spacing","for","firstname","First Name:");
let lname=new Label("label","class","spacing","for","lastname","Last Name:");
let line1=new Label("label","class","spacing","for","line1","Address Line 1:");
let line2=new Label("label","class","spacing","for","line2","Address Line 2:");
let pin=new Label("label","class","spacing","for","pin","PIN:");
let gender=new Label("label","class","spacing","for","gender","Gender:");
let male=new Label("label","class","spacing","for","gender","Male");
let female=new Label("label","class","spacing","for","gender","Female");
let food=new Label("label","class","spacing","for","food","Choice of Food: <span>(must choose at least 2 out of 5 <br>options)</span>");
let north=new Label("label","class","spacing","for","food","North Indian");
let south=new Label("label","class","spacing","for","food","South Indian");
let chinese=new Label("label","class","spacing","for","food","Chinese");
let japanese=new Label("label","class","spacing","for","food","Japanese");
let sea=new Label("label","class","spacing","for","food","Sea Food");
let state=new Label("label","class","spacing","for","state","State:");
let country=new Label("label","class","spacing","for","country","Country:");
let button=new Label("button","class","spacing","type","submit","submit");

function Input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,idname,idvalue,innerhtml){
    let res=document.createElement(tagname);
    res.classList.add(attrname,attrvalue);
    res.setAttribute(attrname1,attrvalue1);
    res.setAttribute(attrname2,attrvalue2);
    res.setAttribute(idname,idvalue);
    return res;
}
let fInput=new Input("input","text","spacing","type","text","name","","id","firstname");
let lInput=new Input("input","text","spacing","type","text","name","","id","lastname");
let line1Input=new Input("input","text","spacing","type","text","name","","id","line1");
let line2Input=new Input("input","text","spacing","type","text","name","","id","line2");
let pinInput=new Input("input","text","spacing","type","text","name","","id","pin");
let maleInput=new Input("input","text","spacing","type","radio","name","gender","id","male");
let femaleInput=new Input("input","text1","spacing","type","radio","name","gender","id","female");
let northInput=new Input("input","text2","spacing","type","checkbox","name","food","id","north");
let southInput=new Input("input","text2","spacing","type","checkbox","name","food","id","south");
let chineseInput=new Input("input","text2","spacing","type","checkbox","name","food","id","chinese");
let japaneseInput=new Input("input","text2","spacing","type","checkbox","name","food","id","japanese");
let seaInput=new Input("input","text2","spacing","type","checkbox","name","food","id","sea");
let stateInput=new Input("input","text","spacing","type","text","name","","id","state");
let countryInput=new Input("input","text","spacing","type","text","name","","id","country");
maleInput.setAttribute("value","male");
femaleInput.setAttribute("value","female");
northInput.setAttribute("value","Northindian");
southInput.setAttribute("value","Southindian");
chineseInput.setAttribute("value","chinese");
japaneseInput.setAttribute("value","Japanese");
seaInput.setAttribute("value","SeaFood");
function Linebreaker(tagname){
    let res=document.createElement(tagname);
    return res;
}
let br1=new Linebreaker("br");
let br2=new Linebreaker("br");
let br3=new Linebreaker("br");
let br4=new Linebreaker("br");
let br5=new Linebreaker("br");
let br6=new Linebreaker("br");
let br7=new Linebreaker("br");
let br8=new Linebreaker("br");
let br9=new Linebreaker("br");
let br10=new Linebreaker("br");
let br11=new Linebreaker("br");
let br12=new Linebreaker("br");
let br13=new Linebreaker("br");
let br14=new Linebreaker("br");
let br15=new Linebreaker("br");
let br16=new Linebreaker("br");
let br17=new Linebreaker("br");
let br18=new Linebreaker("br");
let br19=new Linebreaker("br");
let br20=new Linebreaker("br");
let br21=new Linebreaker("br");
let br22=new Linebreaker("br");
button.addEventListener("click",Foo);
col1.append(title1,fname,br1,fInput,br2,lname,br3,lInput,br4,line1,br5,line1Input,br6,line2,br7,line2Input,br8,pin,br9,pinInput,br10,gender,br11,maleInput,male,femaleInput,female,br12,food,br13,northInput,north,br14,southInput,south,br15,chineseInput,chinese,br16,japaneseInput,japanese,br17,seaInput,sea,br18,state,br19,stateInput,br20,country,br21,countryInput,br22,button)
let table=document.createElement("div");
table.classList.add("table","table-hover","table-bordered");
let body=document.createElement("tbody");
let head=document.createElement("tr");
head.setAttribute("class","thead");
let tr=document.createElement("tr");
function Tablerow(tagname,scopename,scopevalue,innerhtml){
    let res=document.createElement(tagname);
    res.setAttribute(scopename,scopevalue);
    res.innerHTML=innerhtml;
    return res;
}
let firstth=new Tablerow("th","scope","col","First Name")
let lastth=new Tablerow("th","scope","col","Last Name")
let lineth=new Tablerow("th","scope","col","Address")
let pinth=new Tablerow("th","scope","col","Pin")
let genderth=new Tablerow("th","scope","col","Gender")
let foodth=new Tablerow("th","scope","col","Food")
let stateth=new Tablerow("th","scope","col","State")
let countryth=new Tablerow("th","scope","col","Country");
head.append(firstth,lastth,lineth,pinth,genderth,foodth,stateth,countryth);
body.append(head);
table.append(body)
col2.append(title2,table);

function  Foo(){
let fvalue=document.getElementById("firstname").value;
let lvalue=document.getElementById("lastname").value;
let line1value=document.getElementById("line1").value;
let line2value=document.getElementById("line2").value;
let linevalue=[];
linevalue.push(line1value,line2value);
let pinvalue=document.getElementById("pin").value;
let gendervalue=document.querySelector('input[type = radio]:checked').value; 
let Food=document.getElementsByName("food");
let foodlist=[];
let foodcount=0;
for(var i=0;i<Food.length;i++){
    if(Food[i].checked){
        foodlist.push(Food[i].value);
        foodcount++;
    }
}
if(foodlist.length>=2){
   var foodvalue=foodlist.join(",")
}else{
   foodvalue= alert("choose atleast 2 options out of 5 in food !!!")
   col2.style.display="none";
}
let statevalue=document.getElementById("state").value;
let countryvalue=document.getElementById("country").value;
function Data(tagname,value){
  let res=document.createElement(tagname);
  res.innerHTML=value;
  return res;
}
let value1=new Data("td",`${fvalue}`);
let value2=new Data("td",`${lvalue}`);
let value4=new Data("td",`${linevalue.join(",")}`);
let value5=new Data("td",`${pinvalue}`);
let value6=new Data("td",`${gendervalue}`);
let value7=new Data("td",`${foodvalue}`);
let value8=new Data("td",`${statevalue}`);
let value9=new Data("td",`${countryvalue}`);
tr.append(value1,value2,value4,value5,value6,value7,value8,value9);
body.append(tr);
}
