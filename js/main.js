 var homePageBtn;
homePageBtn = document.getElementById("toHomePage");

setInterval(function () {
    var randomColor;
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    function getNewColor() {
        var symbols;
        var color;
        var i;
        symbols = "0123456789ABCDEF";
        color = "#";
        i = 0;

        while (i < 6) {
            color = color + symbols[Math.floor(Math.random() * 16)];
            i++;
        }
        homePageBtn.style.color = randomColor;
    }

    getNewColor();
}, 500); 

