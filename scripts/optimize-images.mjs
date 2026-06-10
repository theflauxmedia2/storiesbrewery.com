import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");

/** Images referenced in the live site */
const USED_PUBLIC = [
  "public/stbr/1.webp",
  "public/stbr/3.webp",
  "public/stbr/4.webp",
  "public/stbr/6.webp",
  "public/stbr/7.webp",
  "public/stbr/8.webp",
  "public/stdb/2.webp",
  "public/stdb/6.webp",
  "public/stdb/8.webp",
  "public/stdb/9.webp",
  "public/stdb/11.webp",
  "public/blogs/1.webp",
  "public/blogs/2.webp",
  "public/blogs/3.webp",
  "public/blogs/craft-beer.webp",
  "public/blogs/rooftop-dining.webp",
  "public/logos/stbc.png",
  "public/logos/stbk.png",
  "public/flaux.png",
];

const USED_ASSETS = [];

const PRESETS = {
  hero: { maxWidth: 1920, widths: [640, 1080, 1920], quality: 84 },
  gallery: { maxWidth: 960, widths: [400, 640, 960], quality: 82 },
  card: { maxWidth: 800, widths: [400, 640, 800], quality: 82 },
  logo: { maxWidth: 256, widths: [128, 256], quality: 90 },
  tiny: { maxWidth: 128, widths: [64, 128], quality: 90 },
};

function presetFor(file) {
  if (file.includes("/logos/")) return PRESETS.logo;
  if (file.endsWith("flaux.png")) return PRESETS.tiny;
  if (file.includes("/stbr/1.webp") || file.includes("/stbr/8.webp")) return PRESETS.hero;
  if (file.includes("/stbr/") || file.includes("/stdb/")) return PRESETS.gallery;
  return PRESETS.card;
}

async function optimizeFile(relativePath) {
  const inputPath = path.join(ROOT, relativePath);
  const parsed = path.parse(inputPath);
  const preset = presetFor(relativePath);
  const isPng = parsed.ext.toLowerCase() === ".png";
  const outputExt = isPng ? ".webp" : ".webp";
  const baseOut = path.join(parsed.dir, parsed.name);

  const image = sharp(inputPath, { failOn: "none" });
  const metadata = await image.metadata();
  const sourceWidth = metadata.width ?? preset.maxWidth;

  let totalBytes = 0;

  for (const width of preset.widths) {
    const targetWidth = Math.min(width, sourceWidth, preset.maxWidth);
    const variantPath = `${baseOut}-${targetWidth}w${outputExt}`;

    const buffer = await sharp(inputPath)
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: preset.quality, effort: 6, smartSubsample: true })
      .toBuffer();

    await fs.writeFile(variantPath, buffer);
    totalBytes += buffer.length;
  }

  const mainWidth = Math.min(sourceWidth, preset.maxWidth);
  const mainPath = `${baseOut}${outputExt}`;
  const mainBuffer = await sharp(inputPath)
    .rotate()
    .resize({ width: mainWidth, withoutEnlargement: true })
    .webp({ quality: preset.quality, effort: 6, smartSubsample: true })
    .toBuffer();

  await fs.writeFile(mainPath, mainBuffer);
  totalBytes += mainBuffer.length;

  if (parsed.ext.toLowerCase() !== ".webp" || mainPath !== inputPath) {
    await fs.unlink(inputPath).catch(() => undefined);
  }

  const kb = (totalBytes / 1024).toFixed(1);
  console.log(`✓ ${relativePath} → ${kb} KB (${preset.widths.join(", ")}w)`);
}

async function removeUnused() {
  const unusedDirs = ["public/2.0", "public/lovable-uploads"];
  const unusedFiles = [
    "public/stbr/2.webp",
    "public/stbr/5.webp",
    "public/stbr/9.webp",
    "public/stbr/10.webp",
    "public/stbr/11.webp",
    "public/stdb/1.webp",
    "public/stdb/3.webp",
    "public/stdb/4.webp",
    "public/stdb/5.webp",
    "public/stdb/7.webp",
    "public/stdb/10.webp",
    "public/stdb/12.webp",
    "src/assets/blog-brewery-interior.jpg",
    "src/assets/blog-featured.jpg",
    "src/assets/hero-brewery-1.jpg",
    "src/assets/hero-brewery-2.jpg",
    "src/assets/hero-brewery-3.jpg",
  ];

  for (const dir of unusedDirs) {
    await fs.rm(path.join(ROOT, dir), { recursive: true, force: true });
    console.log(`✗ removed ${dir}/`);
  }

  for (const file of unusedFiles) {
    await fs.unlink(path.join(ROOT, file)).catch(() => undefined);
    console.log(`✗ removed ${file}`);
  }
}

async function main() {
  console.log("Optimizing images...\n");
  await removeUnused();

  for (const file of [...USED_PUBLIC, ...USED_ASSETS]) {
    try {
      await optimizeFile(file);
    } catch (error) {
      console.error(`! failed ${file}:`, error.message);
    }
  }

  console.log("\nDone.");
}

main();
