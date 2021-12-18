function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    dispaly(data.cards)
})

var deck=document.querySelector(".card-deck")
console.log(deck)

function dispaly(mob){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
    console.log(deck)

    for( var i in mob){
        // console.log(mob[i].name)
        var caddiv=document.createElement("div")
        caddiv.classList.add("card")
        var cadimg=document.createElement("img")
       cadimg.src=mob[i].img
       caddiv.appendChild(cadimg)
       deck.appendChild(caddiv)

    //    name

    var cname=document.createElement("h2")
    cname.textContent="Mobile : "+mob[i].name;
    caddiv.appendChild(cname)

    // rate

    var rate=document.createElement("h3")
    rate.textContent="Price/- "+mob[i].rate;
    caddiv.appendChild(rate)

    // offer

    var ofer=document.createElement("h3")
    ofer.textContent="Discount/- "+mob[i].offer;
    caddiv.appendChild(ofer)

    // button

    var btn=document.createElement("button")
    btn.classList.add("btn-warning")
    btn.textContent=mob[i].button;
    caddiv.appendChild(btn)


    }
}