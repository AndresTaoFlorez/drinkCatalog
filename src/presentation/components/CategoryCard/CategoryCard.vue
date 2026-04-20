<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Drink } from '@/domain/models/drink.model'
import BottleSvg from '@/presentation/components/BottleSvg/BottleSvg.vue'
import { Card, CardBottle, CardTitle, CardCount } from './CategoryCard.styles'

/**
 * Category preview card showing a representative product.
 * Navigates to the full category catalog on click.
 */
const props = defineProps<{
  categoryId: string
  label: string
  count: number
  preview: Drink
}>()

const router = useRouter()

function goToCatalog() {
  router.push({ name: 'catalog', params: { category: props.categoryId } })
}
</script>

<template>
  <Card @click="goToCatalog">
    <CardBottle>
      <BottleSvg
        :color="preview.color"
        :stroke="preview.stroke"
        :label="categoryId.toUpperCase().slice(0, 4)"
        :width="50"
        :height="110"
      />
    </CardBottle>
    <CardTitle>{{ label }}</CardTitle>
    <CardCount>{{ count }} {{ count === 1 ? 'producto' : 'productos' }}</CardCount>
  </Card>
</template>
