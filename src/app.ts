import { ModIf, StudIf, student } from './data/student.js';

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
  console.log('event ===', event);
  count++;
  if (pEl) {
    pEl.textContent = count.toString();
  }
});

console.log('StudIf ===', student);

//1. sukurti funkcija kuri argumentu ima studentoObj
// grazina jo pazimiu vidurki

const modulObjAvg = (modulObj: ModIf): number => {
  console.log('modulObj ===', modulObj);
  const avg: number =
    modulObj.marks.reduce((total: number, mark: number) => total + mark, 0) /
    modulObj.marks.length;
  return avg;
};

const pazymiai = modulObjAvg(student.modules[0]);
console.log('pazymiai ===', pazymiai);

//2. sukurti funkcija kuri argumentu ima studentoObj
// grazina obj kuriame yra title ir avg. Avh yra vidurkis padaugintas is kreditu
const getModulInfo = (modulObj: ModIf): { avg: number; title: string } => {
  console.log('modulObj ===', modulObj);
  const avg: number = modulObjAvg(modulObj) * modulObj.credits;
  console.log('avg ===', avg);
  return { avg: avg, title: modulObj.title };
};
getModulInfo(student.modules[2]);

// 3. parasyti funkcija kuri ima studenta argumentu ir grazina jo vidurkiu vidurki
function getTotalStudentAvg(stud: StudIf): number {
  const avgArr: number[] /* arba Array<number> */ = stud.modules.map((mObj) =>
    modulObjAvg(mObj)
  );
  console.log('avgArr ===', avgArr);
  return (
    avgArr.reduce((total: number, avg: number) => total + avg, 0) /
    avgArr.length
  );
}
const totalAvg = getTotalStudentAvg(student);
console.log('totalAvg ===', totalAvg);

// 4. funkcija kuri ima studenta argumentu ir grazina visus jo modulius kaip stringus masyve
const stringuArr = (stud: StudIf): string[] => {
  const stringArr = stud.modules.map((mObj) => {
    return [
      `Title: ${mObj.title}, Credits: ${mObj.credits}, Marks: ${mObj.marks}`,
    ];
  });
  console.log('stringArr ===', stringArr);
  return [];
};
stringuArr(student);

// 5. funkcija kuri ima studenta argumentu ir grazina masiva su sitais obj viduje {avg, title}
const naujasArr = (stud: StudIf): { avg: number; title: string }[] => {
  const newArr: { avg: number; title: string }[] = stud.modules.map(
    (mObj: ModIf) => ({
      avg: modulObjAvg(mObj),
      title: mObj.title,
    })
  );
  console.log('newArr ===', newArr);
  return newArr;
};
naujasArr(student);

// 6. funkcija kuri ima studenta argumentu ir grazina objekta su studento name fulname ir moduliu total vidurkis
const naujasMasyvasSuVardu = (
  stud: StudIf
): { name: string; surname: string; totalAvg: number } => {
  const newArr: { name: string; surname: string; totalAvg: number } = {
    name: stud.name,
    surname: stud.surname,
    totalAvg: getTotalStudentAvg(stud),
  };
  console.log('newArr ===', newArr);
  return newArr;
};
const pazekArArr = naujasMasyvasSuVardu(student);
console.log('pazekArArr ===', pazekArArr);
