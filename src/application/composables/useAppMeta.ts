import { ref, type Ref } from "vue";
import type { AppMeta } from "@/domain/models/app.model";

export function useAppMeta(): { meta: Ref<AppMeta> } {
  const meta = ref<AppMeta>({
    name: "Licorera",
    tagline: "Trago no muy barato, pero  al fin trago",
  });

  return { meta };
}
