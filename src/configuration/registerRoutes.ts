import authRoutes from "../routes/auth"; 
import buddyRoutes from "../routes/buddy";
import buddyInventoryRoutes from "../routes/buddyInventory"; 
import earningRoutes from "../routes/earning";
import productRoutes from "../routes/product"; 
import roleRoutes from "../routes/role";
import teamRoutes from "../routes/team";

export default function registerRoutes( app ) { 
    authRoutes(app)
    buddyRoutes(app)   
    roleRoutes(app) 
    earningRoutes(app);
    teamRoutes(app)
}