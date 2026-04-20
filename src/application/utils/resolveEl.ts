import type { Ref } from "vue";
export const resolveEl = (el: Ref<HTMLElement | null>): HTMLElement | null => {
  const target = el.value as unknown;
  if (!el.value) return null;

  const dom = (target as { $el?: HTMLElement }).$el || (target as HTMLElement);
  return dom instanceof HTMLElement ? dom : null;
};
