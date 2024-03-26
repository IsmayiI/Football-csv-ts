
import CsvFileReader from "./CsvFileReader"
import MatchReader from "./MatchReader"
import MatchResult from "./MatchResult"

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)

matchReader.load()

let MUwin = 0

for (let match of matchReader.matches) {
   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      MUwin++
   }
   if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      MUwin++
   }
}

console.log(MUwin)