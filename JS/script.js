function Change_slaid(){

    
    console.log("Zmienna x: %s", x);
    

}
let number = 2;
function left(){
    number--;
    if(number<1) number=10;
    let pho = '<div style="background-image: url(\'Photo/'+number+'.jpg\');" id="sizePhoto"></div>';
    document.getElementById("Photo").innerHTML = pho;
}
function right(){
    number++;
    if(number>10) number=1;
    let pho = '<div style="background-image: url(\'Photo/'+number+'.jpg\');" id="sizePhoto"></div>';
    document.getElementById("Photo").innerHTML = pho;

}