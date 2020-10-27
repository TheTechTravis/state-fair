const eventHub = document.querySelector("#state-fair")
const targetContent = document.querySelector(".fullPackage")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageTicketButtonClicked => {
        targetContent.innerHTML +=
        `
        <div class="person bigSpender"></div>
        `
    })
}