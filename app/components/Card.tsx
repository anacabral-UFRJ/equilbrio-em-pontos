interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-3xl p-6 shadow-md
        ${hover ? "hover:shadow-xl hover:scale-[1.02] transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}