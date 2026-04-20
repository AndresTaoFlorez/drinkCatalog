import type { Drink, DrinkCategory, DrinkCategoryChip } from "@/domain/models/drink.model";
import type { DrinkRepository } from "@/domain/repositories/drink.repository";
import { CATALOG_DRINKS, POPULAR_DRINKS, CATEGORIES } from "@/infrastructure/data/drinks.data";

/**
 * Local implementation of DrinkRepository using in-memory mock data.
 * Replace with an API-backed service when the backend is ready.
 */
export class LocalDrinkService implements DrinkRepository {
  /** Retrieve all catalog drinks from the local dataset. */
  async getAll(): Promise<Drink[]> {
    return CATALOG_DRINKS;
  }

  /** Find a drink by ID across all datasets. */
  async getById(id: number): Promise<Drink | undefined> {
    return [...CATALOG_DRINKS, ...POPULAR_DRINKS].find((d) => d.id === id);
  }

  /** Filter catalog drinks by category. */
  async getByCategory(category: DrinkCategory): Promise<Drink[]> {
    return CATALOG_DRINKS.filter((d) => d.category === category);
  }

  /** Retrieve the popular/featured drinks. */
  async getPopular(): Promise<Drink[]> {
    return POPULAR_DRINKS;
  }

  /** Retrieve category chips for the filter bar. */
  async getCategories(): Promise<DrinkCategoryChip[]> {
    return CATEGORIES;
  }
}
