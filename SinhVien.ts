// Class in TS
class SinhVien {
    private hoTen: string
    public lop:string
    // Dat ? neu ko can cung dc
    constructor(hoTen: string, lop?:string){
        this.hoTen = hoTen;
        this.lop= lop;
    }

    // Bao mat thong tin dung get/set
    public setHoTen (value:string){
        this.hoTen = value;
    }

    public XuatThongTin () {
        console.log(`Ho ten: ${this.hoTen}, lop: ${this.lop}`);
    }

    static GioiThieu(){
        console.log("Gioithieu");
    }
}

const sv = new SinhVien("Hai");
//console.log(`sv.hoTen : ${sv.hoTen}`);

sv.setHoTen("EMY");

console.log(sv.XuatThongTin());
