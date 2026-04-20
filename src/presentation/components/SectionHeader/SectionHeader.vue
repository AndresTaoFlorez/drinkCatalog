<script setup lang="ts">
import { Eyebrow, Title } from './SectionHeader.styles'

/**
 * Reusable section header with eyebrow label and title.
 * Used across catalog, categories, popular, and footer sections.
 */
defineProps<{
  /** Small uppercase eyebrow text above the title. */
  eyebrow: string;
  /** Main section title. */
  title: string;
}>()
</script>

<template>
  <Eyebrow>{{ eyebrow }}</Eyebrow>
  <Title>{{ title }}</Title>
</template>
