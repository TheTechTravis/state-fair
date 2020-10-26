const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".entry")

// MAIN COMPONENT
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket"> Ride Ticket </button>
            <button id="foodTicket"> Food Ticket </button>
        </div>
    `
}

// EVENT LISTENERS START HERE

// Event for when user clicks Ride Ticket button.
eventHub.addEventListener("click", ClickEvent => {

    if (ClickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        console.log("You clicked on the button!")
        eventHub.dispatchEvent(rideEvent)
    }
})

// Event for when user clicks Food Ticket button.
eventHub.addEventListener("click", ClickEvent => {
    
    if (ClickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})