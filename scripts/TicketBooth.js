const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".entry")

// MAIN COMPONENT
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket"> Ride Ticket </button>
            <button id="foodTicket"> Food Ticket </button>
            <button id="gameTicket"> Game Ticket </button>
            <button id="sideshowTicket"> Sideshow Ticket </button>
            <button id="fullPackageTicket"> Full Package Ticket </button>
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

// Event for when user clicks Game Ticket button.
eventHub.addEventListener("click", ClickEvent => {

    if (ClickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})

// Event for when user clicks Sideshow Ticket button.
eventHub.addEventListener("click", ClickEvent => {
    if (ClickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
})

// Event for when user clicks Full Package Ticket button.
eventHub.addEventListener("click", ClickEvent => {
    if (ClickEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageEvent)
    }
})