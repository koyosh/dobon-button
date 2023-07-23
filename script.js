const btn = document.querySelector('#main_button');
const retryBtn = document.querySelector('#retry_button')

let modProb = 0;


let isDobon = false;

const pressButton = () => {
    const prob = Math.floor(Math.random() * 100);
    if (!isDobon) {
        if (prob <= modProb) {
            isDobon = true;
            btn.innerHTML = 'DOBON!';
            retryBtn.style.display = 'block';
        } else {
            modProb++;
            btn.innerHTML = modProb;
        }
    }
}

const retry = () => {
    retryBtn.style.display = 'none';
    isDobon = false;
    modProb = 0;
    btn.innerHTML = modProb;
}

btn.addEventListener('click', () => {
    pressButton();
})

retryBtn.addEventListener('click', () => {
    retry();
})