```bash
src/
├── domain/
│   ├── models/               # interfaces & types
│   └── repositories/         # abstract contracts (interfaces only)
│
├── application/
│   └── composables/          # useX — ViewModels, business logic
│
├── infrastructure/
│   └── services/             # API calls, localStorage, external libs
│
├── presentation/
│   ├── components/
│   │   └── LogoIcon/
│   │       ├── LogoIcon.vue
│   │       ├── LogoIcon.styles.ts
│   │       └── LogoIcon.animations.ts
│   │
│   ├── layouts/
│   │   └── TopBar/
│   │       ├── TopBar.vue
│   │       ├── TopBar.styles.ts
│   │       └── TopBar.animations.ts
│   │
│   ├── pages/
│   │   └── HomePage/
│   │       ├── HomePage.vue
│   │       ├── HomePage.styles.ts
│   │       └── HomePage.animations.ts
│   │
│   └── styles/               # global tokens, recipes, theme
│
├── App.vue
└── main.ts
```

| `presentation` = View layer.
| `application/composables` = ViewModel.
| `domain` + `infrastructure` = Model.

# Terms

## Composables

| Is like **Custom Hook**

Is a function that uses Vue's Composition API to encapsulate and reuse stateful logic.

Core Traits:

- Stateful: Unlike a standard utility function, it maintains reactive state (ref, reactive).
- Reusable: One logic block can power multiple Views (.tsx files).
- Clean: It moves business logic out of the UI, preventing "fat" components.
- Naming: Always prefixed with use (e.g., useDrink, useToggle).
