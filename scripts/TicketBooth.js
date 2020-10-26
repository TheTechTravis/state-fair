const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".entry")

// Only act if the click is on an element with the id value of "rideTicket"
eventHub.addEventListener("click", ClickEvent => {

    if (ClickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        console.log("You clicked on the button!")
        eventHub.dispatchEvent(rideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket"> Ride Ticket </button>
        </div>
    `
}

