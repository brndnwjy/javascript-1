const check = (val) => {
  return Number.isInteger(val);
};

const range = (subject) => {
  if (subject > 100 || subject < 0) {
    return false;
  }
  return true;
};

const grading = (bahasa, bing, mtk, ipa) => {
  if (!bahasa || !bing || !mtk || !ipa) {
    return console.log("Harap lengkapi nilai");
  }

  if (!check(bahasa) || !check(bing) || !check(mtk) || !check(ipa)) {
    return console.log("Pastikan nilai bertipe number");
  }

  if (!range(bahasa) || !range(bing) || !range(mtk) || !range(ipa)) {
    return console.log("Pastikan nilai di antara 0 - 100");
  }

  const mean = (bahasa + bing + mtk + ipa) / 4;
  const grade =
    mean >= 90
      ? "A"
      : mean >= 80
      ? "B"
      : mean >= 70
      ? "C"
      : mean >= 60
      ? "D"
      : "E";
  console.log(`Rata-rata : ${mean}
Grade     : ${grade}`);
};

let nilaiBahasa = 90;
let nilaiBing = 80;
let nilaiMTK = 70;
let nilaiIPA = 80;

grading(nilaiBahasa, nilaiBing, nilaiMTK, nilaiIPA);
