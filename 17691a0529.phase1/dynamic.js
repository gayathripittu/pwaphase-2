function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
   profile(data.profile);
   career(data.career);
   education(data.education);
   Skills(data.Skills);
})


var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);

  var h=document.createElement("h3");
  h.textContent=p.designation;
  left.append(h);

  var h=document.createElement("h3");
  h.textContent=p.gmail;
  left.append(h);

    var h=document.createElement("h3");
    h.textContent=p.phno;
    left.append(h);
  }


  var right=document.querySelector(".right");
     function career(c){

      var h3=document.createElement("h3");
      h3.textContent="Career objective";
      right.append(h3);
var hr=document.createElement("hr");
right.append(hr);

var h=document.createElement("h3");
h.textContent=c.info;
right.append(h);
}
// education details
function education(e) {
  var h3=document.createElement("h3");
  h3.textContent="Education";
  right.append(h3);
var hr=document.createElement("hr");
right.append(hr);
var table=document.createElement("table");
// table.border="2";
right.append(table);
var tr1="<tr><th>S.no</th><th>Institution</th><th>Qualification</th><th>percentage</th><th>yearofpassing</th></tr>";
var tr2=" ";
for(var i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].Institution+"</td><td>"+e[i].Qualification+"</td><td>"+e[i].percentage+"</td><td>"+e[i].yearofpassing+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);


}

function Skills(s){
  var h2=document.createElement("h2");
  h2.textContent="Skills";
  right.append(h2);
var hr=document.createElement("hr");
right.append(hr);
var ul=document.createElement("ul");
for(var i in s)
{
  var li=document.createElement("li");
     li.innerHTML=s[i].Name+":"+s[i].info;
ul.append(li);
}
right.append(ul);
}
