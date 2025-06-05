import ContentVerticalPadding from "../layout/ContentVerticalPadding";

function GuidePage() {
  return (
    <ContentVerticalPadding>
      <h1 className="text-center font-bold text-2xl mb-15">
        PANDUAN TEKNIS PENANGANAN INDSIDEN SIBER
      </h1>
      <div className="w-full border-1 border-red-500 h-fit flex flex-col justify-between">
        <div className="bg-white w-full h-90 border-1 border-red-500 flex gap-10">
          <div className="bg-gray-700 w-60 h-full"></div>
          <div className="bg-gray-700 w-60 h-full"></div>
          <div className="bg-gray-700 w-60 h-full"></div>
          <div className="bg-gray-700 w-60 h-full"></div>
        </div>
        <div className="w-full flex justify-end">
          <button>Click me</button>
        </div>
      </div>
    </ContentVerticalPadding>
  );
}

export default GuidePage;
