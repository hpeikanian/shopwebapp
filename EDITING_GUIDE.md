# POODIN editing guide

This repository is intentionally simple.

- Brand name, tagline, navigation and homepage copy: `src/config.ts`
- Mock products/prices/images/colors: `src/catalog.ts`
- Layout/components: `src/App.tsx`
- Colors, typography, spacing and responsive rules: `src/style.css`

## Next architecture step
The mock catalog will be replaced by a WooCommerce service adapter. UI components should not contain WooCommerce credentials. Secrets belong only in server-side environment variables.

## Editing philosophy
Keep content/config separate from UI. Do not hard-code product data inside components. Maintain mobile-first behavior and RTL readiness for the Persian version.