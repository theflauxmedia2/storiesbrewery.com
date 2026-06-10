import { getResponsiveImage, type ImagePreset } from "@/lib/images";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  preset?: ImagePreset;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  /** Skip responsive variants for bundled/imported asset URLs */
  disableVariants?: boolean;
}

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  preset = "gallery",
  sizes,
  loading = "lazy",
  priority = false,
  disableVariants = false,
}: ResponsiveImageProps) => {
  const isLocalPublic =
    !disableVariants && src.startsWith("/") && !src.startsWith("//");
  const responsive = isLocalPublic ? getResponsiveImage(src, preset) : null;

  return (
    <img
      src={responsive?.src ?? src}
      srcSet={responsive?.srcSet}
      sizes={sizes ?? responsive?.sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : loading}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
};

export default ResponsiveImage;
