"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middle = void 0;
const express_1 = __importDefault(require("express"));
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
// app.use("/api/organizations", organizationRoutes);
// app.use("/api/clients", clientRoutes);
// app.use("/api/sows",sowRoutes);
// app.use("/api/sow-payment-plans",sowPaymentPlanRoutes);
// app.use("/api/sow-payment-plan-line-items",sowPaymentPlanLineItemRoutes);
// app.use("/api/invoices",invoiceRoutes);
// app.use("/api/invoice-line-items",invoiceLineItemRoutes);
// app.use("/api/payments",paymentRoutes);
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
function middle(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            console.log(data);
            next();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.middle = middle;
app.use("/", middle, (req, res) => {
    const data = req.body;
    try {
    }
    catch (error) {
        throw error;
    }
});
// Sync database and start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map