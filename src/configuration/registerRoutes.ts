  

import authRoutes from "../routes/auth"; 
import buddyRoutes from "../routes/buddy"; 
import productRoutes from "../routes/product"; 

export default function registerRoutes( app ) { 
    authRoutes(app)
    buddyRoutes(app) 
    productRoutes(app) 
}