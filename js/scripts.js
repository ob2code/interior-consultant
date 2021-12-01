const toggle = (elementId) => {
    const element = document.getElementById(elementId);
    console.log(element);
    if (element.classList.contains(elementId + "--open")) {
        console.log("remove open");
        element.classList.remove(elementId + "--open")
    } else {
        console.log("add open");
        element.classList.add(elementId + "--open")
    }
}

const toggleNavigation = () => {
    toggle("navigation");
    toggle("hamburger-button");
}