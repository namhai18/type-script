// Class in TS
var SinhVien = /** @class */ (function () {
    // Dat ? neu ko can cung dc
    function SinhVien(hoTen, lop) {
        this.hoTen = hoTen;
        this.lop = lop;
    }
    // Bao mat thong tin dung get/set
    SinhVien.prototype.setHoTen = function (value) {
        this.hoTen = value;
    };
    SinhVien.prototype.XuatThongTin = function () {
        console.log("Ho ten: " + this.hoTen + ", lop: " + this.lop);
    };
    SinhVien.GioiThieu = function () {
        console.log("Gioithieu");
    };
    return SinhVien;
}());
var sv = new SinhVien("Hai");
//console.log(`sv.hoTen : ${sv.hoTen}`);
sv.setHoTen("EMY");
console.log(sv.XuatThongTin());
