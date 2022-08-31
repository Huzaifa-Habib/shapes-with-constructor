

function Shapes (height, width, radius, background, bLeft, bRight, bTop, bBottom) {
    this.height = height;
    this.width = width;
    this.radius = radius;
    this.background = background;
    this.bLeft = bLeft;
    this.bRight = bRight;
    this.bTop = bTop;
    this.bBottom = bBottom;

}

var square = new Shapes("100px", "100px", null, "teal", null, null, null, null);
var rectangle = new Shapes("100px", "200px", null, "orange", null, null, null, null);
var circle = new Shapes("100px", "100px", "50%", "pink", null, null, null, null);
var triangle = new Shapes("0px", "0px", null, null, "50px solid transparent", "50px solid transparent", null, "100px solid green");





var main = document.getElementById("main");
main.style.display = "flex"
main.style.paddingLeft = "20px"



var squareDiv = document.createElement("div");
squareDiv.style.height = square.height;
squareDiv.style.width = square.width;
squareDiv.style.background = square.background;

var squareDivChildP = document.createElement("p");
var squareDivChildPTxt = document.createTextNode("Square")
squareDivChildP.style.textAlign="center";
squareDivChildP.style.fontWeight = "bold"
squareDiv.style.color = "white";


var rectDiv = document.createElement("div");
rectDiv.style.height = rectangle.height;
rectDiv.style.width = rectangle.width;
rectDiv.style.background = rectangle.background;


var rectDivChildP = document.createElement("p");
var rectDivChildPTxt = document.createTextNode("Rectangle")
rectDivChildP.style.textAlign="center";
rectDivChildP.style.fontWeight = "bold"
rectDiv.style.color = "white";



var circleDiv = document.createElement("div");
circleDiv.style.height = circle.height;
circleDiv.style.width = circle.width;
circleDiv.style.borderRadius = circle.radius;
circleDiv.style.background = circle.background;


var circleDivChildP = document.createElement("p");
var circleDivChildPTxt = document.createTextNode("Circle")
circleDivChildP.style.textAlign="center";
circleDivChildP.style.fontWeight = "bold"
circleDiv.style.color = "white";


var triDiv = document.createElement("div");
triDiv.style.height = triangle.height;
triDiv.style.width = triangle.width;
triDiv.style.borderLeft = triangle.bLeft;
triDiv.style.borderRight = triangle.bRight;
triDiv.style.borderBottom = triangle.bBottom;



main.appendChild(squareDiv)
squareDiv.appendChild(squareDivChildP);
squareDivChildP.appendChild(squareDivChildPTxt)

main.appendChild(rectDiv)
rectDiv.appendChild(rectDivChildP);
rectDivChildP.appendChild(rectDivChildPTxt)



main.appendChild(circleDiv)
circleDiv.appendChild(circleDivChildP);
circleDivChildP.appendChild(circleDivChildPTxt)



main.appendChild(triDiv)


console.log(main)




