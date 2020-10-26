const eventHub = document.querySelector("#state-fair")
const targetContent = document.querySelector(".sideshow")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", sideshowTicketButtonClicked => {
        targetContent.innerHTML +=
        `
        <div class="person gawker"></div>
        `
    })
}