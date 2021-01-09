  

import authRoutes from "../routes/auth"; 
import buddyRoutes from "../routes/buddy"; 

export default function registerRoutes( app ) { 
    authRoutes(app)
    buddyRoutes(app)  
}