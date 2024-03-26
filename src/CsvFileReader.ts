import fs from 'fs'
import { dateToString } from './utils'
import MatchResult from './MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]

class CsvFileReader {
   data: MatchData[] = []

   constructor(public csvFileName: string) { }

   read(): void {
      this.data = fs.readFileSync(this.csvFileName, {
         encoding: 'utf-8'
      })
         .split('\n')
         .map((row: string): string[] => row.split(','))
         .map(this.mapRow)
   }

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

export default CsvFileReader