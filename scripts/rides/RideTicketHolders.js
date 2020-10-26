const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

// Listen for rideEvent -> Add a div with classes "person" and "rider"
export const RideTicketHolders = () => {
    
    eventHub.addEventListener("rideTicketPurchased", rideTicketClicked => {
        console.log("You are responding to rideEvent dispatch!")

        contentTarget.innerHTML +=
        `
        <div class="person rider"></div>
        `
    })
}