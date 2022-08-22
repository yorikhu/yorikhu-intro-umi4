export function loadImage(
  url: string,
  callback: (img?: HTMLImageElement) => void,
) {
  let img = new Image(); //创建一个Image对象，实现图片的预下载
  img.onload = function () {
    img.onload = null;
    callback(img);
  };
  img.src = url;
}
