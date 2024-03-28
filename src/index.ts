
import CsvFileReader from "./CsvFileReader"
import MatchReader from "./MatchReader"
import Summary from "./Summary"
import WinsAnalysis from "./analyzers/WinsAnalysis"
import ConsoleReport from "./reportTargets/ConsoleReport"

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)

matchReader.load()

const MUwins = new WinsAnalysis('Man United')
const report = new ConsoleReport()


const summary = new Summary(MUwins, report)

summary.buildAndPrintReport(matchReader.matches)