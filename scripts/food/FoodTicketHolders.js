const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

// Listen for foodEvent -> Add a div with classes "people" and "food"
export const FoodTicketHolders = () => {
    
    eventHub.addEventListener("foodTicketPurchased", foodTicketButtonClicked => {
        contentTarget.innerHTML +=
        `
        <div class="person eater"></div>
        `
    })
}