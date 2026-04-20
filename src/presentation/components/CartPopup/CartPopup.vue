<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/application/utils/formatPrice'
import BottleSvg from '@/presentation/components/BottleSvg/BottleSvg.vue'
import {
  Overlay, Panel, PopupHeader, PopupTitle, CloseBtn,
  ItemsList, CartItemRow, ItemThumb, ItemInfo, ItemName, ItemPrice,
  QtyControls, QtyBtn, QtyValue, RemoveBtn,
  PopupFooter, TotalRow, TotalLabel, TotalValue,
  GoToCartBtn, EmptyText
} from './CartPopup.styles'

/**
 * Floating cart popup showing items, quantities, and total.
 */
const emit = defineEmits<{ close: [] }>()
const cart = useCartStore()
const router = useRouter()

const panelRef = ref<HTMLElement | null>(null)
const overlayRef = ref<HTMLElement | null>(null)
let closing = false

/** Resolve styled component ref to DOM element. */
function resolveEl(r: { value: unknown }): HTMLElement | null {
  const v = r.value as { $el?: HTMLElement } | HTMLElement | null
  if (!v) return null
  if (v instanceof HTMLElement) return v
  if ((v as { $el?: HTMLElement }).$el instanceof HTMLElement)
    return (v as { $el: HTMLElement }).$el
  return null
}

/** Animate in on mount. */
onMounted(() => {
  const panel = resolveEl(panelRef)
  const overlay = resolveEl(overlayRef)
  if (panel) {
    gsap.fromTo(panel,
      { opacity: 0, y: -8, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' },
    )
  }
  if (overlay) {
    gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.2 })
  }
})

/** Animate out then emit close. */
function animateClose() {
  if (closing) return
  closing = true
  const panel = resolveEl(panelRef)
  const overlay = resolveEl(overlayRef)
  const tl = gsap.timeline({
    onComplete: () => emit('close'),
  })
  if (panel) {
    tl.to(panel, { opacity: 0, y: -6, scale: 0.97, duration: 0.2, ease: 'power2.in' }, 0)
  }
  if (overlay) {
    tl.to(overlay, { opacity: 0, duration: 0.15 }, 0)
  }
}

function goToCart() {
  animateClose()
  router.push({ name: 'cart' })
}
</script>

<template>
  <Overlay ref="overlayRef" @click="animateClose" />
  <Panel ref="panelRef" @click.stop>
    <PopupHeader>
      <PopupTitle>Mi Carrito ({{ cart.totalItems }})</PopupTitle>
      <CloseBtn @click="animateClose">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </CloseBtn>
    </PopupHeader>

    <ItemsList v-if="cart.items.length > 0">
      <CartItemRow v-for="item in cart.items" :key="item.drinkId">
        <ItemThumb>
          <BottleSvg
            :color="item.color ?? '#666'"
            :stroke="item.stroke ?? '#999'"
            :label="(item.category ?? '').toUpperCase().slice(0, 4)"
            :width="24"
            :height="48"
          />
        </ItemThumb>
        <ItemInfo>
          <ItemName>{{ item.name }}</ItemName>
          <ItemPrice>{{ formatPrice(item.price) }}</ItemPrice>
        </ItemInfo>
        <QtyControls>
          <QtyBtn @click="cart.updateQuantity(item.drinkId, item.quantity - 1)">-</QtyBtn>
          <QtyValue>{{ item.quantity }}</QtyValue>
          <QtyBtn @click="cart.updateQuantity(item.drinkId, item.quantity + 1)">+</QtyBtn>
        </QtyControls>
        <RemoveBtn @click="cart.removeItem(item.drinkId)">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4h10M5 4V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V4M4 4l.5 8h5l.5-8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RemoveBtn>
      </CartItemRow>
    </ItemsList>

    <EmptyText v-else>Tu carrito esta vacio</EmptyText>

    <PopupFooter v-if="cart.items.length > 0">
      <TotalRow>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>{{ formatPrice(cart.totalPrice) }}</TotalValue>
      </TotalRow>
      <GoToCartBtn @click="goToCart">Ver carrito completo</GoToCartBtn>
    </PopupFooter>
  </Panel>
</template>
