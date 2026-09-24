# SnapCut AI

# Comprehensive Prompt for Building SnapCut AI (React + Tailwind CSS + n8n + Razorpay)

Copy and paste the prompt below into your code generation tool, AI builder, or development environment to scaffold your frontend:

***

**Role & Objective:**

You are an expert Frontend Developer and UI/UX Designer. Build a modern, highly polished, fully responsive web application and landing page for **SnapCut AI**, an AI-powered one-click background removal tool. 

**Tech Stack Requirements:**

- **Framework:** React.js (Single Page Application using Vite or Create React App, NO Next.js).

- **Styling:** Tailwind CSS.

- **Icons:** `lucide-react`.

**Design System & Color Theme (Strictly Follow):**

- **Deep Space Background:** `#0B0F19` (Tailwind custom: `bg-[#0B0F19]`)

- **Card / Surface:** `#131C2E` (Tailwind custom: `bg-[#131C2E]`) with subtle border lines (`border border-slate-800/80`)

- **Primary Indigo:** `#4F46E5`

- **Electric Cyan (AI Accent):** `#00E5FF` (Tailwind custom: `text-[#00E5FF]`, use glowing text shadows for the "AI" suffix).

- **Gradients:** Use linear gradients from `#4F46E5` to `#00E5FF` for primary CTA buttons and hero headings.

- **Typography & Vibe:** Clean, futuristic, developer-friendly, sleek dark mode aesthetic (similar to Vercel or Supabase).

---

### Component & Feature Requirements:

#### 1. Navigation Bar (`Navbar.jsx`)

- **Logo:** Display the custom logo with the scissor/AI spark icon and typography ("SnapCut **AI**" with cyan glow).

- **Links:** Features, Pricing, API Docs, FAQ.

- **CTA:** A "Get Started" or Login button styled with the indigo-to-cyan gradient.

#### 2. Hero Section (`Hero.jsx`)

- **Badge:** A pill badge reading `✨ Powered by Advanced AI • Instant Results`.

- **Main Heading:** "Remove Image Backgrounds in One Click" (with gradient text highlight).

- **Subheading:** "Professional-quality background removal for e-commerce, creators, and developers. Fast, simple, and affordable."

- **Primary CTAs:** "Upload Image (Free)" and "Explore Pricing".

#### 3. Interactive Tool Workspace (`Dropzone.jsx` / Main App Area)

- **Drag & Drop Box:** A large centered card with a dashed border (`border-2 border-dashed border-slate-700 hover:border-[#00E5FF] transition-all rounded-2xl bg-[#131C2E]/50 p-10 text-center cursor-pointer`).

- **States:**

  - *Idle:* Cloud upload icon, "Drag & drop your image here, or browse", and supported formats (`PNG, JPG, WEBP up to 10MB`).

  - *Processing State:* Show an animated loading spinner or pulse effect with text: *"AI is processing your image..."* (Simulate connection to n8n webhook).

  - *Result State (Before/After or Side-by-Side Preview):* Display the original image alongside the transparent cutout version (using a classic grey/white checkerboard background pattern for transparency).

  - *Download Button:* Prominent button to download the high-resolution transparent PNG.

#### 4. Features Section (`Features.jsx`)

Grid of 3x2 cards highlighting key pillars:

- One-Click Background Removal

- High-Quality Transparent Output

- Secure Image Handling (Auto-deleted)

- Fast Processing Speed

- Drag-and-Drop System

- Instant Preview

#### 5. Pricing & Razorpay Integration Section (`Pricing.jsx`)

Display 3 pricing tiers:

- **Free Plan:** 5 credits/day (₹0)

- **Creator Pack:** 100 credits for ₹299 (Popular badge)

- **Pro Unlimited:** Monthly subscription for ₹999/mo

- *Note/Hook:* Include a "Buy Credits via Razorpay" button that triggers the Razorpay checkout modal flow template.

#### 6. Footer (`Footer.jsx`)

- Clean layout with copyright, privacy policy links, terms of service, and social media icons.

---

### Implementation Instructions:

1. Provide clean, modular code broken down into components (`Navbar`, `Hero`, `ToolWorkspace`, `Features`, `Pricing`, `Footer`).

2. Include all necessary Tailwind utility classes and mock states so the app is fully interactive right out of the box (e.g., handling file uploads with `FileReader` and switching states from upload to processing to result preview)........use the attached image as logo and for website colour theme identification...

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6fc67308-341d-48d9-9a5a-b3985070f254).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
