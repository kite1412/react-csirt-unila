import contentHorizontalPadding from "../styles/contentHorizontalPadding";
import UnilaLogo from "../assets/unilaLogo.svg?react";
import LogoSmall from "../assets/logoSmall.svg?react";

export default function Footer({
  className = ""
}) {
  const iconSize = {
    maxWidth: "70px",
    aspectRatio: "1/1"
  };

  return (
    <div
      className={`
        flex justify-between pt-20 pb-8 items-end ${className} 
      `}
      style={{
        ...contentHorizontalPadding,
        ...{
          background: "linear-gradient(178deg, white 25%, #081423 26%)"
        }
      }}
    >
      <div>
        <p>Copyright © 2025</p>
        <p>UNILA-CSIRT TEAM</p>
      </div>
      <div className="flex gap-8 items-center">
        <UnilaLogo style={iconSize} />
        <LogoSmall style={iconSize} />
      </div>
    </div>
  );
}