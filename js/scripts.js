const toggle = (elementId) => {
    const element = document.getElementById(elementId);

    if (element.classList.contains(elementId + "--open")) {
        element.classList.remove(elementId + "--open")
    } else {
        element.classList.add(elementId + "--open")
    }
}

const toggleNavigation = () => {
    toggle("nav");
    toggle("hamburger-button");
}