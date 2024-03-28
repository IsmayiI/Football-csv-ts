"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const MatchReader_1 = __importDefault(require("./MatchReader"));
const Summary_1 = __importDefault(require("./Summary"));
const WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
const ConsoleReport_1 = __importDefault(require("./reportTargets/ConsoleReport"));
const csvFileReader = new CsvFileReader_1.default('football.csv');
const matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
const MUwins = new WinsAnalysis_1.default('Man United');
const report = new ConsoleReport_1.default();
const summary = new Summary_1.default(MUwins, report);
summary.buildAndPrintReport(matchReader.matches);
