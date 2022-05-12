#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const process_1 = require("process");
if (process_1.platform === "win32") {
    throw new Error("The script is not support on window");
}
child_process_1.default.exec("lsof -i -P -n | grep LISTEN", (__, stdout) => {
    console.log(stdout);
});
//# sourceMappingURL=index.js.map