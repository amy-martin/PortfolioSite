const showContent = (id) => {
    const element = document.getElementById(id)
    console.log(element)
    console.log(element.style.display)
    if (element.style.display == 'none') {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
}