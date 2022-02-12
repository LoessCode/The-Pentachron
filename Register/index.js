function httpGet(theurl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', theurl, false);
    xhr.send();
    return xhr.responseText;
}

UsernameList = JSON.parse(httpGet("https://thepentachronbackend-production.up.railway.app/UserNameGet"))["Usernames"];
console.log(UsernameList);

function UserCheck() {
    ElementVar = document.getElementById("InputTextBox");
    BottomTextE = document.getElementById("ChangeHTMLUsernameCheck");
    SubButton = document.getElementById("RegisterSubmitButton");
    if (ElementVar.value == "") {
        BottomTextE.innerHTML = 'Please enter a username!';
        BottomTextE.setAttribute("class", "UserCheckTextE");
        SubButton.setAttribute("disabled", "true");
    }
    else if (UsernameList.indexOf(ElementVar.value) > -1) {
        BottomTextE.innerHTML = 'Username is already taken!';
        BottomTextE.setAttribute("class", "UserCheckTextI");
        SubButton.setAttribute("disabled", "true");
    } else {
        BottomTextE.innerHTML = 'Username is valid!';
        BottomTextE.setAttribute("class", "UserCheckTextV");
        SubButton.removeAttribute("disabled");
    }
}