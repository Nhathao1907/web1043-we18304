let a = prompt("Nhập số nguyên a:");
let b = prompt("Nhập số nguyên b:");

// Chuyển đổi kiểu dữ liệu của a và b từ chuỗi sang số nguyên

//cách 1
// a = parseInt(a);
// b = parseInt(b);
// let c = a + b; 

// Tính tổng của a và b

let c = parseInt(a) + parseInt(b);  //cách 2

// Hiển thị kết quả bằng document.write
document.write("Tổng của " + a + " và " + b + " là " + c);

// Hiển thị kết quả bằng console.log
console.log("Tổng của " + a + " và " + b + " là " + c);