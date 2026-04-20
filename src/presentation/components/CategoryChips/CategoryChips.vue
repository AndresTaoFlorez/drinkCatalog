<script setup lang="ts">
import type { DrinkCategoryChip } from '@/domain/models/drink.model'
import { ChipRow, Chip } from './CategoryChips.styles'

/**
 * Horizontal scrollable row of category filter chips.
 * Highlights the active category and emits selection events.
 */
defineProps<{
  /** Available category chips. */
  categories: DrinkCategoryChip[];
  /** Currently active category ID. */
  active: string;
}>()

const emit = defineEmits<{
  /** Fired when a category chip is clicked. */
  select: [categoryId: string];
}>()
</script>

<template>
  <ChipRow>
    <Chip
      v-for="cat in categories"
      :key="cat.id"
      :data-active="cat.id === active ? '' : undefined"
      @click="emit('select', cat.id)"
    >
      {{ cat.label }}
    </Chip>
  </ChipRow>
</template>
