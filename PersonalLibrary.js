 export const CALLBACK_WAJAX = (method = method, url, content = 'lorem=ipsum', callback) => {
        
    var http = new XMLHttpRequest();
    http.open(method, url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
            console.log(`Response text: ${http.responseText}`);
        }
    }
    http.send(content);
}

export const rand = (min, max) => {
    return Math.floor(Math.random() * (max - (min - 1)) ) + min;
}

export const sel = (input) => {
document.querySelector(input)
}

 