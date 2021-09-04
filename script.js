const container = document.querySelector(".container")

const pageCount = 0;

function scrollAnimation(){

    const pages = document.querySelectorAll("[data-page]");

    const viewHeight = container.scrollTop + window.innerHeight

    /*
    pages.forEach((e) => {

        if(viewHeight > e.offsetTop){
            e.classList.add("anima-center")
        }else{
            e.classList.remove("anima-center")
        }
    })
    */

    console.log(container.scrollTop)
    console.log(window.innerHeight)

    if(container.scrollTop == 0){
        pages[0].classList.add("anima-center")
    }else{
        pages[0].classList.remove("anima-center")
    }

    if(container.scrollTop == window.innerHeight){
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

container.addEventListener("scroll", scrollAnimation)