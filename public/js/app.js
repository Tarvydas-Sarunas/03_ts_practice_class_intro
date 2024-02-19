"use strict";
function sayHi() {
    console.log('sayHi from function');
}
sayHi();
const btn1El = document.getElementById('btn1');
console.log('btn1El ===', btn1El);
btn1El === null || btn1El === void 0 ? void 0 : btn1El.addEventListener('click', (event) => {
    const btn = event.target;
    console.log('btn.textContent; ===', btn.textContent);
    sayHi();
});
const btn2El = document.getElementById('btn2');
const pEl = document.getElementById('counter-value');
let count = 0;
btn2El === null || btn2El === void 0 ? void 0 : btn2El.addEventListener('click', (event) => {
    count++;
    if (pEl) {
        pEl.textContent = count.toString();
    }
});
//# sourceMappingURL=app.js.map