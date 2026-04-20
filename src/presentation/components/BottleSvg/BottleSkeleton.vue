<script setup lang="ts">
/**
 * Skeleton placeholder for BottleSvg.
 * Displays a muted bottle silhouette with a shimmer animation
 * while the real content loads.
 */
defineProps<{
  /** SVG width in pixels. */
  width?: number;
  /** SVG height in pixels. */
  height?: number;
}>()
</script>

<template>
  <svg
    :width="width ?? 70"
    :height="height ?? 130"
    viewBox="0 0 70 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="bottle-skeleton"
  >
    <defs>
      <linearGradient id="skeleton-shimmer" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255,0)" />
        <stop offset="50%" stop-color="rgba(255,255,255,0.04)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        <animateTransform
          attributeName="gradientTransform"
          type="translate"
          from="-1 0" to="1 0"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </linearGradient>
      <clipPath id="bottle-clip">
        <rect x="27" y="3" width="16" height="7" rx="3" />
        <rect x="25" y="9" width="20" height="22" rx="5" />
        <path d="M18 31 Q10 48 8 68 L6 118 Q6 126 18 126 L52 126 Q64 126 64 118 L62 68 Q60 48 52 31 Z" />
      </clipPath>
    </defs>

    <!-- Base silhouette -->
    <g opacity="0.12">
      <rect x="27" y="3" width="16" height="7" rx="3" fill="currentColor" />
      <rect x="25" y="9" width="20" height="22" rx="5" fill="currentColor" />
      <path
        d="M18 31 Q10 48 8 68 L6 118 Q6 126 18 126 L52 126 Q64 126 64 118 L62 68 Q60 48 52 31 Z"
        fill="currentColor"
      />
    </g>

    <!-- Shimmer overlay -->
    <rect
      x="0" y="0" width="70" height="130"
      fill="url(#skeleton-shimmer)"
      clip-path="url(#bottle-clip)"
    />
  </svg>
</template>

<style scoped>
.bottle-skeleton {
  color: #e2e8f0;
}
</style>
