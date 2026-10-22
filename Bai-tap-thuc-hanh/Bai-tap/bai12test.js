function capNhatLich(){
    const ngay = parseInt(document.getElementById('ngay-nhap').value, 10);
    const thang = parseInt(document.getElementById('thang-nhap').value, 10);
    const nam = parseInt(document.getElementById('nam-nhap').value, 10)

    if(isnaN(ngay) || isnaN(thang) || isnaN(nam)){
        alert('Nhập lại các giá trị hợp lệ');
        return;
    }

    const ngayDuocChon=new Date(ngay, thang-1, 1);

    const cacThu=[
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
    'Thứ tám'
];
    

    document.getElementById('hien-thi-nam').innerText = nam;
    document.getElementById('hien-thi-thang').innerText = cacThu[thang-1];
    document.getElementById('hien-thi-ngay').innerText = ngayDuocChon.getDate();
    document.getElementById('hien-thi-thu').innerText = cacThu[ngayDuocChon.getDay()];

    const gioHienTai=new Date().getHours();
    let cauChao='Chào buổi sáng';
    if(gioHienTai>=12 && gioHienTai<=18){
        cauChao='Chào buổi chiều';
    }
    else if(gioHienTai>=18 && gioHienTai<=23){
        cauChao='Chào buổi tối';
    }
    document.getElementById('loi-chao').innerText = cauChao;
}

document.getElementById('btn-in-lich').addEventListener('click', capNhatLich);
window.addEventListener('load', capNhatLich);
