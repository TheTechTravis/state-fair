// Import and invoke the ticket booth component function

import { FoodTicketHolders } from "./food/FoodTicketHolders.js"
import { FullPackageTicketHolders } from "./fullPackage/FullPackageTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolders.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js"
import { TicketBooth } from "./TicketBooth.js"

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()