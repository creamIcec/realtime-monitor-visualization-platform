const defaultInterval = 0.0000001;

function getInterpolatedPoints(point1, point2){
    const deltaX = point2.longitude - point1.longitude;
    const deltaY = point2.latitude - point1.latitude;
    const angle = Math.atan2(deltaY, deltaX);
    const sinAngle = Math.sin(angle);
    const cosAngle = Math.cos(angle);
    const distance = Math.sqrt((deltaX * deltaX + deltaY * deltaY));
    const interval = distance === 0 ?  defaultInterval : getInterval(distance);
    const parts = Math.floor(distance / interval);
    const timeInterval = Math.abs((point1.time - point2.time) / parts);
    const result = [];
    for(let i = 0; i <= parts; i++){
        result.push({"longitude": point1.longitude * 1 + cosAngle * i * interval, "latitude": point1.latitude * 1 + sinAngle * i * interval, "rotation": point1.rotation, "time": point1.time * 1 + i * timeInterval});
        //console.log(result);
    }
    return result;    //TODO: 使用大圆弧线实现更准确的距离测算
}

function getInterval(distance){
    const digitParts = distance.toString().split(".");
    let digits = [];
    for(let i of digitParts[1]){
        if(i == "0" || i == 0){
            digits.push("0");
        }else break;
    }
    digits.push("0");
    return ("0." + digits.join("") + "1") * 1;
}

export default{
    getInterpolatedPoints
}