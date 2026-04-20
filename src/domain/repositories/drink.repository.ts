import type { Drink, DrinkCategory, DrinkCategoryChip } from "@/domain/models/drink.model";

/**
 * Abstract contract for drink data access.
 * Infrastructure services implement this interface.
 */
export interface DrinkRepository {
  /** Retrieve all catalog drinks. */
  getAll(): Promise<Drink[]>;

  /** Retrieve a single drink by its ID, or undefined if not found. */
  getById(id: number): Promise<Drink | undefined>;

  /** Retrieve all drinks belonging to a specific category. */
  getByCategory(category: DrinkCategory): Promise<Drink[]>;

  /** Retrieve the popular/featured drinks list. */
  getPopular(): Promise<Drink[]>;

  /** Retrieve available category chips for the filter bar. */
  getCategories(): Promise<DrinkCategoryChip[]>;
}
