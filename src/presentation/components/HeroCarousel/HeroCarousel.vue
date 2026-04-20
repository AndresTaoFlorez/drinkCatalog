<script setup lang="ts">
import { useCarousel } from './HeroCarousel.animations'
import {
  HeroOuter, HeroSection, HeroSlide,
  CityBg, HeroContent, HeroEyebrow, HeroH,
  HeroSub, HeroBtn, HeroDots, HeroDot
} from './HeroCarousel.styles'

/**
 * Full-width hero carousel with 3 slides, crossfade transitions,
 * dot navigation, and auto-advance.
 */
const TOTAL_SLIDES = 5
const { current, sectionEl, goTo, next, prev, onPointerDown } = useCarousel(TOTAL_SLIDES)
</script>

<template>
  <HeroOuter>
    <HeroSection ref="sectionEl" @pointerdown="onPointerDown" @dragstart.prevent>

      <!-- Slide 1: Brand -->
      <HeroSlide data-slide>
        <CityBg style="background: url('/bg_1.png') center/cover no-repeat" />
        <HeroContent>
          <HeroEyebrow>Licores Premium de Autor</HeroEyebrow>
          <HeroH>NOCTURNA<br>BOGOTANA</HeroH>
          <HeroSub>Experiencias nocturnas unicas en Bogota.<br>Entrega 24/7 en toda la ciudad.</HeroSub>
          <HeroBtn>Ver Cocteles Destacados &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Slide 2: Discounts -->
      <HeroSlide data-slide>
        <CityBg style="background: url('/bg_2.png') center/cover no-repeat" />
        <HeroContent>
          <HeroEyebrow>Descuentos Esta Semana</HeroEyebrow>
          <HeroH>HASTA<br>50% OFF</HeroH>
          <HeroSub>En los mejores licores importados.<br>Ofertas exclusivas por tiempo limitado.</HeroSub>
          <HeroBtn>Ver Descuentos &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Slide 3: Recipes -->
      <HeroSlide data-slide>
        <CityBg style="background: url('/bg_4.png') center/cover no-repeat" />
        <HeroContent>
          <HeroEyebrow>Recetas de Autor</HeroEyebrow>
          <HeroH>COCTELES<br>SIGNATURE</HeroH>
          <HeroSub>Recetas exclusivas de nuestros bartenders.<br>Crea la experiencia perfecta en casa.</HeroSub>
          <HeroBtn>Ver Recetas &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Slide 4: Delivery -->
      <HeroSlide data-slide>
        <CityBg style="background: url('/bg_5.png') center/cover no-repeat" />
        <HeroContent>
          <HeroEyebrow>Domicilios en Bogota</HeroEyebrow>
          <HeroH>ENTREGA<br>EXPRESS</HeroH>
          <HeroSub>Recibe tus licores favoritos en minutos.<br>Cobertura en toda la ciudad, sin recargo.</HeroSub>
          <HeroBtn>Pedir Ahora &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Slide 5: Nightlife -->
      <HeroSlide data-slide>
        <CityBg style="background: url('/bd_3.png') center/cover no-repeat" />
        <HeroContent>
          <HeroEyebrow>Nuevos Ingresos</HeroEyebrow>
          <HeroH>EDICIONES<br>LIMITADAS</HeroH>
          <HeroSub>Descubre las ultimas novedades en licores<br>importados y ediciones de coleccion.</HeroSub>
          <HeroBtn>Explorar Novedades &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Dot indicators -->
      <HeroDots>
        <HeroDot
          v-for="i in TOTAL_SLIDES"
          :key="i"
          :data-active="i - 1 === current ? '' : undefined"
          @click="goTo(i - 1)"
        />
      </HeroDots>

    </HeroSection>
  </HeroOuter>
</template>
