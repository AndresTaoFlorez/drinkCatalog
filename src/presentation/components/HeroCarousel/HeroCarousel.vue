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
const TOTAL_SLIDES = 3
const { current, sectionEl, goTo, next, prev, onPointerDown } = useCarousel(TOTAL_SLIDES)
</script>

<template>
  <HeroOuter>
    <HeroSection ref="sectionEl" @pointerdown="onPointerDown" @dragstart.prevent>

      <!-- Slide 1: Brand -->
      <HeroSlide data-slide>
        <CityBg>
          <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
            <defs>
              <radialGradient id="glow1" cx="50%" cy="100%" r="50%"><stop offset="0%" stop-color="#7c3aed" stop-opacity="0.3"/><stop offset="100%" stop-color="#0c0a24" stop-opacity="0"/></radialGradient>
              <filter id="neonBlue"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <filter id="neonPink"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <rect width="1440" height="420" fill="url(#glow1)"/>
            <circle cx="900" cy="40" r="1.5" fill="#fff" opacity="0.7"/><circle cx="1100" cy="70" r="1" fill="#fff" opacity="0.5"/><circle cx="1200" cy="30" r="2" fill="#fff" opacity="0.6"/>
            <circle cx="1280" cy="80" r="40" fill="#fbbf24" opacity="0.3"/><circle cx="1300" cy="68" r="34" fill="#0c0a24"/>
            <rect x="600" y="200" width="50" height="220" fill="#0f0c29"/><rect x="655" y="170" width="60" height="250" fill="#0f0c29"/><rect x="720" y="150" width="40" height="270" fill="#12103a"/><rect x="765" y="190" width="70" height="230" fill="#0f0c29"/><rect x="840" y="130" width="45" height="290" fill="#12103a"/><rect x="930" y="200" width="55" height="220" fill="#0f0c29"/><rect x="990" y="140" width="50" height="280" fill="#12103a"/><rect x="1090" y="110" width="60" height="310" fill="#12103a"/><rect x="1205" y="190" width="55" height="230" fill="#0f0c29"/><rect x="1305" y="200" width="70" height="220" fill="#0f0c29"/>
            <line x1="840" y1="130" x2="840" y2="90" stroke="#f472b6" stroke-width="2" filter="url(#neonPink)"/><circle cx="840" cy="90" r="3" fill="#f472b6" filter="url(#neonPink)"/>
            <line x1="720" y1="150" x2="720" y2="420" stroke="#22d3ee" stroke-width="1.5" opacity="0.35" filter="url(#neonBlue)"/>
            <ellipse cx="1000" cy="420" rx="600" ry="60" fill="rgba(124,58,237,0.2)"/>
          </svg>
        </CityBg>
        <HeroContent>
          <HeroEyebrow>Licores Premium de Autor</HeroEyebrow>
          <HeroH>NOCTURNA<br>BOGOTANA</HeroH>
          <HeroSub>Experiencias nocturnas unicas en Bogota.<br>Entrega 24/7 en toda la ciudad.</HeroSub>
          <HeroBtn>Ver Cocteles Destacados &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Slide 2: Discounts -->
      <HeroSlide data-slide>
        <CityBg style="background:linear-gradient(180deg,#0c0a24 0%,#1a0e3a 50%,#0d1a3a 100%)">
          <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
            <defs><radialGradient id="glow2" cx="30%" cy="80%" r="60%"><stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.3"/><stop offset="100%" stop-color="#0c0a24" stop-opacity="0"/></radialGradient></defs>
            <rect width="1440" height="420" fill="url(#glow2)"/>
            <circle cx="200" cy="70" r="1.5" fill="#fff" opacity="0.6"/><circle cx="350" cy="40" r="1" fill="#fff" opacity="0.4"/>
            <rect x="700" y="180" width="60" height="240" fill="#0a091e"/><rect x="765" y="150" width="80" height="270" fill="#0a091e"/><rect x="850" y="120" width="50" height="300" fill="#0d0c28"/><rect x="980" y="140" width="55" height="280" fill="#0d0c28"/><rect x="1110" y="130" width="50" height="290" fill="#0d0c28"/><rect x="1250" y="150" width="60" height="270" fill="#0d0c28"/>
            <line x1="850" y1="120" x2="850" y2="80" stroke="#22d3ee" stroke-width="2" opacity="0.8"/>
            <ellipse cx="1000" cy="420" rx="600" ry="50" fill="rgba(29,78,216,0.15)"/>
          </svg>
        </CityBg>
        <HeroContent>
          <HeroEyebrow>Descuentos Esta Semana</HeroEyebrow>
          <HeroH>HASTA<br>50% OFF</HeroH>
          <HeroSub>En los mejores licores importados.<br>Ofertas exclusivas por tiempo limitado.</HeroSub>
          <HeroBtn>Ver Descuentos &rarr;</HeroBtn>
        </HeroContent>
      </HeroSlide>

      <!-- Slide 3: Recipes -->
      <HeroSlide data-slide>
        <CityBg style="background:linear-gradient(180deg,#0c0a24 0%,#1a0a2e 50%,#0f1520 100%)">
          <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
            <defs><radialGradient id="glow3" cx="60%" cy="70%" r="50%"><stop offset="0%" stop-color="#7c3aed" stop-opacity="0.25"/><stop offset="100%" stop-color="#0c0a24" stop-opacity="0"/></radialGradient></defs>
            <rect width="1440" height="420" fill="url(#glow3)"/>
            <circle cx="1100" cy="50" r="1.5" fill="#fff" opacity="0.7"/><circle cx="1350" cy="70" r="2" fill="#fbbf24" opacity="0.6"/>
            <circle cx="1200" cy="80" r="36" fill="none" stroke="#fbbf24" stroke-width="1.5" opacity="0.7"/><circle cx="1218" cy="72" r="30" fill="#0c0a24"/>
            <rect x="750" y="190" width="55" height="230" fill="#080718"/><rect x="810" y="160" width="70" height="260" fill="#080718"/><rect x="885" y="130" width="45" height="290" fill="#0c0b20"/><rect x="1005" y="145" width="55" height="275" fill="#0c0b20"/><rect x="1130" y="135" width="50" height="285" fill="#0c0b20"/><rect x="1265" y="155" width="55" height="265" fill="#0c0b20"/>
            <line x1="885" y1="130" x2="885" y2="85" stroke="#f472b6" stroke-width="2" opacity="0.8"/>
            <ellipse cx="1000" cy="420" rx="600" ry="50" fill="rgba(124,58,237,0.15)"/>
          </svg>
        </CityBg>
        <HeroContent>
          <HeroEyebrow>Recetas de Autor</HeroEyebrow>
          <HeroH>COCTELES<br>SIGNATURE</HeroH>
          <HeroSub>Recetas exclusivas de nuestros bartenders.<br>Crea la experiencia perfecta en casa.</HeroSub>
          <HeroBtn>Ver Recetas &rarr;</HeroBtn>
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
