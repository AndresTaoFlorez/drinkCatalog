/**
 * Supported drink categories in the catalog.
 */
export type DrinkCategory =
  | "whisky"
  | "ron"
  | "vodka"
  | "gin"
  | "vinos"
  | "cervezas"
  | "tequila"
  | "aguardiente"
  | "other";

/**
 * Represents a single drink in the catalog.
 */
export interface Drink {
  /** Unique identifier. */
  id: number;
  /** Display name. */
  name: string;
  /** Drink category. */
  category: DrinkCategory;
  /** Price in COP. */
  price: number;
  /** Original price before discount, if applicable. */
  oldPrice: number | null;
  /** Discount percentage, if applicable. */
  discount: number | null;
  /** Bottle volume label (e.g. "750ml"). */
  volume: string;
  /** Bottle fill color for the SVG representation. */
  color: string;
  /** Bottle stroke/accent color for the SVG representation. */
  stroke: string;
  /** Short description of the drink. */
  description: string;
  /** Alcohol by volume percentage. */
  abv: number;
  /** Country of origin. */
  origin: string;
  /** Tasting notes (aroma, palate, finish). */
  tasting: {
    aroma: string;
    palate: string;
    finish: string;
  };
  /** Suggested serve or pairing. */
  serve: string;
  /** Popularity score from 1 (lowest) to 100 (highest). */
  popularity: number;
}

/**
 * Represents a category chip in the UI filter bar.
 */
export interface DrinkCategoryChip {
  /** Category key matching DrinkCategory, or "todos" for all. */
  id: string;
  /** Display label. */
  label: string;
  /** Emoji icon for the chip. */
  emoji: string;
}
