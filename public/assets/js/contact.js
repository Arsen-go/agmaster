
function snedEmail() {
    let time = new Date();
    let currDay = time.getFullYear() + ":" + time.getMonth() + ":" + time.getDate();
    let currTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    let fullTime = currDay + " " + currTime;
    let obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        sendTime: fullTime,
    }
    fetch('/message', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json();
        })
        .then((obj) => {
        
        });
}