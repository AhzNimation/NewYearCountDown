const NewYearCountDown = document.getElementById("NYCD");
const HappyNewYear = document.getElementById("HNY");

function CountDown() {
  var date = new Date();
  var time = new Date(date.getTime());
  var tahun = time.getFullYear();
  var bulan = time.getMonth() + 1;
  var tanggal = time.getDate();
  var jam = time.getHours();
  var menit = time.getMinutes();
  var detik = time.getSeconds();

  if (tahun == tujuanTahun){
    NewYearCountDown.classList.add("hide");
    HappyNewYear.classList.remove("hide");
  }

  var tujuanTahun = tahun + 1;
  var tujuanBulan = 1;
  var tujuanTanggal = 1;
  var tujuanJam = 0;
  var tujuanMenit = 0;
  var tujuanDetik = 0;

  // S... | S = selisih
  var sTahun = tujuanTahun - tahun - 1;
  var sBulan;
  sBulan = TimeSet(tujuanBulan, bulan, sBulan, 12);
  var sTanggal;
  var TanggalMax = bulanf(tahun, bulan);
  sTanggal = TimeSet(tujuanTanggal, tanggal, sTanggal, TanggalMax);
  var sJam;
  if (tujuanJam < jam) {
    sJam = (tujuanJam + 24 - jam - 1);
  };
  var sMenit;
  sMenit = TimeSet(tujuanMenit, menit, sMenit, 60);
  var sDetik;
  if (tujuanDetik <= detik) {
    sDetik = (tujuanDetik + 60 - detik - 1);
  }

  var sTahunOut;
  var sBulanOut;
  var sTanggalOut;
  var sJamOut;
  var sMenitOut;
  var sDetikOut;
  sTahunOut = lessThan(sTahun, sTahunOut);
  sBulanOut = lessThan(sBulan, sBulanOut);
  sTanggalOut = lessThan(sTanggal, sTanggalOut);
  sJamOut = lessThan(sJam, sJamOut);
  sMenitOut = lessThan(sMenit, sMenitOut);
  sDetikOut = lessThan(sDetik, sDetikOut);

  document.getElementById("year").textContent = tahun;
  document.getElementById("CountDownTxt").textContent = sTahunOut + ":" + sBulanOut + ":" + sTanggalOut + ":" + sJamOut + ":" + sMenitOut + ":" + sDetikOut;
  setTimeout(CountDown, 1000);
}
function bulanf(tahun, bulan) {
  var leapYearCheck = tahun % 4;
  var maxTanggal;
  if ((bulan == 1) || (bulan == 3) || (bulan == 5) || (bulan == 7) || (bulan == 8) || (bulan == 10) || (bulan == 12)) {
    maxTanggal = 31;
  } else if ((bulan == 4) || (bulan == 6) || (bulan == 9) || (bulan == 11)) {
    maxTanggal = 31;
  } else if ((leapYearCheck = 0) && (bulan = 2)) {
    maxTanggal = 29;
  } else if ((leapYearCheck != 0) && (bulan = 2)) {
    maxTanggal = 28;
  }
  return maxTanggal;
}
function TimeSet(tujuanVar, defaultVar, output, maxVal) {
  if (tujuanVar < defaultVar) {
    output = (tujuanVar + maxVal - defaultVar - 1);
  } else {
    output = (tujuanVar - defaultVar);
  } return output;
}
function lessThan(invalue, outvalue) {
  if (invalue < 10) {
    outvalue = "0" + invalue;
  } else {
    outvalue = "" + invalue;
  }
  return outvalue;
}
function back() {
  NewYearCountDown.classList.remove("hide");
  HappyNewYear.classList.add("hide");
}
CountDown();
