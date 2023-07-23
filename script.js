const btn = document.querySelector('#main_button');
const retryBtn = document.querySelector('#retry_button')

// ドボン確率の初期設定 (単位: %)
let modProb = 0;

// ドボン済判定

let isDobon = false;

// 押下時の処理
const pressButton = () => {
    const prob = Math.floor(Math.random() * 100);
    if (!isDobon) {
        console.log(prob);
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

// リトライ処理
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