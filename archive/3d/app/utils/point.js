class Point{
    constructor(longitude, latitude, rotation, time){
        this.longitude = longitude;   //经度
        this.latitude = latitude;    //纬度
        this.time = time;
        this.rotation = rotation;
    }
    getLongitude(){
        return this.longitude;
    }
    getLatitude(){
        return this.latitude;
    }
    getTime(){
        return this.time; 
    }
    getRotation(){
        return this.rotation;
    }
}

export {
    Point
}