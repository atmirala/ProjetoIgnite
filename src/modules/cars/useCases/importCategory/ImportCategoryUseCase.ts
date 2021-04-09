/* eslint-disable import/no-unresolved */
import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
