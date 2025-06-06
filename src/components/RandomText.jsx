import { useState, useEffect } from "react";

const chars = "01";

function RandomText({ length = 90, speed = 200 }) {
  // Inisialisasi array karakter awal dengan spasi atau karakter default
  const [charsArr, setCharsArr] = useState(() =>
    Array.from({ length }, () => " ")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCharsArr((oldChars) =>
        oldChars.map(() =>
          chars.charAt(Math.floor(Math.random() * chars.length))
        )
      );
    }, speed);

    return () => clearInterval(interval);
  }, [length, speed]);

  return (
    <code
      className="gradient-text text-2xl"
      //   style={{
      //     fontFamily: "monospace",
      //     color: "#0f0",
      //     background: "#000",
      //     padding: "0.5em",
      //     borderRadius: "4px",
      //     userSelect: "none",
      //     whiteSpace: "pre",
      //   }}
    >
      {charsArr.join("")}
    </code>
  );
}

export default RandomText;
