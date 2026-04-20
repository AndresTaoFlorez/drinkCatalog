import { ref, type Ref } from "vue";
import type { AppMeta } from "@/domain/models/app.model";

/**
 * Provides the application metadata (name and tagline).
 */
export function useAppMeta(): { meta: Ref<AppMeta> } {
  const meta = ref<AppMeta>({
    name: "Nocturna Bogotana",
    tagline: "Licores de Autor · Bogota",
  });

  return { meta };
}
