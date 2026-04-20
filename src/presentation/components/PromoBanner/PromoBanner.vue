<script setup lang="ts">
import { Banner, PromoText, PromoEyebrow, PromoH, PromoSub, PromoBtn, PromoGraphic } from './PromoBanner.styles'
import BottleSvg from '@/presentation/components/BottleSvg/BottleSvg.vue'

/**
 * Full-width promotional banner with gradient background
 * and decorative bottle illustrations.
 */
</script>

<template>
  <Banner>
    <PromoText>
      <PromoEyebrow>Descuentos Especiales</PromoEyebrow>
      <PromoH>BUSCAS PRECIOS<br>ESPECIALES?</PromoH>
      <PromoSub>Los mejores precios en licores importados, solo por tiempo limitado.</PromoSub>
      <PromoBtn>VER DESCUENTOS &rarr;</PromoBtn>
    </PromoText>
    <PromoGraphic>
      <BottleSvg color="rgba(251,191,36,0.3)" stroke="#fbbf24" label="RON" :width="80" :height="160" />
      <BottleSvg color="rgba(168,85,247,0.3)" stroke="#c084fc" label="GIN" :width="80" :height="180" />
      <BottleSvg color="rgba(52,211,153,0.25)" stroke="#34d399" label="WHISKY" :width="80" :height="160" />
    </PromoGraphic>
  </Banner>
</template>
