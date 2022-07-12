function getAreaOfCircle(radius) {
    return (radius * radius * Math.PI);
}

function getCircumferenceOfCircle(radius){
    return (radius + radius);
}

function getAreaOfSquare(side){
    return (side * 4);
}

function getAreaOfTriangle(base, height){
    return (base * height * .5);
}

console.log(getAreaOfTriangle(10, 10));
console.log(getAreaOfSquare(5));
console.log(getCircumferenceOfCircle(15));
console.log(getAreaOfCircle(10));