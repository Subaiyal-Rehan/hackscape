const hackBg = document.querySelector(".hackBgImage");
const para = document.getElementById("Para");
const span = document.getElementById('span');
const arr = ["Initializing Hacking", "Reading your files", "Password files detected", "Sending all passwords and personal files to server", "Cleaning up", "Hacking Done!", '<img src="Tick.gif" width="30">'];
let count = 1;
let maxCount = 3;
let timeout = 500;

setTimeout(() => {
    hackBg.style.display = "block";
    if (hackBg.style.display == "block") {
        document.title = "Hacking Started"
    }
    for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                para.innerHTML = arr[i];
                if (para.innerHTML === '<img src="Tick.gif" width="30">') {
                    setTimeout(() => {
                        hackBg.style.display = "none";
                        if (hackBg.style.display == "none") {
                            document.title = "Hacked Successfully!"
                        }
                    }, 1500);
                }
                if (i === 4) {
                    clearInterval(interval);
                    span.innerText = "";
                }
            }, 3000 * i);

    }
}, 3000);

function blink() {
    let dots = '';

    for (let i = 0; i < count; i++) {
        dots += '. ';
    }

    span.innerText = dots.trim();

    count++;
    if (count > maxCount) {
        count = 1;
        timeout = 500;
    }
}
const interval = setInterval(blink, timeout);