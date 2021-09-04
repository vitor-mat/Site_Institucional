const container = document.querySelector(".container")

let z = 0;

async function scrollAnimation(){

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

    console.log(z)


    if(container.scrollTop == 0*window.innerHeight){
        pages[z].classList.add("anima-center")
    }else{
        pages[z].classList.remove("anima-center")
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