<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { Drink } from '@/domain/models/drink.model'
import { formatPrice } from '@/application/utils/formatPrice'
import { useCartStore } from '@/stores/cart'
import { createDrinkRepository } from '@/infrastructure'
import TopBar from '@/presentation/layouts/TopBar/TopBar.vue'
import AppFooter from '@/presentation/layouts/AppFooter/AppFooter.vue'
import BottleSvg from '@/presentation/components/BottleSvg/BottleSvg.vue'
import {
  Page, Content, BottleColumn, InfoColumn,
  BackLink, CategoryBadge, ProductTitle, ProductDesc,
  InfoGrid, InfoItem, InfoLabel, InfoValue,
  TastingSection, TastingRow, TastingLabel, TastingText,
  PriceRow, PriceMain, PriceOld, DiscountTag,
  ServeTip, ServeLabel, AddToCartBtn
} from './ProductPage.styles'

/**
 * Product detail page showing full drink information.
 */
const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const repo = createDrinkRepository()
const drink = ref<Drink | null>(null)

onMounted(async () => {
  const id = Number(route.params.id)
  const found = await repo.getById(id)
  if (!found) {
    router.replace({ name: 'home' })
    return
  }
  drink.value = found
})

function goBack() {
  router.back()
}

function addToCart() {
  if (drink.value) {
    const d = drink.value
    cart.addItem(d.id, d.name, d.price, d.color, d.stroke, d.category)
  }
}
</script>

<template>
  <Page v-if="drink">
    <TopBar />

    <Content>
      <!-- Bottle display -->
      <BottleColumn>
        <BottleSvg
          :color="drink.color"
          :stroke="drink.stroke"
          :label="drink.category.toUpperCase().slice(0, 4)"
          :width="180"
          :height="360"
        />
      </BottleColumn>

      <!-- Product info -->
      <InfoColumn>
        <CategoryBadge>{{ drink.category }} &middot; {{ drink.origin }}</CategoryBadge>
        <ProductTitle>{{ drink.name }}</ProductTitle>
        <ProductDesc>{{ drink.description }}</ProductDesc>

        <!-- Quick specs -->
        <InfoGrid>
          <InfoItem>
            <InfoLabel>ABV</InfoLabel>
            <InfoValue>{{ drink.abv }}%</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Volumen</InfoLabel>
            <InfoValue>{{ drink.volume }}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Origen</InfoLabel>
            <InfoValue>{{ drink.origin }}</InfoValue>
          </InfoItem>
        </InfoGrid>

        <!-- Tasting notes -->
        <TastingSection>
          <TastingRow>
            <TastingLabel>Aroma</TastingLabel>
            <TastingText>{{ drink.tasting.aroma }}</TastingText>
          </TastingRow>
          <TastingRow>
            <TastingLabel>Paladar</TastingLabel>
            <TastingText>{{ drink.tasting.palate }}</TastingText>
          </TastingRow>
          <TastingRow>
            <TastingLabel>Final</TastingLabel>
            <TastingText>{{ drink.tasting.finish }}</TastingText>
          </TastingRow>
        </TastingSection>

        <!-- Serve suggestion -->
        <ServeTip>
          <ServeLabel>Como servirlo</ServeLabel>
          {{ drink.serve }}
        </ServeTip>

        <!-- Price + CTA -->
        <PriceRow>
          <PriceMain>{{ formatPrice(drink.price) }}</PriceMain>
          <PriceOld v-if="drink.oldPrice">{{ formatPrice(drink.oldPrice) }}</PriceOld>
          <DiscountTag v-if="drink.discount">-{{ drink.discount }}%</DiscountTag>
        </PriceRow>

        <AddToCartBtn @click="addToCart">Agregar al carrito</AddToCartBtn>
      </InfoColumn>
    </Content>

    <AppFooter />
  </Page>
</template>
