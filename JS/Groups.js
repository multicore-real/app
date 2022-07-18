function stopDragGroup(e) {
    let element = document.getElementById(e.id)
    let new_element = element.cloneNode(true);
    element.parentNode.replaceChild(new_element, element)
    element.children[0].style.resize = "both";
}