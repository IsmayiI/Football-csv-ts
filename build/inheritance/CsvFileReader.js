"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(csvFileName) {
        this.csvFileName = csvFileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.csvFileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.default = CsvFileReader;
