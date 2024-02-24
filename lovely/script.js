function callRose(link) {
    if(link == "Home") {
        document.getElementById('miniRose1').style.display = "block"
        document.getElementById('home-link').style.color = "red";
    }

    else if(link == "Products") {
        document.getElementById('miniRose2').style.display = "block"
        document.getElementById('products-link').style.color = "red";
    }

    else if(link == "About") {
        document.getElementById('miniRose3').style.display = "block"
        document.getElementById('about-link').style.color = "red";
    }

    else if(link == "Contact") {
        document.getElementById('miniRose4').style.display = "block"
        document.getElementById('contact-link').style.color = "red";
    }
}

function noRose(link) {
    if(link == "Home") {
        document.getElementById('miniRose1').style.display = "none"
        document.getElementById('home-link').style.color = "black";
    }

    else if(link == "Products") {
        document.getElementById('miniRose2').style.display = "none"
        document.getElementById('products-link').style.color = "black";
    }

    else if(link == "About") {
        document.getElementById('miniRose3').style.display = "none"
        document.getElementById('about-link').style.color = "black";
    }

    else if(link == "Contact") {
        document.getElementById('miniRose4').style.display = "none"
        document.getElementById('contact-link').style.color = "black";
    }
}
