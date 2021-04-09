class ImportCategoryUseCase {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { ImportCategoryUseCase };
