function TextBox({ paragraph, title, className = "" }) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-center items-center m-15">
        <div
          className="border-1 border-black rounded-2xl p-8"
          style={{
            boxShadow:
              "0 -4px 6px -1px rgba(0,0,0,0.4), 0 4px 6px -1px rgba(0,0,0,0.4)",
          }}
        >
          <h3 className="mb-4 font-bold text-2xl">{title}</h3>
          <div className=" w-[90ch] text-justify">{paragraph}</div>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
