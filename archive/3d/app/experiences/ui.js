window.addEventListener("DOMContentLoaded", () => {
    const signal = document.querySelector("#signal-strength-icon");
    SVGInject(signal);
    const battery = document.querySelector("#battery-level-icon");
    SVGInject(battery);
    const position = document.querySelector("#position-icon");
    SVGInject(position);
    const speedMeter = document.querySelector("#speed-meter-icon");
    SVGInject(speedMeter);
    const user = document.querySelector("#user-icon");
    SVGInject(user);
});