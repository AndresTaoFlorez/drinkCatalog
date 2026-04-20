<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animateIn } from './TopBar.animations'
import {
  NavOuter, NavInner, NavSide,
  NavPill, NavIconBtn
} from './TopBar.styles'

/**
 * Sticky top navigation bar with menu, location, search, account, and cart.
 */
const barRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateIn(barRef)
})
</script>

<template>
  <NavOuter ref="barRef">
    <NavInner>
      <!-- Left side: menu + location -->
      <NavSide align="left">
        <NavPill>
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <rect width="14" height="1.5" rx="1" fill="currentColor"/>
            <rect y="5" width="10" height="1.5" rx="1" fill="currentColor"/>
            <rect y="10" width="14" height="1.5" rx="1" fill="currentColor"/>
          </svg>
          Menu
        </NavPill>
        <NavPill>
          <svg width="11" height="15" viewBox="0 0 11 15" fill="none">
            <path d="M5.5 0C2.46 0 0 2.46 0 5.5c0 4.12 5.5 9.5 5.5 9.5S11 9.62 11 5.5C11 2.46 8.54 0 5.5 0Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor"/>
          </svg>
          Bogota
        </NavPill>
      </NavSide>

      <!-- Right side: search, account, cart -->
      <NavSide align="right">
        <NavIconBtn title="Buscar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.5"/>
            <line x1="10.5" y1="10.5" x2="15" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </NavIconBtn>
        <NavIconBtn title="Mi cuenta">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2 14c0-3.31 2.69-5 6-5s6 1.69 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </NavIconBtn>
        <NavIconBtn variant="cart" title="Carrito">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1h2l2 8h7l2-6H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6.5" cy="12.5" r="1" fill="currentColor"/>
            <circle cx="11.5" cy="12.5" r="1" fill="currentColor"/>
          </svg>
        </NavIconBtn>
      </NavSide>
    </NavInner>
  </NavOuter>
</template>
