{} []
//  fetch("./data.json").then(response => response.json()).then(data =>{
//     console.log(data.projects[0].title)
//  } );


function PopUps() {

    const projectCard = document.querySelectorAll(".Card")
    const popups = document.querySelector(".popups")
    const back = document.querySelector(".back-Pop")

    projectCard.forEach((card) =>{    
        card.addEventListener("click", () => {
        popups.style.display = "flex"

        });
    });
    back.addEventListener("click", () =>{
        popups.style.display = "none"

        } )

}
PopUps();
