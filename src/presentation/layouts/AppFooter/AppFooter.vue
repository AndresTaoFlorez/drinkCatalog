<script setup lang="ts">
import SectionHeader from '@/presentation/components/SectionHeader/SectionHeader.vue'
import {
  FooterWrap, FooterInner, RecipeGrid, RecipeCard,
  RecipeThumb, RecipeName, RecipeMeta,
  FooterBottom, NeonLogo, NeonScript, NeonBadge, FooterLinks
} from './AppFooter.styles'

/**
 * Application footer with cocktail recipe cards,
 * neon brand logo, navigation links, and copyright.
 */
</script>

<template>
  <FooterWrap>
    <FooterInner>
      <!-- Recipes section -->
      <SectionHeader eyebrow="Recetas de Cocteles" title="Hazlo en Casa" />
      <RecipeGrid>
        <RecipeCard>
          <RecipeThumb>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M12 8h16l-2 24H14L12 8Z" stroke="#f472b6" stroke-width="1.5" fill="rgba(244,114,182,0.1)"/><path d="M10 8h20" stroke="#f472b6" stroke-width="1.5" stroke-linecap="round"/><circle cx="28" cy="14" r="4" stroke="#22d3ee" stroke-width="1" fill="none"/></svg>
          </RecipeThumb>
          <RecipeName>Mezcal Margarita</RecipeName>
          <RecipeMeta>Mezcal &middot; Limon &middot; Sal &middot; Curazao &middot; 5 min</RecipeMeta>
        </RecipeCard>
        <RecipeCard>
          <RecipeThumb>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="14" y="6" width="12" height="28" rx="2" stroke="#fbbf24" stroke-width="1.5" fill="rgba(251,191,36,0.1)"/><path d="M14 14h12" stroke="#fbbf24" stroke-width="1" opacity="0.5"/><circle cx="20" cy="24" r="3" stroke="#fbbf24" stroke-width="1" fill="none"/></svg>
          </RecipeThumb>
          <RecipeName>Old Fashioned Bogotano</RecipeName>
          <RecipeMeta>Whisky &middot; Bitter &middot; Azucar &middot; Naranja &middot; 8 min</RecipeMeta>
        </RecipeCard>
        <RecipeCard>
          <RecipeThumb>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M14 10c0-2 2-4 6-4s6 2 6 4v4l-2 20H16L14 14V10Z" stroke="#22d3ee" stroke-width="1.5" fill="rgba(34,211,238,0.1)"/><path d="M14 14h12" stroke="#22d3ee" stroke-width="1" opacity="0.5"/></svg>
          </RecipeThumb>
          <RecipeName>Gin Tonica Andina</RecipeName>
          <RecipeMeta>Gin &middot; Tonica &middot; Pepino &middot; Hierbas &middot; 4 min</RecipeMeta>
        </RecipeCard>
      </RecipeGrid>

      <!-- Bottom bar -->
      <FooterBottom>
        <NeonLogo>
          <NeonScript>Nocturna Bogotana</NeonScript>
          <NeonBadge>Licores de Autor &middot; Bogota</NeonBadge>
        </NeonLogo>
        <FooterLinks>
          <a href="#">Terminos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </FooterLinks>
        <div>&copy; 2026 Nocturna Bogotana</div>
      </FooterBottom>
    </FooterInner>
  </FooterWrap>
</template>
