(()=>{"use strict";async function e(e){const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=7294f19a29b1cd65d88f2beb9df55f6c`,{mode:"cors"}),t=await n.json();!function(e,n,t,a,i,c){const d=document.getElementById("js-container");d.innerHTML="";const o=document.createElement("h2"),m=document.createElement("img"),r=document.createElement("p"),p=document.createElement("h3"),h=document.createElement("span");d.appendChild(o),d.appendChild(m),d.appendChild(r),d.appendChild(p),d.appendChild(h),o.innerHTML=`${e}`,m.src=`http://openweathermap.org/img/wn/${n}@2x.png`,r.innerHTML=`${a}°C`,p.innerHTML=i,h.innerHTML=`Feels Like ${t}°C | ${c}% humidity`}(e,t.weather[0].icon,Math.round(t.main.feels_like),Math.round(t.main.temp),t.weather[0].description,t.main.humidity)}document.getElementById("search-button").onclick=()=>{e(document.getElementById("search-bar").value)},e("london")})();