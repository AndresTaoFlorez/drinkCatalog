import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface CartItem {
  drinkId: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  stroke: string;
  category: string;
}

const STORAGE_KEY = "nocturna-cart";

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const items: CartItem[] = JSON.parse(raw);
    // Filter out items missing required fields (stale data)
    return items.filter((i) => i.drinkId && i.name && typeof i.color === "string" && typeof i.stroke === "string" && typeof i.category === "string");
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

/**
 * Shopping cart store with localStorage persistence.
 */
export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>(loadFromStorage());

  const totalItems = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0),
  );

  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.price * i.quantity, 0),
  );

  function addItem(drinkId: number, name: string, price: number, color: string, stroke: string, category: string) {
    const existing = items.value.find((i) => i.drinkId === drinkId);
    if (existing) {
      existing.quantity++;
    } else {
      items.value.push({ drinkId, name, price, quantity: 1, color, stroke, category });
    }
    saveToStorage(items.value);
  }

  function removeItem(drinkId: number) {
    items.value = items.value.filter((i) => i.drinkId !== drinkId);
    saveToStorage(items.value);
  }

  function updateQuantity(drinkId: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(drinkId);
      return;
    }
    const item = items.value.find((i) => i.drinkId === drinkId);
    if (item) {
      item.quantity = quantity;
      saveToStorage(items.value);
    }
  }

  function clearCart() {
    items.value = [];
    saveToStorage(items.value);
  }

  return { items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart };
});
