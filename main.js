document.querySelector('button').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
});
