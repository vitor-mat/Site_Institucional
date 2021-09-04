document.querySelector(".container").addEventListener("click", () => {
    const pages = document.querySelectorAll("[data-page]");
    pages[0].classList.add("anima-center")
    console.log("clicou")
    console.log(pages[0])
})