window.addEventListener("message", function(event) {
    var data = JSON.parse(event.data);

    if (data.action == 'submitIframe') {
        //post to payment gateway to get tokenlized card
        setTimeout(function(){
            var data = {
                action : 'tokenSuccess',
                token : Math.round(Math.random() * 999999999)
            }
            parent.postMessage(JSON.stringify(data), "*");
        }, 500)
    }

});
