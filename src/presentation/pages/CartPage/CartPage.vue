<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/application/utils/formatPrice'
import TopBar from '@/presentation/layouts/TopBar/TopBar.vue'
import AppFooter from '@/presentation/layouts/AppFooter/AppFooter.vue'
import BottleSvg from '@/presentation/components/BottleSvg/BottleSvg.vue'
import {
  Page, Content, Title,
  ItemCard, ItemThumb, ItemDetails, ItemName, ItemPrice,
  QtyControls, QtyBtn, QtyValue, ItemSubtotal, RemoveBtn,
  Summary, SummaryRow, SummaryLabel, SummaryValue,
  Actions, ClearBtn, CheckoutBtn,
  EmptyState, BackLink
} from './CartPage.styles'

/**
 * Full cart page with item management and checkout.
 */
const cart = useCartStore()
const router = useRouter()

function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <Page>
    <TopBar />

    <Content>
      <Title>Mi Carrito</Title>

      <template v-if="cart.items.length > 0">
        <ItemCard v-for="item in cart.items" :key="item.drinkId">
          <ItemThumb>
            <BottleSvg
              :color="item.color ?? '#666'"
              :stroke="item.stroke ?? '#999'"
              :label="(item.category ?? '').toUpperCase().slice(0, 4)"
              :width="30"
              :height="56"
            />
          </ItemThumb>
          <ItemDetails>
            <ItemName>{{ item.name }}</ItemName>
            <ItemPrice>{{ formatPrice(item.price) }} c/u</ItemPrice>
          </ItemDetails>
          <QtyControls>
            <QtyBtn @click="cart.updateQuantity(item.drinkId, item.quantity - 1)">-</QtyBtn>
            <QtyValue>{{ item.quantity }}</QtyValue>
            <QtyBtn @click="cart.updateQuantity(item.drinkId, item.quantity + 1)">+</QtyBtn>
          </QtyControls>
          <ItemSubtotal>{{ formatPrice(item.price * item.quantity) }}</ItemSubtotal>
          <RemoveBtn @click="cart.removeItem(item.drinkId)" title="Eliminar">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2 4h10M5 4V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V4M4 4l.5 8h5l.5-8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RemoveBtn>
        </ItemCard>

        <Summary>
          <SummaryRow>
            <SummaryLabel>Total ({{ cart.totalItems }} items)</SummaryLabel>
            <SummaryValue>{{ formatPrice(cart.totalPrice) }}</SummaryValue>
          </SummaryRow>
          <Actions>
            <ClearBtn @click="cart.clearCart()">Vaciar carrito</ClearBtn>
            <CheckoutBtn>Finalizar compra</CheckoutBtn>
          </Actions>
        </Summary>
      </template>

      <EmptyState v-else>
        Tu carrito esta vacio
        <br>
        <BackLink @click="goHome">Explorar catalogo &rarr;</BackLink>
      </EmptyState>
    </Content>

    <AppFooter />
  </Page>
</template>
