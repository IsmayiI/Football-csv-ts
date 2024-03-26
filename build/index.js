"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const MatchReader_1 = __importDefault(require("./MatchReader"));
const MatchResult_1 = __importDefault(require("./MatchResult"));
const csvFileReader = new CsvFileReader_1.default('football.csv');
const matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
let MUwin = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.default.HomeWin) {
        MUwin++;
    }
    if (match[2] === 'Man United' && match[5] === MatchResult_1.default.AwayWin) {
        MUwin++;
    }
}
console.log(MUwin);
