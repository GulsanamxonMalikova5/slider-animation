const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const sliderLine = document.querySelector(".slider_wrapper")
const sliderItem = document.querySelectorAll(".slider_item")
let itemLength = sliderItem.length - 1
let itemWidth = sliderItem[0].clientWidth

let offset = 0

next.onclick = () =>{
    offset = offset + itemWidth
    if (offset > (itemWidth * itemLength)) {
        offset = 0
    }
    sliderLine.style = `transform: translateX(-${offset}px);`
}
prev.onclick = () =>{
    offset = offset - itemWidth
    if (offset < 0) {
        offset = (itemWidth * itemLength)
    }
    sliderLine.style = `transform: translateX(-${offset}px);`
}




