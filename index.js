// alert('haha')

var divbtns = document.querySelector('.title')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')

var main = document.querySelector('.main-boody')


btn1.onclick = function() {
    console.log('现在是粉色');
}


btn2.onclick = function() {
    console.log('现在是白色');
    mainb.style.backgroudColor = "white";
    // document.body.style.backgroundImage = 'url(' + ".. / 01 / white.png" + ')';
    // main - boody.backgroundImage = url(".. / 01 / pink.png")
    // main.backgroundImage = url(".. / 01 / white.png")
    // btn2.setAttribute('')
}

btn3.onclick = function() {
        console.log('现在是黑色');
    }
    // for (var i = 0; i < btns.length; i++) {
    //     divbtns.onclick = function() {
    //         console.log(btns[i]);
    //         // document.body.style.backgroundImage = 'url(' + this.src + ')';
    //     }
    // }