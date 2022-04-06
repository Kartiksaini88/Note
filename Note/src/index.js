document.getElementById("note").addEventListener("click",takenote)
import "./index.css"
import pic from "./img.jpg"

function takenote(){
    let input = document.getElementById("note_input").value
    
   let h2 = document.getElementById("h2")
   h2.append(input)
   h2.classList.add("text-color")
}

let img = document.createElement("img")
img.classList.add("logo")
img.src =pic

document.getElementById("img").append(img)
