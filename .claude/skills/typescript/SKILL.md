---
name: typescript
description: Apply TypeScript best practices for this project. Use when writing types, interfaces, or checking type safety.
---

Apply TypeScript best practices for this project (TypeScript ~6.0, strict mode via @vue/tsconfig/tsconfig.dom.json, noUncheckedIndexedAccess enabled).

**Type discipline:**
- No `any` — use `unknown` and narrow with type guards, or use proper generics.
- `noUncheckedIndexedAccess` is on: array/object access returns `T | undefined`. Always guard: `const item = arr[0]; if (item) { ... }`.
- Prefer `interface` for object shapes in `domain/models/`, `type` for unions and utility types.
- Use `satisfies` operator to validate objects against a type without widening: `const config = { ... } satisfies Config`.

**Vue-specific types:**
- Template refs: `ref<HTMLElement | null>(null)` — always include `null`.
- Props: `defineProps<{ title: string; count?: number }>()` — no `PropType` imports needed.
- Emits: `defineEmits<{ change: [value: string]; close: [] }>()` — labeled tuple syntax.
- Composable return types: always explicitly type the return with an `interface` or inline type.

**Path aliases (configured in tsconfig.app.json):**
- `@/*` → `./src/*`
- `@styled-system/*` → `./styled-system/*`

**Type-check:**
```sh
npm run type-check   # runs vue-tsc --build
```

**Domain model conventions:**
- All domain interfaces live in `src/domain/models/*.model.ts`.
- Name files `entity-name.model.ts`, export named interfaces: `export interface DrinkItem { ... }`.
- No classes in domain — plain interfaces only.
