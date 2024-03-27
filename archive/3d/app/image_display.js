//TODO 显示检测图像

function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

function renderImage(imageData, imgElement){
    imgElement.src = 'data:image/jpeg;base64,' + btoa(imageData);
}