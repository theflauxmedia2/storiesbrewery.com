export type ImagePreset = "hero" | "gallery" | "card" | "logo" | "tiny";

const PRESET_CONFIG: Record<
  ImagePreset,
  { widths: number[]; sizes: string; fallbackWidth: number }
> = {
  hero: {
    widths: [640, 1080, 1920],
    sizes: "100vw",
    fallbackWidth: 1920,
  },
  gallery: {
    widths: [400, 640, 960],
    sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
    fallbackWidth: 960,
  },
  card: {
    widths: [400, 640, 800],
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    fallbackWidth: 800,
  },
  logo: {
    widths: [128, 192],
    sizes: "(max-width: 768px) 120px, 180px",
    fallbackWidth: 192,
  },
  tiny: {
    widths: [64, 128],
    sizes: "40px",
    fallbackWidth: 128,
  },
};

/** Build src/srcSet for pre-generated responsive WebP variants. */
export function getResponsiveImage(
  src: string,
  preset: ImagePreset = "gallery"
) {
  const normalized = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const base = normalized.replace(/\.webp$/i, "");
  const { widths, sizes } = PRESET_CONFIG[preset];

  const srcSet = widths
    .map((w) => `${base}-${w}w.webp ${w}w`)
    .join(", ");

  return {
    // Base .webp always exists after optimization; avoids 404 when a width variant is missing
    src: `${base}.webp`,
    srcSet,
    sizes,
  };
}
