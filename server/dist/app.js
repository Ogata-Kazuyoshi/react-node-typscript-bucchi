"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
}));
const temp = {
    1: 100,
    2: 200,
    3: 300,
};
app.get('/data', (req, res) => {
    req.query.city;
    req.query;
    res.send(temp);
});
app.use(express_1.default.static('./dist/public/'));
app.listen(3000, () => {
    console.log('server is runnign');
});
