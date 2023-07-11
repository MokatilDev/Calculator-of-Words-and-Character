const input = document.querySelector("textarea")
const Words = document.querySelector("#Words")
const Chars = document.querySelector("#Chars")


input.addEventListener("input" , () =>{
    if(input.value.trim() === ""){
        Words.textContent = 0
        Chars.textContent = 0
        Words.classList.remove("active")
        Chars.classList.remove("active")
        return false;
    }

    Chars.textContent = input.value.length


    let text = input.value.split(" ").length
    Words.textContent = text

    if(Chars.textContent != "0"){
        Words.classList.add("active")
        Chars.classList.add("active")

    }
    

})