import authRoutes from "../routes/auth"; 
import buddyRoutes from "../routes/buddy";
import buddyInventoryRoutes from "../routes/buddyInventory"; 
import productRoutes from "../routes/product"; 
import roleRoutes from "../routes/role";

export default function registerRoutes( app ) { 
    authRoutes(app)
    buddyRoutes(app) 
    buddyInventoryRoutes(app)
    productRoutes(app)
    roleRoutes(app) 
}