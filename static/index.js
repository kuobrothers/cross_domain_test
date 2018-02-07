var tokenDom = document.getElementById("token");
var iframe = document.getElementById("iframe");

var submitIframe = function(){
    var data = {
        action : "submitIframe",
    }
    iframe.contentWindow.postMessage(JSON.stringify(data), "*");
};

window.addEventListener("message", function(event) {
    //創業家拿到tokenlized的卡號結帳gogogo
    var data = JSON.parse(event.data);
    tokenDom.innerHTML = data.token;
    alert('創業家拿到tokenlized的卡號' + data.token + ' 要送出去結帳了')
});
