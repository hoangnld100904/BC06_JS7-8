var input = []
function inputAdd(array){
    //function nhận input và xuất ra dãy
    var userInput=parseInt(document.getElementById("userInput").value)
    input.push(userInput)
    var output = document.getElementById("input");
    output.innerHTML=input.join();
}
function bai1(array){
    var arrayLength = array.length;
    var sum=0;
    for (var i=0; i<arrayLength; i++){
        if (array[i]>0){
            sum+=array[i]
        }
    }
    var output = document.getElementById("bai1_output");
    output.innerHTML=sum;
}
function bai2(array){
    var arrayLength = array.length;
    var pos=0;
    for (var i=0; i<arrayLength; i++){
        if (array[i]>0){
            pos+=1;
        }
    }
    var output= document.getElementById("bai2_output")
    output.innerHTML=pos;
}
function bai3(array){
    array.sort(function(a,b){return a-b})//Xắp xếp mảng theo thứ tự tăng dần
    var output = document.getElementById("bai3_output");
    output.innerHTML=array[0]//Số nhỏ nhất là số đầu tiên của mảng
}
function bai4(array){
    array.sort(function(a,b){return a-b})//Xắp xếp mảng theo thứ tự tăng dần
    var output = document.getElementById("bai4_output");
    var arrayLength=array.length;
    for (var i=0; i<arrayLength; i++){//Bắt đầu lọc từng phần tử của mảng
        if (array[i]>0){//Nếu phần tử là số dương đầu tiên bắt gặp của mảng, xuất ra kết quả và kết thúc vòng lặp
            output.innerHTML=array[i];
            break;
        }
    }
}
function bai5(array){
    var arrayLength = array.length;
    var output = document.getElementById("bai5_output");
    for (var i=arrayLength-1; i>=0; i--){//Bắt đầu lọc ngược mảng
        if (array[i] %2==0){
            output.innerHTML=array[i];//Tìm thấy số chẵn, xuất kết quả, kết thúc vòng lặp
            break;
        } else{
            output.innerHTML=-1;//Không tìm thấy số chẵn, xuất ra -1
        }
    }
}
function bai6(array){
    var i = parseInt(document.getElementById("bai6_input1").value) //Lấy vị trí đầu tiên
    var j = parseInt(document.getElementById("bai6_input2").value) //Lấy vị trí thứ 2
    i--; //Trừ 1 phần tử để quy về vị trí của mảng
    j--; //Tương tự
    var tg=0; //Khởi tạo biến trung gian
    tg= array[i];
    array[i]=array[j];
    array[j]=tg;//Tráo đổi giá trị qua biến trung gian
    document.getElementById("bai6_output").innerHTML=array.join(); //Xuất ra chuỗi
}
function bai7(array){
    document.getElementById("bai7_output").innerHTML=array.sort(function(a,b){return a-b}); //Trả lại mảng đã lọc
}
function bai8(array){
    var arrayLength=array.length;
    function primeNumberCheck(a){ //Function kiểm tra số nguyên tố
        var n=0; //Khởi tạo biến đếm
        for (var i=1; i<=a; i++){
            if (a%i==0){
                n+=1; //Đếm xem có bao nhiêu số chia hết cho a
            }
        }
        if (n>2){ //Kiểm tra xem có bao nhiêu số chia hết cho a, nếu là 2 tức a và 1 thì trả về true, còn không là false
            return false;
        } else {
            return true;
        }
    }   
    for (i=0; i<arrayLength; i++) {
        if (array[i]>1){ //Số nguyên tố luôn >1, lọc các số >1 để kiểm tra
            if (primeNumberCheck(array[i])){ //Nếu là số nguyên tố thì ta sẽ xuất ra kết quả
                document.getElementById("bai8_output").innerHTML=array[i];
                return; //Kết thúc hàm sau khi có kết quả
            }
        }
    }
    document.getElementById("bai8_output").innerHTML=-1;
    return; //Xuất ra -1 khi mảng không có số nguyên tố, kết thúc hàm
}
var bai9_array=[];
function inputAdd2(array){
    //function nhận input và xuất ra dãy
    var userInput=parseFloat(document.getElementById("bai9_input").value) //Lấy dữ liệu từ bài 9 Input
    bai9_array.push(userInput)
    var output = document.getElementById("bai9_array");
    output.innerHTML=bai9_array.join();
}
function bai9(array){
    var n=0; //Khởi tạo biến đếm số nguyên
    var arrayLength= array.length;
    for (var i=0; i<arrayLength; i++){
        if (Number.isInteger(array[i])){//Kiểm tra xem có phải số nguyên không
            n+=1; //Nếu đúng biến đếm tăng 1 giá trị
        }
    }
    document.getElementById("bai9_output").innerHTML=n;//Xuất giá trị biến đếm
}
function bai10(array){
    var pos=0//Biến đếm số dương
    var neg=0//Biến đếm số âm
    var arrayLength=array.length;
    for (var i=0; i<arrayLength; i++){//Vòng lặp đếm số âm, dương
        if (array[i]>0){
            pos+=1;
        } else if (array[i]<0){ //Số 0 không phải số âm, không phải số dương nên thêm bộ lọc tránh ảnh hưởng tới kết quả cuối
            neg+=1;
        }
    }
    var output=document.getElementById("bai10_output");
    if (pos > neg) {
        output.innerHTML="Số dương nhiều hơn"
    } else if (pos < neg){
        output.innerHTML="Số âm nhiều hơn"
    } else {
        output.innerHTML="Bằng nhau"
    }
}