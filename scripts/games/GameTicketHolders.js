const eventHub = document.querySelector("#state-fair")
const targetContent = document.querySelector(".games")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", gameTicketButtonClicked => {
        targetContent.innerHTML +=
        `
        <div class="person player"></div>
        `
    })
}