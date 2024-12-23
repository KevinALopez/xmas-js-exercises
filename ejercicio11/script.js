function getMultiplesOf(number, n = 10) {
    const multiples = [];

    for (let i = 1; i <= n; i++) {
        multiples.push(i * number);
    }

    return multiples;
}

function getSumOfNumArr(numArr) {
    return numArr.reduce((sum, num) => sum + num, 0);
}

function createTextHtmlElement(tagName, content) {
    const htmlElement = document.createElement(tagName);
    htmlElement.textContent = content;

    return htmlElement;
}

function createUlElement(list) {
    const ul = document.createElement("ul");

    list.forEach((element) =>
        ul.appendChild(createTextHtmlElement("li", element))
    );

    return ul;
}

const body = document.querySelector("body");

const number = Number(prompt("Introduce un numero."));
const multiples = getMultiplesOf(number);
const sumOfMultiples = getSumOfNumArr(multiples);

const h1 = createTextHtmlElement(
    "h1",
    `The sum of multiples of ${number} is ${sumOfMultiples}`
);
const p = createTextHtmlElement("p", `Multiples of ${number}:`);
const ul = createUlElement(multiples);

body.appendChild(h1);
body.appendChild(p);
body.appendChild(ul);
