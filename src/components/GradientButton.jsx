export default function GradientButton({ 
  children, 
  reverse = false, 
  className = ""
}) {
  return (
    <div 
      className={`
        bg-gradient-to-r ${reverse ? "from-on-primary to-black" : "from-black to-on-primary"} 
        rounded-[8px] py-2 px-4 cursor-pointer ${className}
      `}
    >
      {children}
    </div>
  );
}