/* eslint-disable import/no-unresolved */
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";
// eslint-disable-next-line import-helpers/order-imports
import { Category } from "../model/Category";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoriesRepository };
