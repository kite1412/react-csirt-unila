function TextBoxWidth({ title, content, layanan }) {
  return (
    <div className="flex justify-center m-8">
      <div
        className="flex max-w-6xl w-full rounded-2xl p-8 gap-8 border"
        style={{
          boxShadow:
            "0 -4px 6px -1px rgba(0,0,0,0.4), 0 4px 6px -1px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex-1 flex flex-col justify-start">
          <h3 className="mb-4 font-bold text-xl">{title}</h3>
          <div className="text-justify">{content}</div>
        </div>

        <div className="w-1/3 flex items-center">
          <div className="w-full flex justify-center">{layanan}</div>
        </div>
      </div>
    </div>
  );
}

export default TextBoxWidth;
