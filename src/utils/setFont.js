

/**
 *设置根元素的字体大小
 */
export default function setFontSize(){
    let designWidth = 750;  // 设计稿宽度 
    // 跟元素的字体大小 = 设备视口宽度 / 设计稿宽度 * 100
    html.style.fontSize = html.clientWidth / designWidth * 100 + "px";
}