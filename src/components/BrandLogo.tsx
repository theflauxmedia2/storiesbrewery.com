import ResponsiveImage from "@/components/ResponsiveImage";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const BrandLogo = ({
  className = "",
  size = "lg",
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
        alt="Stories Brewery & Kitchen"
        preset="logo"
        priority
        className={`${sizeClasses[size]} logo-slide`}
      />
    </div>
  );
};

export default BrandLogo;