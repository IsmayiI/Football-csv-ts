
import CsvFileReader from "./CsvFileReader"
import MatchResult from "./MatchResult"

const reader = new CsvFileReader('football.csv')
reader.read()


let MUwin = 0

for (let match of reader.data) {
   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      MUwin++
   }
   if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      MUwin++
   }
}

console.log(MUwin)