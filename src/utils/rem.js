/* 
    使用js来规定rem
*/
function font () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
}

font()

/* 当浏览器尺寸发生变化就调用 */ 
window.onresize = font