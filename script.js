const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(panel => {

    panel.addEventListener("click", () => {


        if (panel.classList.contains("active")){
            removeActive();
        
        } else {
            removeActive();
            panel.classList.add("active");
        }
        
    });

    
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}