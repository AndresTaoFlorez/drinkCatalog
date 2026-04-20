import { ref, computed, onMounted } from "vue";
import type { Drink, DrinkCategoryChip } from "@/domain/models/drink.model";
import { createDrinkRepository } from "@/infrastructure";

/**
 * Composable providing drinks catalog state and filtering.
 * Acts as the ViewModel for drink-related views.
 */
export function useDrinks() {
  const repo = createDrinkRepository();

  const catalog = ref<Drink[]>([]);
  const popular = ref<Drink[]>([]);
  const categories = ref<DrinkCategoryChip[]>([]);
  const activeFilter = ref("todos");

  /** Catalog drinks filtered by the active category. */
  const filteredCatalog = computed(() => {
    if (activeFilter.value === "todos") return catalog.value;
    return catalog.value.filter((d) => d.category === activeFilter.value);
  });

  /** Set the active category filter. */
  function filterBy(categoryId: string) {
    activeFilter.value = categoryId;
  }

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

  return { catalog, popular, categories, activeFilter, filteredCatalog, filterBy };
}
