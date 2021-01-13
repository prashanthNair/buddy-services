import { BuddyInventory } from "../models/buddyInventory";

export interface IBuddyInventoryService {
    postBuddyInventory(buddyInventoryData: BuddyInventory); 
}