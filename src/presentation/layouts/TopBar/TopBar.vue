<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { animateIn } from './TopBar.animations'
import { useCartStore } from '@/stores/cart'
import CartPopup from '@/presentation/components/CartPopup/CartPopup.vue'
import {
  NavOuter, NavInner, NavSide,
  NavBtn, NavLabel, CartBadge
} from './TopBar.styles'

/**
 * Sticky top navigation bar with menu, location, search, account, and cart.
 */
const barRef = ref<HTMLElement | null>(null)
const cart = useCartStore()
const showCart = ref(false)
const route = useRoute()
const router = useRouter()
const isHome = computed(() => route.path === '/')

onMounted(() => {
  animateIn(barRef)
})
</script>

<template>
  <NavOuter ref="barRef">
    <NavInner>
      <!-- Left side -->
      <NavSide align="left">
        <NavBtn v-if="!isHome" @click="router.push({ name: 'home' })">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <NavLabel>Inicio</NavLabel>
        </NavBtn>
        <NavBtn title="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 5h12M3 9h8M3 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <NavLabel>Menu</NavLabel>
        </NavBtn>
        <NavBtn title="Ubicacion">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5C6.1 1.5 3.75 3.85 3.75 6.75c0 4.5 5.25 9.75 5.25 9.75s5.25-5.25 5.25-9.75c0-2.9-2.35-5.25-5.25-5.25Zm0 7.13a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76Z" fill="currentColor"/>
          </svg>
          <NavLabel>Bogota</NavLabel>
        </NavBtn>
      </NavSide>

      <!-- Right side -->
      <NavSide align="right">
        <NavBtn title="Buscar">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 12l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </NavBtn>
        <NavBtn title="Mi cuenta">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2.5 16.5c0-3.5 2.9-5.5 6.5-5.5s6.5 2 6.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </NavBtn>
        <div style="position:relative">
          <NavBtn :active="showCart || cart.totalItems > 0" title="Carrito" @click.stop="showCart = !showCart">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1.5 1.5h2.25l2.25 9h7.88l2.25-6.75H5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="7.5" cy="14.25" r="1.13" fill="currentColor"/>
              <circle cx="13.13" cy="14.25" r="1.13" fill="currentColor"/>
            </svg>
            <CartBadge v-if="cart.totalItems > 0">{{ cart.totalItems }}</CartBadge>
          </NavBtn>
          <CartPopup v-if="showCart" @close="showCart = false" />
        </div>
      </NavSide>
    </NavInner>
  </NavOuter>
</template>
