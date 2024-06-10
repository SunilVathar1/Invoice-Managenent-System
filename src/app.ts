import express from "express";
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




// Sync database and start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
