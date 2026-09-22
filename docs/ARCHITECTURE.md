# POODIN Web App Architecture

## Goal
Editable, scalable storefront for POODIN.

## Principles
- Components are reusable.
- Brand content is separated from UI code.
- Product data is isolated for future WooCommerce connection.
- Mobile first and RTL ready.

## Structure

src/
- config: brand and content settings
- data: products and categories
- components: shared UI
- features: cart, wishlist, account
- pages: routes

WooCommerce will replace the mock data layer later without rebuilding the UI.
