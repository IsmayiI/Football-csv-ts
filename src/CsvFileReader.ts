import fs from 'fs'

abstract class CsvFileReader<T> {
   data: T[] = []

   constructor(public csvFileName: string) { }

   abstract mapRow(row: string[]): T

   read(): void {
      this.data = fs.readFileSync(this.csvFileName, {
         encoding: 'utf-8'
      })
         .split('\n')
         .map((row: string): string[] => row.split(','))
         .map(this.mapRow)
   }

}

export default CsvFileReader