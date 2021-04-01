Array.prototype.sample = function () {
    // TODO use Crypto.getRandomValues()
    return this[Math.floor(Math.random() * this.length)];
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeStr(str) {
    strArray = str.split("");
    strArray[0] = strArray[0].toUpperCase();

    return strArray.join("");
}
