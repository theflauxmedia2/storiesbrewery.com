import ResponsiveImage from "@/components/ResponsiveImage";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  alt?: string;
  priority?: boolean;
}

const BrandLogo = ({
  className = "",
  size = "lg",
  alt = "Stories Brewery & Kitchen",
  priority = false,
}: BrandLogoProps) => {
  const sizeClasses = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto",
  };

  return (
    <div className={`logo-container ${className}`}>
      <ResponsiveImage
        src="/logos/stbc.webp"
        alt={alt}
        preset="logo"
        priority={priority}
        className={`${sizeClasses[size]} logo-slide`}
      />
    </div>
  );
};

export default BrandLogo;