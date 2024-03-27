let _headerElement;
let _controlElements;
let _map;

//TODO 修复左右键同时按下的bug

function initDragBehaviour(map, headerElement, controlElements) {

    _headerElement = headerElement;
    _controlElements = controlElements;
    _map = map;

    for (let i = 0; i < controlElements.length; i++) {
        controlElements[i].classList.add("left-buttons-before-animated");
    }

    map.addEventListener("dragstart", dragStartCallback);
    map.addEventListener("dragend", dragEndCallback);
}

function dragStartCallback(e){
    _map.addEventListener("mousedown", () => {console.log("mousedown")});
    _headerElement.classList.remove("head-slide-in");
    _headerElement.classList.remove("header-before-animated");
    _headerElement.classList.add("head-slide-out");
    _headerElement.classList.add("header-after-animated");
    for (let i = 0; i < _controlElements.length; i++) {
        _controlElements[i].classList.remove("left-buttons-before-animated");
        _controlElements[i].classList.remove("slide-in");
        _controlElements[i].classList.add("slide-out");
        _controlElements[i].classList.add("left-buttons-after-animated");
    }
}

function dragEndCallback(){
    _map.enableDragging();
    _headerElement.classList.remove("head-slide-out");
    _headerElement.classList.remove("header-after-animated");
    _headerElement.classList.add("head-slide-in");
    _headerElement.classList.add("header-before-animated");
    for (let i = 0; i < _controlElements.length; i++) {
        _controlElements[i].classList.remove("left-buttons-after-animated");
        _controlElements[i].classList.remove("slide-out");
        _controlElements[i].classList.add("slide-in");
        _controlElements[i].classList.add("left-buttons-before-animated");
    }
}

export default{
    initDragBehaviour
}