function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    return xmlHttp.responseText;
}


function UserCheck(Element) {
    UsernameList = httpGet("https://thepentachronbackend-production.up.railway.app/UserNameGet");
    console.log(UsernameList);
    console.log(".");
    BottomTextE = document.getElementById("ChangeHTMLUsernameCheck");
    if (Element.value == "") {
        BottomTextE.innerHTML = 'Please enter a username!';
        BottomTextE.setAttribute("class", "UserCheckTextE");
    }
    else if (Element.value in UsernameList) {
        BottomTextE.innerHTML = 'Username is already taken!';
        BottomTextE.setAttribute("class", "UserCheckTextI");
    } else {
        BottomTextE.innerHTML = 'Username is valid!';
        BottomTextE.setAttribute("class", "UserCheckTextV");
    }
}