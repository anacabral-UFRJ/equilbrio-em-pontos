import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "emergency" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-green-700 shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-teal-600 shadow-md hover:shadow-lg",
    emergency: "bg-danger text-white hover:bg-red-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    accent: "bg-accent text-white hover:bg-amber-600 shadow-md hover:shadow-lg",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}