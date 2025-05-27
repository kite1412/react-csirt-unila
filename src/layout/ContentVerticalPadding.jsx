export default function ContentVerticalPadding({ children, className = "" }) {
  return <div className={`size-full py-12 ${className}`}>
    {children}
  </div>;
}