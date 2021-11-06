document.querySelector('body').style.backgroundColor = "#FFFFFF";

document.querySelector('button').addEventListener('click', () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
    document.querySelector('body').style.backgroundColor = randomColor;
    document.querySelector('h1').innerText = randomColor.toUpperCase();
});
