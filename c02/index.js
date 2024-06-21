// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

const answer1 = studenti
  .filter(
    (student) =>
      student.grad === "Skopje" &&
      student.ime.endsWith("a") &&
      student.prosek > 7
  )
  .sort((a, b) => {
    if (a.firstname < b.firstname) {
      return -1;
    }
    if (a.firstname > b.firstname) {
      return 1;
    }
    return 0;
  });

// console.log(answer1);

const answer2 = studenti
  .filter((student) => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);

// console.log(answer2);

const answer3 = studenti
  .filter((student) => student.ime.length === 5)
  .sort((a, b) => a.prosek - b.prosek)
  .slice(3);

// console.log(answer3);

const groupedByCity = studenti.reduce((acc, student) => {
  if (!acc[student.grad]) {
    acc[student.grad] = [];
  }
  acc[student.grad].push(student.prosek);
  return acc;
}, {});

const avgByCity = Object.keys(groupedByCity).map((city) => {
  const average = groupedByCity[city];
  const total = average.reduce((sum, average) => sum + average, 0);
  const avg = total / average.length;
  return { city, average: avg };
});

const answer4 = avgByCity.sort((a, b) => b.average - a.average);
// console.log(answer4);

const studentiSoA = studenti.filter((student) => student.ime.endsWith("a"));
const studentiBezA = studenti.filter((student) => !student.ime.endsWith("a"));

presmetajProsek = (studenti) => {
  const prosek = studenti.reduce((sum, student) => sum + student.prosek, 0);
  return prosek / studenti.length;
};
const prosekSoA = presmetajProsek(studentiSoA);
const prosekBezA = presmetajProsek(studentiBezA);

console.log(`Prosek na studenti chie ime zavrshuva na 'A': ${prosekSoA}`);
console.log(`Prosek na studenti chie ime ne zavrshuva na 'A': ${prosekBezA}`);
