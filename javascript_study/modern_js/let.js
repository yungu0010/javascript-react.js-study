var list = document.querySelectorAll("li");
for(var i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        console.log(i + "번째 리스트 입니다"); 
        //i값은 callback밖에 있는 값을 참조, i는 closure변수
    });
}