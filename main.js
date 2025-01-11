function toggleMenu() {
    let x = document.getElementById("navbar");
    if (x.className === "nav-items") {
        x.className += " responsive";
    } else {
        x.className = "nav-items"
    }
}

function sum(a, b){
    return a+b;
}

console.log(sum(3, 5));