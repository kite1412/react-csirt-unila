export default function ContentVerticalPadding({ children, className = "" }) {
  return <div className={`size-full py-12 px-20 ${className}`}>{children}</div>;
}
