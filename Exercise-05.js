let star = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

//Ham hien thi chom sao tuong ung voi ngoi sao
function giveConstellation(nameStar) {
    for (let i = 0; i < star.length; i++) {
        if (star[i] == nameStar) {
            nameConstellation = constellation[i];
            return nameConstellation;
        }
    }
    return -1;
}

function displayStar() {
    a = prompt("Enter name of a star");
    b = giveConstellation(a);
    if (b !== -1) {
        document.write("The star " + a + " belong to " + b);
    } else {
        document.write("Làm gì có sao mà tìm");
    }
}

displayStar();