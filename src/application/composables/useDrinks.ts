import { ref, computed, onMounted } from "vue";
import type { Drink, DrinkCategoryChip } from "@/domain/models/drink.model";
import { createDrinkRepository } from "@/infrastructure";

/**
 * Category preview for the homepage — one representative drink per category.
 */
export interface CategoryPreview {
  id: string;
  label: string;
  count: number;
  preview: Drink;
}

/**
 * Composable providing drinks catalog state and filtering.
 * Acts as the ViewModel for drink-related views.
 */
export function useDrinks() {
  const repo = createDrinkRepository();

  const catalog = ref<Drink[]>([]);
  const popular = ref<Drink[]>([]);
  const categories = ref<DrinkCategoryChip[]>([]);

  /** One representative product per category for the homepage. */
  const categoryPreviews = computed<CategoryPreview[]>(() => {
    return categories.value
      .filter((c) => c.id !== "todos")
      .map((c) => {
        const drinks = catalog.value.filter((d) => d.category === c.id);
        return {
          id: c.id,
          label: c.label,
          count: drinks.length,
          preview: drinks[0],
        };
      })
      .filter((c) => c.preview);
  });

  /** Top 7 cheapest products. */
  const bestPrices = computed(() =>
    [...catalog.value].sort((a, b) => a.price - b.price).slice(0, 7),
  );

  /** Top 7 most popular products. */
  const topPopular = computed(() =>
    [...catalog.value].sort((a, b) => b.popularity - a.popularity).slice(0, 7),
  );

  /** Load all data from the repository on mount. */
  onMounted(async () => {
    const [drinks, pop, cats] = await Promise.all([
      repo.getAll(),
      repo.getPopular(),
      repo.getCategories(),
    ]);
    catalog.value = drinks;
    popular.value = pop;
    categories.value = cats;
  });

  return { catalog, popular, categories, categoryPreviews, bestPrices, topPopular };
}
