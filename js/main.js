

function quanLytuyenSinh() {
    var dChuan = document.getElementById("diemChuan").value;
    var d1 = document.getElementById("diem1").value;
    var d2 = document.getElementById("diem2").value;
    var d3 = document.getElementById("diem3").value;
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    var diemTong = 0;


    console.log(d1, d2, d3, dChuan);
    var select = document.getElementById('khuVuc');
    var option = select.options[select.selectedIndex].innerHTML;
    switch (option) {
        case "K":
            diemKhuVuc = 0;
            break;
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        default:
            break;
    }

    var select = document.getElementById('doiTuong');
    var option = select.options[select.selectedIndex].innerHTML;
    switch (option) {
        case "D":
            diemDoiTuong = 0;
            break;
        case "1":
            diemDoiTuong = 2.5;
            break;
        case "2":
            diemDoiTuong = 1.5;
            break;
        case "C":
            diemDoiTuong = 1;
            break;
        default:
            break;
    }

    if (d1 <= 0 || d2 <= 0 || d3 <= 0) {
        document.getElementById("alert1").innerHTML = "Bạn đã rớt do có điểm bé hơn hoặc bằng 0";
    } else if( (diemTong = Number(d1) + Number(d2) + Number(d3) + Number(diemKhuVuc) + Number(diemDoiTuong)) > dChuan){
        document.getElementById("alert1").innerHTML = "Bạn đã đậu " + "Tổng Điểm: " + diemTong;
      }else {
        document.getElementById("alert1").innerHTML = "Bạn đã rớt " + "Tổng Điểm: " + diemTong;
      }
}

document.getElementById("kiemTra").onclick = quanLytuyenSinh;



