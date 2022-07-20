function tinhTienDien(){
    var name = document.getElementById("ten").value;
    console.log(name)
    var kw = document.getElementById("kw").value;
    console.log(kw)
    var kwDau = 50;
    var kwhai = 50;
    var kwBa = 100;
    var kwBon = 150;
    var tienDienTren50 = 0;
    var tienDienTren100 = 0;
    var tienDienTren200 = 0;
    var tienDienTren350 = 0;
    

    if(kw <= 50){
        document.getElementById("alert2").innerHTML = "họ tên: " + name + " Tiền điện: " + (Number(kw) * 500 ) + " VND";
    }else if(kw > 50 && kw <= 100){
        tienDienTren50 = (Number(kwDau) * 500 ) + ((Number(kw) - 50) * 650);
        document.getElementById("alert2").innerHTML = "họ tên: " + name + " Tiền điện: " + tienDienTren50 + " VND";
    }else if (kw > 100 && kw <= 200){
      tienDienTren100 =  (Number(kwDau) * 500 ) + (Number(kwhai) * 650) + ((Number(kw) - 100) * 850 ); 
      document.getElementById("alert2").innerHTML = "họ tên: " + name + " Tiền điện: " + tienDienTren100 + " VND";
    }else if (kw > 200  && kw <= 350){
        tienDienTren200 = (Number(kwDau) * 500 ) + (Number(kwhai) * 650) + ((Number(kwBa)) * 850 ) + ((Number(kw) - 200) * 1100 ); 
        document.getElementById("alert2").innerHTML = "họ tên: " + name + " Tiền điện: " + tienDienTren200 + " VND";
    }else if(kw > 350){
        tienDienTren350 = (Number(kwDau) * 500 ) + (Number(kwhai) * 650) + ((Number(kwBa)) * 850 ) + (Number(kwBon) * 1100 ) + ((Number(kw) - 350) * 1300); 
        document.getElementById("alert2").innerHTML = "họ tên: " + name + " Tiền điện: " + tienDienTren350 + " VND";
    }


}

document.getElementById("tinhTien").onclick = tinhTienDien;