function Rectangle(length,width) {
        this.length = length;
        this.width = width;
        this.getLength=function () {
            return this.length;
        };
        this.getWidth=function () {
            return this.width;
        };
        this.getArea =function () {
            return this.length * this.width;
        };
        this.getperimeter=function () {
            return (this.length+this.width)*2;
        };
        this.draw = function () {
            let ctx = document.getElementById("myCanvas").getContext("2d");
            let a = this.length;
            let b = this.width;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(a, 0);
            ctx.stroke();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, a);
            ctx.stroke();
            ctx.moveTo(a , a);
            ctx.lineTo(a, 0);
            ctx.stroke();
            ctx.moveTo(a, b);
            ctx.lineTo(0, b);
            ctx.stroke();

        }
}
let rectangle = new Rectangle(400,400);
    rectangle.draw();
    alert("chieu rong la: "+ rectangle.getWidth());
    alert("chieu dai la: "+rectangle.getLength());
    alert("S=" +rectangle.getArea());
    alert("C=" + rectangle.getperimeter());
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     let red = getRandomHex();
//     let green = getRandomHex();
//     let blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
// function creatRectangle() {
//         let ctx =new Rectangle(50,50);
//         ctx.fillStyle = getRandomColor();
//         ctx.fillRect(1,1,50,50);
// }
// document.getElementById("myCanvas").innerHTML=creatRectangle();

