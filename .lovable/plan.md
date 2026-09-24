# SnapCut AI Web App

## What I’ll build
- A polished dark, responsive single-page experience matching the supplied SnapCut AI colors and branding.
- Navigation, hero, interactive upload workspace, six feature cards, three pricing tiers, FAQ, and footer.
- Upload interactions for PNG/JPG/WEBP files up to 10MB, including idle, processing, result, reset, and PNG download states.
- A transparent checkerboard result preview and accessible mobile navigation.
- A Razorpay-style checkout preview for the paid plans; no real charge will occur until payment credentials and server-side order creation are connected.

## Branding and visual direction
- Use the attached SnapCut AI artwork as the source for a clean navbar logo treatment.
- Deep space background, indigo-to-cyan accents, restrained glow, crisp borders, and compact rounded surfaces.
- Responsive layouts for phones, tablets, and desktops with subtle motion and reduced-motion support.

## Technical details
- Keep the existing React/TanStack Start structure and Tailwind CSS v4 setup.
- Define all colors, shadows, fonts, and checkerboard styling as semantic design tokens in the global stylesheet.
- Use Lucide icons and local React state/FileReader for the working demo.
- Add route-specific title, description, Open Graph, and Twitter metadata.
- Verify the page visually at desktop and mobile sizes, including upload and pricing interactions.

## Not connected yet
- The n8n background-removal webhook remains simulated because no webhook URL or request/response contract was provided.
- Razorpay remains a checkout preview because real payments require server-side order verification and credentials.
