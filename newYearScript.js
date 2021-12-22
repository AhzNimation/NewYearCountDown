const NewYearCountDown = document.getElementById("NYCD");
const HappyNewYear = document.getElementById("HNY");

const y1 = document.getElementById("year1");
const y2 = document.getElementById("year2");

const SeeFireWorkBtn = document.getElementById("SNYFW");

var seeNewYearFireWork = true;

function CountDown() {
  var date = new Date();
  var time = new Date(date.getTime());
  var tahun = time.getFullYear();
  var bulan = time.getMonth() + 1;
  var tanggal = time.getDate();
  var jam = time.getHours();
  var menit = time.getMinutes();
  var detik = time.getSeconds();
  var miliDetik = time.getMilliseconds();

  var tujuanTahun = tahun + 1;
  var tujuanBulan = 1;
  var tujuanTanggal = 1;
  var tujuanJam = 0;
  var tujuanMenit = 0;
  var tujuanDetik = 0;
  var tujuanMD = 0;

  if (((tujuanTahun <= tahun) && (tujuanBulan <= bulan) && (tujuanTanggal <= tanggal) || (bulan == 1)) && (seeNewYearFireWork == true)) {
    NewYearCountDown.classList.add("hide");
    HappyNewYear.classList.remove("hide");
    SeeFireWorkBtn.classList.remove("hide");
  } 
  if ((tujuanTahun <= tahun) && (tujuanBulan <= bulan) && (tujuanTanggal <= tanggal) || (bulan == 1)){
    SeeFireWorkBtn.classList.remove("hide");
  } else {
    SeeFireWorkBtn.classList.add("hide");
  }

  // S... | S = selisih
  var sTahun;
  var sBulan;
  var sTanggal;
  var TanggalMax = bulanf(tahun, bulan);
  var sJam;
  var sMenit;
  var sDetik;
  sTahun = TimeSetV2(tujuanBulan, bulan, 0,sTahun, tujuanTahun, tahun);
  sBulan = TimeSetV2(tujuanTanggal, tanggal, 12, sBulan, tujuanBulan, bulan);
  sTanggal = TimeSetV2(tujuanJam, jam, TanggalMax, sTanggal, tujuanTanggal, tanggal);
  sJam = TimeSetV2(tujuanMenit, menit, 24, sJam, tujuanJam, jam);
  sMenit = TimeSet(tujuanMenit, menit, sMenit, 60);
  sDetik;
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

  y1.innerHTML = tahun;
  y2.innerHTML = tahun;

  document.getElementById("CountDownTxt").innerHTML = sTahunOut + " : " + sBulanOut + " : " + sTanggalOut + " : " + sJamOut + " : " + sMenitOut + " : " + sDetikOut;
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
function TimeSetV2(tujuanNextVal, nextVal, maxNextVal, output, tujuanVal, defaultVar){
  if(tujuanNextVal < nextVal){
    output = tujuanVal + maxNextVal - defaultVar - 1;
  } else if (tujuanNextVal >= nextVal){
    output = tujuanVal - defaultVar;
  } return output;
}
function TimeSet(tujuanVar, defaultVar, output, maxVal) {
  if (tujuanVar <= defaultVar) {
    output = (tujuanVar + maxVal - defaultVar - 1);
  } else {
    output = (tujuanVar - defaultVar);
  } return output;
}
function lessThan(invalue, outvalue) {
  if (invalue < 10) {
    outvalue = "0" + invalue;
  }else if (invalue < 0) {
    outvalue = "00";
  } else {
    outvalue = "" + invalue;
  }
  return outvalue;
}
function back() {
  NewYearCountDown.classList.remove("hide");
  HappyNewYear.classList.add("hide");
  seeNewYearFireWork = false;
}
function seeFireWork() {
    NewYearCountDown.classList.add("hide");
    HappyNewYear.classList.remove("hide");
    seeNewYearFireWork = true;
}
CountDown();



// ! NOT USED
  // var sTahun = tujuanTahun - tahun;
  // var sBulan;
  // sBulan = TimeSet(tujuanBulan, bulan, sBulan, 12);
  // var sTanggal;
  // var TanggalMax = bulanf(tahun, bulan);
  // sTanggal = TimeSet(tujuanTanggal, tanggal, sTanggal, TanggalMax);
  // var sJam;
  // if (tujuanJam < jam) {
  //   sJam = (tujuanJam + 24 - jam - 1);
  // };
  // var sMenit;
  // sMenit = TimeSet(tujuanMenit, menit, sMenit, 60);
  // var sDetik;
  // if (tujuanDetik <= detik) {
  //   sDetik = (tujuanDetik + 60 - detik - 1);
  // }