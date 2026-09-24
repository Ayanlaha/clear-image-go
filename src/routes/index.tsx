import { createFileRoute } from "@tanstack/react-router";
import { SnapCutPage } from "@/components/SnapCutPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnapCut AI — One-Click Background Removal" },
      { name: "description", content: "Remove image backgrounds in seconds with SnapCut AI. Fast, secure, high-quality transparent PNG results." },
      { property: "og:title", content: "SnapCut AI — One-Click Background Removal" },
      { property: "og:description", content: "Professional AI background removal for creators, stores, and developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SnapCutPage,
});
