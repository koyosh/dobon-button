const btn = document.querySelector('#main_button');
const btnText = btn.querySelector('span');
const retryBtn = document.querySelector('#retry_button');
const ruleBtn = document.querySelector('#open_rule');
const ruleModal = document.querySelector('#rule_modal');
const closeRuleBtn = document.querySelector('#close_rule');

let modProb = 0;

let isDobon = false;

const pressButton = () => {
    const prob = Math.floor(Math.random() * 100);
    if (!isDobon) {
        if (prob <= modProb) {
            isDobon = true;
            btnText.innerHTML = 'DOBON!';
            btn.disabled = 'disabled';
            retryBtn.style.display = 'block';
        } else {
            modProb++;
            btnText.innerHTML = modProb;
        }
    }
}

const retry = () => {
    retryBtn.style.display = 'none';
    btn.disabled = null;
    isDobon = false;
    modProb = 0;
    btnText.innerHTML = modProb;
}

const showRule = () => {
    ruleModal.style.display = 'flex';
}

const hideRule = () => {
    ruleModal.style.display = 'none';
}

btn.addEventListener('click', () => {
    pressButton();
})

retryBtn.addEventListener('click', () => {
    retry();
})

ruleBtn.addEventListener('click', () => {
    showRule();
})

closeRuleBtn.addEventListener('click', () => {
    hideRule();
})