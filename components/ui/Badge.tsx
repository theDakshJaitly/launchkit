interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium border border-white bg-black text-white tracking-tight ${className}`}
    >
      {children}
    </span>
  );
}
