<script setup lang="ts">
import SectionHeader from '@/presentation/components/SectionHeader/SectionHeader.vue'
import {
  FooterWrap, FooterInner, RecipeGrid, RecipeCard,
  RecipeThumb, RecipeName, RecipeMeta,
  ContactGrid, ContactBlock, ContactTitle, ContactLine, SocialRow, SocialLink,
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

      <!-- Contact & social section -->
      <ContactGrid>
        <ContactBlock>
          <ContactTitle>Redes Sociales</ContactTitle>
          <SocialRow>
            <SocialLink href="#" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </SocialLink>
            <SocialLink href="#" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </SocialLink>
            <SocialLink href="#" title="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </SocialLink>
            <SocialLink href="#" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </SocialLink>
          </SocialRow>
        </ContactBlock>

        <ContactBlock>
          <ContactTitle>Llamanos</ContactTitle>
          <ContactLine>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (601) 555-0123
          </ContactLine>
          <ContactLine>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            WhatsApp: 310 555 6789
          </ContactLine>
        </ContactBlock>

        <ContactBlock>
          <ContactTitle>Domicilios</ContactTitle>
          <ContactLine>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Lun - Sab: 10am - 11pm
          </ContactLine>
          <ContactLine>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Dom y festivos: 12pm - 9pm
          </ContactLine>
          <ContactLine>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Cobertura en toda Bogota
          </ContactLine>
        </ContactBlock>
      </ContactGrid>

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
