function submitData() {

  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var fathername=document.querySelector("#fathername").value;
  var mobileno=document.querySelector("#mobileno").value;
  var gmail=document.querySelector("#gmail").value;
  var address=document.querySelector("#address").value;

  var GInstitute=document.querySelector("#GInstitute").value;
  var Gbranch=document.querySelector("#Gbranch").value;
  var Gpercentage=document.querySelector("#Gpercentage").value;
  var gyearofpassing=document.querySelector("#gyearofpassing").value;

  var IInstitute=document.querySelector("#IInstitute").value;
  var Ibranch=document.querySelector("#Ibranch").value;
  var Ipercentage=document.querySelector("#Ipercentage").value;
  var Iyearofpassing=document.querySelector("#Iyearofpassing").value;

  var sInstitute=document.querySelector("#sInstitute").value;
  var sboard=document.querySelector("#sboard").value;
  var spercentage=document.querySelector("#spercentage").value;
  var syearofpassing=document.querySelector("#syearofpassing").value;
  var Skills=document.querySelector("#Skills").value;

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

if(!idb in window){
  console.log("indexedDB is not supported");
}
// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);

console.log("IndexedDB is createted");

open.onupgradeneeded=function (e){
  request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(error){
  console.log("error is occured")
}

open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    fathername:fathername,
    mobileno:mobileno,
    gmail:gmail,
    address:address,
    education:[
      {
        Institute:GInstitute,
        branch:Gbranch,
        percentage:Gpercentage,
        yearofpassing:gyearofpassing
      },
      {
        Institute:IInstitute,
        branch:Ibranch,
        percentage:Ipercentage,
        yearofpassing:Iyearofpassing
      },
      {
        Institute:sInstitute,
        branch:sboard,
        percentage:spercentage,
        yearofpassing:syearofpassing
      }
    ]

    // Skills:Skills
  });
}



window.open("index.html");



}
