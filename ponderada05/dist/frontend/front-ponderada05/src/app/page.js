"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_module_css_1 = require("./page.module.css");
const react_1 = require("react");
function Home() {
    return (react_1.default.createElement("div", { className: page_module_css_1.default.div },
        react_1.default.createElement("form", { className: page_module_css_1.default.form },
            react_1.default.createElement("h1", null, "Adicionar m\u00FAsicas"),
            react_1.default.createElement("input", { type: "text", placeholder: "Nome", required: true }),
            react_1.default.createElement("input", { type: "text", placeholder: "Cantor", required: true }),
            react_1.default.createElement("input", { type: "date", placeholder: "Data", required: true }),
            react_1.default.createElement("input", { type: "number", placeholder: "Visualiza\u00E7\u00F5es", required: true }),
            react_1.default.createElement("button", { type: "submit" }, "Adicionar M\u00FAsica"))));
}
exports.default = Home;
//# sourceMappingURL=page.js.map