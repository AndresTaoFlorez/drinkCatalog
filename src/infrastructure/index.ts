import { LocalDrinkService } from "@/infrastructure/services/local-drink.service";
import type { DrinkRepository } from "@/domain/repositories/drink.repository";

/**
 * Create the drink repository instance for the application.
 * Swap the implementation here when migrating to a real API.
 */
export function createDrinkRepository(): DrinkRepository {
  return new LocalDrinkService();
}
