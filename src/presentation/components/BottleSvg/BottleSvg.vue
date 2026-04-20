<script setup lang="ts">
/**
 * Renders an SVG liquor bottle with configurable colors and label.
 * Tall narrow neck, shoulder, and wider body silhouette.
 */
defineProps<{
  /** Bottle fill color. */
  color: string;
  /** Bottle stroke/accent color. */
  stroke: string;
  /** Short label text inside the bottle. */
  label?: string;
  /** SVG width in pixels. */
  width?: number;
  /** SVG height in pixels. */
  height?: number;
}>()
</script>

<template>
  <svg
    :width="width ?? 70"
    :height="height ?? 140"
    viewBox="0 0 70 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Cap -->
    <rect x="29" y="2" width="12" height="6" rx="2" :fill="stroke" opacity="0.9"/>

    <!-- Neck -->
    <rect x="30" y="8" width="10" height="28" rx="4" :fill="color" opacity="0.25" :stroke="stroke" stroke-width="1"/>

    <!-- Shoulders + body -->
    <path
      d="M30 36 Q20 44 18 56 L18 120 Q18 130 28 132 L42 132 Q52 130 52 120 L52 56 Q50 44 40 36 Z"
      :fill="color" opacity="0.3" :stroke="stroke" stroke-width="1.5"
    />

    <!-- Label area -->
    <rect x="22" y="72" width="26" height="30" rx="3" :fill="stroke" opacity="0.08"/>
    <line x1="22" y1="72" x2="48" y2="72" :stroke="stroke" stroke-width="0.5" opacity="0.3"/>
    <line x1="22" y1="102" x2="48" y2="102" :stroke="stroke" stroke-width="0.5" opacity="0.3"/>

    <!-- Label text -->
    <text
      v-if="label"
      x="35" y="91"
      text-anchor="middle"
      font-size="8"
      :fill="stroke"
      font-weight="bold"
      font-family="DM Sans, sans-serif"
      opacity="0.7"
    >{{ label }}</text>

    <!-- Base -->
    <rect x="16" y="128" width="38" height="4" rx="2" :fill="stroke" opacity="0.15"/>
  </svg>
</template>
