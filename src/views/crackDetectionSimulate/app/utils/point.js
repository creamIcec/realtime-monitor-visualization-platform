class Point{
    constructor(longitude, latitude, rotation, time, has_crack){
        this.longitude = longitude;   //经度
        this.latitude = latitude;    //纬度
        this.time = time;
        this.rotation = rotation;
        this.has_crack = has_crack;
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
    getHasCrack(){
        return this.has_crack;
    }
}

export {
    Point
}