interface DataReader {
   read(): void,
   data: string[][]
}

class MatchReader {
   constructor(public reader: DataReader) { }
}

export default MatchReader