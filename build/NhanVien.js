var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NhanVien = /** @class */ (function () {
    function NhanVien(_hoTen) {
        this.hoTen = _hoTen;
    }
    NhanVien.prototype.TinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
// Extend là kế thừa từ Nhân Viên
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(_hoTen, _heSoLuong) {
        var _this = _super.call(this, _hoTen) || this;
        _this.heSoLuong = _heSoLuong;
        return _this;
    }
    // Ghi de override
    GiamDoc.prototype.TinhLuong = function () {
        return _super.prototype.TinhLuong.call(this) * this.heSoLuong;
    };
    GiamDoc.prototype.Hello = function () {
        console.log("Ham khong tra ve");
    };
    return GiamDoc;
}(NhanVien));
var gd = new GiamDoc('BOSS', 2.5);
console.log("gd.TinhLuong()", gd.TinhLuong());
// Tac dung : Class NhanVienThietKe phải có type giong INhanVien (chung thì tạo interface)
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(_hoTen, _tuoi) {
        this.hoTen = _hoTen;
        this.tuoi = _tuoi;
    }
    NhanVienThietKe.prototype.thucHienCongViec = function () {
        console.log("thucHienCongViec");
    };
    ;
    return NhanVienThietKe;
}());
var nvtk = new NhanVienThietKe("Hai", 23);
nvtk.thucHienCongViec();
