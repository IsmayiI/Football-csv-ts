"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
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
    mapRow(row) {
        return [
            (0, utils_1.dateToString)(row[0]),
            row[1], row[2],
            +row[3], +row[4],
            row[5],
            row[6]
        ];
    }
}
exports.default = CsvFileReader;
