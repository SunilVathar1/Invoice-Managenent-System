"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const sowPaymentPlanRoutes_1 = __importDefault(require("./routes/sowPaymentPlanRoutes"));
const sowPaymentPlanLineItemRoutes_1 = __importDefault(require("./routes/sowPaymentPlanLineItemRoutes"));
const invoiceRoutes_1 = __importDefault(require("./routes/invoiceRoutes"));
const invoiceLineItemRoutes_1 = __importDefault(require("./routes/invoiceLineItemRoutes"));
const PaymentRoutes_1 = __importDefault(require("./routes/PaymentRoutes"));
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const creaditionals_1 = __importDefault(require("./commons/creaditionals"));
// import expressLayout from 'express-ejs-layouts'
// import path from "path";
const app = (0, express_1.default)();
const PORT = creaditionals_1.default.App_POrt;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// setting the view Engine
// app.set('view engine', 'ejs');
// app.use(expressLayout);
// app.set('views', path.join(__dirname, '../src/views'));
// app.set('layout', 'layout/main.ejs');
//static files 
// app.use(express.static(path.join(__dirname, '../src/views/css')));
// Routes
app.use("/api/organizations", organizationRoutes_1.default);
app.use("/api/clients", clientRoutes_1.default);
app.use("/api/sows", sowRoutes_1.default);
app.use("/api/sow-payment-plans", sowPaymentPlanRoutes_1.default);
app.use("/api/sow-payment-plan-line-items", sowPaymentPlanLineItemRoutes_1.default);
app.use("/api/invoices", invoiceRoutes_1.default);
app.use("/api/invoice-line-items", invoiceLineItemRoutes_1.default);
app.use("/api/payments", PaymentRoutes_1.default);
// Sync database and start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map