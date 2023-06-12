function execute(){
    for(let i = 1; i<100; i++){
        document.write(i);
        if((i%3 == 0)||(i >= 30 && i < 40)||(i % 10 == 3)){
            document.write("アホ<br>");
        }
        else{
            document.write("<br>");
        }
    }
}
