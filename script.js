const container = document.querySelector(".container")

const header = document.getElementsByTagName("header");

async function scrollAnimation(){

    const pages = document.querySelectorAll("[data-page]");

    if(container.scrollTop == 0*window.innerHeight){
        pages[0].classList.add("anima-center")
    }else{
        pages[0].classList.remove("anima-center")
    }

    if(container.scrollTop == 1*window.innerHeight){
        pages[1].classList.add("anima-center")
    }else{
        pages[1].classList.remove("anima-center")
    }

    if(container.scrollTop == 2*window.innerHeight){
        pages[2].classList.add("anima-center")
    }else{
        pages[2].classList.remove("anima-center")
    }

    if(container.scrollTop == 3*window.innerHeight){
        pages[3].classList.add("anima-center")
    }else{
        pages[3].classList.remove("anima-center")
    }

    if(container.scrollTop == 4*window.innerHeight){
        pages[4].classList.add("anima-center")
    }else{
        pages[4].classList.remove("anima-center")
    }

}

scrollAnimation()

container.addEventListener("scroll", () => {
    setTimeout(scrollAnimation, 400)
})

header[0].addEventListener("mouseover", () => {
    header[0].classList.add("show-nav")
})

header[0].addEventListener("mouseout", () => {
    header[0].classList.remove("show-nav")
})