<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Drink } from '@/domain/models/drink.model'
import { formatPrice } from '@/application/utils/formatPrice'
import { useCartStore } from '@/stores/cart'
import BottleSvg from '@/presentation/components/BottleSvg/BottleSvg.vue'
import {
  Card, CardBottle, CardBadge,
  CardBody, CardCat, CardName,
  CardPriceRow, CardPrices, CardPrice, CardOldPrice, CardAddBtn
} from './ProductCard.styles'

/**
 * Product card displaying a drink with bottle illustration,
 * category, name, price, and add-to-cart button.
 */
const props = defineProps<{
  /** Drink data to display. */
  drink: Drink;
}>()

const router = useRouter()
const cart = useCartStore()

function goToProduct() {
  router.push({ name: 'product', params: { id: props.drink.id } })
}

function addToCart() {
  cart.addItem(props.drink.id, props.drink.name, props.drink.price, props.drink.color, props.drink.stroke, props.drink.category)
}
</script>

<template>
  <Card @click="goToProduct">
    <CardBadge v-if="drink.discount">{{ drink.discount }}%</CardBadge>
    <CardBottle>
      <BottleSvg
        :color="drink.color"
        :stroke="drink.stroke"
        :label="drink.category.toUpperCase().slice(0, 4)"
      />
    </CardBottle>
    <CardBody>
      <CardCat>{{ drink.category }} &middot; {{ drink.volume }}</CardCat>
      <CardName>{{ drink.name }}</CardName>
      <CardPriceRow>
        <CardPrices>
          <CardPrice>{{ formatPrice(drink.price) }}</CardPrice>
          <CardOldPrice v-if="drink.oldPrice">{{ formatPrice(drink.oldPrice) }}</CardOldPrice>
        </CardPrices>
        <CardAddBtn @click.stop="addToCart" title="Añadir al carrito">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1h2l2 8h7l2-6H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6.5" cy="12.5" r="1" fill="currentColor"/>
            <circle cx="11.5" cy="12.5" r="1" fill="currentColor"/>
          </svg>
        </CardAddBtn>
      </CardPriceRow>
    </CardBody>
  </Card>
</template>
