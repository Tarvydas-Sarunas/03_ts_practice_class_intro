function sayHi(): void {
  console.log('sayHi from function');
}
sayHi();

// taikomes i btn
// mes darome type aserchin ir jo reiktu vengti bet kartais tai ne isvengiama
const btn1El = document.getElementById('btn1') as HTMLButtonElement | null;

console.log('btn1El ===', btn1El);

btn1El?.addEventListener('click', (event: Event): void => {
  const btn = event.target as HTMLButtonElement;
  console.log('btn.textContent; ===', btn.textContent);
  sayHi();
});

// nusitaikyti antra mygtu ir paragrafa
const btn2El = document.getElementById('btn2') as HTMLButtonElement | null;
const pEl = document.getElementById(
  'counter-value'
) as HTMLParagraphElement | null;

// ir paspaudu padidinti skaiciu
let count: number = 0;
btn2El?.addEventListener('click', (event: Event): void => {
  count++;
  if (pEl) {
    pEl.textContent = count.toString();
  }
});
