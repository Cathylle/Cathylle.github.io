$.getJSON( "realisation.json")
.done(function(){
  

    function setCookie(key, value, expiry) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

    function eraseCookie(key) {
        var keyValue = getCookie(key);
        setCookie(key, keyValue, '-1');
    }

$('.switch').mouseup(function(){

if(getCookie('switch')=="day"){
    eraseCookie('switch')
    setCookie("switch", "night", 2) 
    $("#cssSheet").attr("href", "/public/css/style_night.css");
    $('.switch input').prop('checked', true);
}   

else if(getCookie('switch')=="night"){
    eraseCookie('switch')
    setCookie("switch", "day", 2) 
    $("#cssSheet").attr("href", "/public/css/style_day.css");
    $('.switch input').prop('checked', true);
} 
else{
    setCookie("switch", "day", 2) 
    $("#cssSheet").attr("href", "/public/css/style_day.css");
    $('.switch input').prop('checked', true);
}

});

if(getCookie('switch')=="day"){

    $("#cssSheet").attr("href", "/public/css/style_day.css");
    $('.switch input').prop('checked', false);
}   

else if(getCookie('switch')=="night"){

    $("#cssSheet").attr("href", "/public/css/style_night.css");
    $('.switch input').prop('checked', false);
}

if (!getCookie('switch')){
    $('.switch input').prop('checked', false);
}

//     $('.switch').mouseup(function() {
//         setTimeout(function(){
//             if(sessionStorage.getItem('clicked', 'day')){
//                 sessionStorage.removeItem('clicked');
//                 $("#cssSheet").attr("href", "/public/css/style_night.css");
//             }
//             else{
//                 sessionStorage.setItem('clicked', 'day');
//                 $("#cssSheet").attr("href", "/public/css/style_day.css");
//             }
//         },200)
        

//     });

// console.log(sessionStorage.getItem('clicked'))

// if(sessionStorage.getItem('clicked', 'day')){
//     $("#cssSheet").attr("href", "/public/css/style_day.css");
// }
// else{
//     $("#cssSheet").attr("href", "/public/css/style_night.css");
// }

    });
