import express, { NextFunction, Request, Response } from "express";
import sequelize from "./PostgresDB/pgConfig";
import clientRoutes from "./routes/clientRoutes";
import sowRoutes from "./routes/sowRoutes";
import sowPaymentPlanRoutes from "./routes/sowPaymentPlanRoutes";
import sowPaymentPlanLineItemRoutes from "./routes/sowPaymentPlanLineItemRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import invoiceLineItemRoutes from "./routes/invoiceLineItemRoutes";
import paymentRoutes from "./routes/PaymentRoutes";
import organizationRoutes from "./routes/organizationRoutes";
import creaditionals from "./commons/creaditionals";
import { manipulatePayload } from "./middleware/manipulate";


// import expressLayout from 'express-ejs-layouts'
// import path from "path";

const app = express();
const PORT = creaditionals.App_POrt;



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 

// setting the view Engine
// app.set('view engine', 'ejs');
// app.use(expressLayout);
// app.set('views', path.join(__dirname, '../src/views'));
// app.set('layout', 'layout/main.ejs');
//static files 
// app.use(express.static(path.join(__dirname, '../src/views/css')));





// Routes
app.use("/api/organizations", organizationRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/sows",sowRoutes);
app.use("/api/sow-payment-plans",sowPaymentPlanRoutes);
app.use("/api/sow-payment-plan-line-items",sowPaymentPlanLineItemRoutes);
app.use("/api/invoices",invoiceRoutes);
app.use("/api/invoice-line-items",invoiceLineItemRoutes);
app.use("/api/payments",paymentRoutes);

// app.post("/payload",(req:Request,res:Response)=>{
//   const data=req.body
//   const items=manipulatePayload(data)
// })

// export async function sleep() {
//   setTimeout(()=>{
//       console.log("hello")
//   }),7000
// }


// sleep()

export async function middle(req:Request,res:Response,next:NextFunction) {
  const data=req.body
  try {
    console.log(data);
    next()
  } catch (error) {
    throw error
  }
}


app.use("/",middle,(req:Request,res:Response)=>{
  const data=req.body
  try {
  } catch (error) {
    throw error
  }
})




















// Sync database and start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
