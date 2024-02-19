import { student } from './data/student.js';
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
    console.log('event ===', event);
    count++;
    if (pEl) {
        pEl.textContent = count.toString();
    }
});
console.log('StudIf ===', student);
const modulObjAvg = (modulObj) => {
    console.log('modulObj ===', modulObj);
    const avg = modulObj.marks.reduce((total, mark) => total + mark, 0) /
        modulObj.marks.length;
    return avg;
};
const pazymiai = modulObjAvg(student.modules[0]);
console.log('pazymiai ===', pazymiai);
const getModulInfo = (modulObj) => {
    console.log('modulObj ===', modulObj);
    const avg = modulObjAvg(modulObj) * modulObj.credits;
    console.log('avg ===', avg);
    return { avg: avg, title: modulObj.title };
};
getModulInfo(student.modules[2]);
function getTotalStudentAvg(stud) {
    const avgArr = stud.modules.map((mObj) => modulObjAvg(mObj));
    console.log('avgArr ===', avgArr);
    return (avgArr.reduce((total, avg) => total + avg, 0) /
        avgArr.length);
}
const totalAvg = getTotalStudentAvg(student);
console.log('totalAvg ===', totalAvg);
const stringuArr = (stud) => {
    const stringArr = stud.modules.map((mObj) => {
        return [
            `Title: ${mObj.title}, Credits: ${mObj.credits}, Marks: ${mObj.marks}`,
        ];
    });
    console.log('stringArr ===', stringArr);
    return [];
};
stringuArr(student);
const naujasArr = (stud) => {
    const newArr = stud.modules.map((mObj) => ({
        avg: modulObjAvg(mObj),
        title: mObj.title,
    }));
    console.log('newArr ===', newArr);
    return newArr;
};
naujasArr(student);
const naujasMasyvasSuVardu = (stud) => {
    const newArr = {
        name: stud.name,
        surname: stud.surname,
        totalAvg: getTotalStudentAvg(stud),
    };
    console.log('newArr ===', newArr);
    return newArr;
};
const pazekArArr = naujasMasyvasSuVardu(student);
console.log('pazekArArr ===', pazekArArr);
//# sourceMappingURL=app.js.map