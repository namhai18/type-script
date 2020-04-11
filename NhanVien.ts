class NhanVien {
    private hoTen: string
    constructor(_hoTen: string){
        this.hoTen = _hoTen;
    }

    public TinhLuong(){
        return 1000;
    }

}
// Extend là kế thừa từ Nhân Viên
class GiamDoc extends NhanVien{
    private heSoLuong:number
    constructor(_hoTen:string,_heSoLuong:number){
        super(_hoTen)
        this.heSoLuong = _heSoLuong;
    }

    // Ghi de override
    public TinhLuong():number{
        return super.TinhLuong() * this.heSoLuong;
    }

    public Hello(): void {
        console.log("Ham khong tra ve");
    }
}

const gd = new GiamDoc('BOSS',2.5);
console.log("gd.TinhLuong()",gd.TinhLuong());

// @@@ API tra ve thi nen tao interface co item name giong response data
interface INhanVien {
    hoTen: string,
    tuoi: number,
    thucHienCongViec(): void;
}
// Tac dung : Class NhanVienThietKe phải có type giong INhanVien (chung thì tạo interface)
class NhanVienThietKe implements INhanVien {
    hoTen: string;
    tuoi: number;
    constructor(_hoTen:string,_tuoi:number){
        this.hoTen = _hoTen;
        this.tuoi = _tuoi;
    }
    thucHienCongViec(){
        console.log("thucHienCongViec");
    };
}

const nvtk = new NhanVienThietKe("Hai",23);

nvtk.thucHienCongViec();
