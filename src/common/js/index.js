// 自适应大小，使用rem为单位
(function (doc, win) {
    var docEl = doc.documentElement;
    // 手机旋转处理宽高
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = clientWidth / 3.75 + 'px'; 
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
// DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源
})(document, window);
