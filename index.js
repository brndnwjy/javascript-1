// Variabel dan Tipe Data
tipeDataString = "Javascript";
var tipeDataNumber = 31;
var tipeDataBoolean = true;
let tipeDataNull = null;
let tipeDataUndefined;
const tipeDataArray = [31, "Agustus", 2022, true];
const tipeDataObject = {
  bahasa: "Javascript",
  framework: "VSCode",
};

// Kondisional
let umur = 8;

if (umur < 17) {
  console.log("Anak di bawah umur dilarang masuk!");
} else if (umur > 65) {
  console.log("Lansia dilarang masuk!!");
} else {
  console.log("Silahkan datang di Kasino Jaya Abadi");
}

umur < 17
  ? "Anak di bawah umur dilarang masuk!"
  : umur > 65
  ? "Lansia dilarang masuk!!"
  : "Silahkan datang di Kasino Jaya Abadi";


let grade = "B";

switch (grade) {
  case "A":
    console.log("Lulus Sempurna");
    break;
  case "B":
    console.log("Lulus");
    break;
  case "C":
    console.log("Harap melaksanakan remedial");
    break;
  case "D":
    console.log("Semester diperpanjang");
    break;
  case "E":
    console.log("Tidak lulus semester");
    break;
  default:
    console.log("Inputan salah");
    break;
}

// Perulangan
for(let i = 0; i <= 10; i++){
    console.log(i ** 2)
}

let j = 1
while(j <= 10){
    console.log(j ** 3)
    j++
}

let k = 10
do {
    console.log(k)
    k = k + 10
} while (k <= 100);

// String Literal dan Destructuring
const kelas = ["12A", "12B", "12C"]
const guru = [
    {
        nama: "Pak Rudi",
        mapel: "Matematika"
    },
    {
        nama: "Bu Sihar",
        mapel: "Seni Budaya"
    },
    {
        nama: "Pak Toro",
        mapel: "Pendidikan Agama"
    }
]

const kelasBudi = kelas[2]
const [kelasAndi] = kelas

const guruMTK = guru[0].nama
const {nama : guruAgama, mapel} = guru[2] 

console.log(guruMTK + " sedang mengajar di " + kelasBudi)
console.log(`${guruAgama} sedang mengambil nilai uprak ${mapel} di ${kelasAndi}`)

// Spread Operator
const data = {
    nama: "Brandon Wijaya",
    umur: 18,
    status : "lajang",
    kewarganegaraan: "Indonesia"
}

const dataTerbaru = {
    ...data,
    umur: 21,
    jenisKelamin: "Laki-laki",
    pendidikanTerakhir: "SMA"
}

console.log(dataTerbaru)
