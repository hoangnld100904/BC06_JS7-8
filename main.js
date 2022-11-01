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