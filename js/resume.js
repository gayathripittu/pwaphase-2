var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}




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
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);

  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
var image=document.createElement("img");
image.src="image/man.svg";
image.alt=pi.name;
left.append(image);



var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);

var h=document.createElement("h2");
h.textContent=pi.fathername;
left.append(h);

var hi=document.createElement("h2");
hi.textContent=pi.mobileno;
left.append(hi);

var ha=document.createElement("h2");
ha.textContent=pi.gmail;
left.append(ha);

var hk=document.createElement("h2");
hk.textContent=pi.address;
left.append(hk);

var h3=document.createElement("h2");
h3.textContent="career";
right.append(h3);

var pc=document.createElement("p");
pc.textContent=pi.career;
right.append(pc);

  var h3=document.createElement("h2");
  h3.textContent="Education";
  right.append(h3);
var table=document.createElement("table");
 table.border="1";

var p="<tr><th>Institute</th><th>branch</th><th>percentage</th><th>yearofpassing</th></tr>";
var q=" ";
for(i in pi.education)
{
  q=q+"<tr><td>"+pi.education[i].Institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].percentage+"</td><td>"+pi.education[i].yearofpassing+"</td></tr>";
}
table.innerHTML=p+q;
right.append(table);

var g=document.createElement("h2");
g.textContent="Skills";
right.append(g);

var i=document.createElement("hr");
right.append(i);

// var ga=document.createElement("h3");
// ga.textContent=pi.skills;
// right.append(ga);
}
