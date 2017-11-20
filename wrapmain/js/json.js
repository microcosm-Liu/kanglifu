var actionImages = [{"img":"actionImg/img1.png","url":"http://mp.weixin.qq.com/s/D3kuzPd0oo-DnuGeni6RqQ"},
                    {"img":"actionImg/img2.png","url":"http://mp.weixin.qq.com/s/xEHwqC0abM4TVZRTJaKy6A"}];

 var imgs = $(".questionImg");
var list = [];
var htmls = "";
for (var i = 0; i < actionImages.length; i++) {
    list.push("<li><a href=");
    list.push(actionImages[i].url);
    list.push("><img src=");
    list.push(actionImages[i].img);
    list.push(" alt=''></a></li>");
}
htmls = list.join("");
imgs.html(htmls);