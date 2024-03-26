import CsvFileReader from "./CsvFileReader"
import MatchResult from "./MatchResult"
import { dateToString } from "./utils"

type MatchData = [Date, string, string, number, number, MatchResult, string]


class MatchReader extends CsvFileReader<MatchData> {

   mapRow(row: string[]): MatchData {
      return [
         dateToString(row[0]),
         row[1], row[2],
         +row[3], +row[4],
         row[5] as MatchResult,
         row[6]
      ]
   }
}

export default MatchReader