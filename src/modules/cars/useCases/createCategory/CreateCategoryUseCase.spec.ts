import { AppError } from "@errors/AppError";
import { LocalCategoriesRepository } from "@modules/cars/repositories/local/LocalCategoriesRepository";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let localCategoriesRepository: LocalCategoriesRepository;

describe("Create category", () => {
  beforeEach(() => {
    localCategoriesRepository = new LocalCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      localCategoriesRepository
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await localCategoriesRepository.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with same name", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
