import fs from 'fs'

class CsvFileReader {
   data: string[][] = []

   constructor(public csvFileName: string) { }

   read(): void {
      this.data = fs.readFileSync(this.csvFileName, {
         encoding: 'utf-8'
      })
         .split('\n')
         .map((row: string): string[] => row.split(','))
   }
}

export default CsvFileReader