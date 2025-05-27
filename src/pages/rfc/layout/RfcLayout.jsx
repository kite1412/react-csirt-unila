import ContentVerticalPadding from "../../../layout/ContentVerticalPadding";

export default function RfcLayout({ children, className = "" }) {
  return <ContentVerticalPadding className="flex justify-center">
    <div className={`w-[80%] ${className}`}>
      {children}
    </div>
  </ContentVerticalPadding>
}