import ContentVerticalPadding from "../layout/ContentVerticalPadding";
import webDefacementCover from "../assets/web-defacement.png";
import phishingCover from "../assets/serangan-phising.png";
import malwareCover from "../assets/serangan-malware.png";
import pertahananSiberCover from "../assets/pertahanan-siber.png";
import { useState } from "react";

function GuidePage() {
  const items = [
    {
      id: 1,
      title: "Panduan Penanganan Insiden Serangan Web Defacement",
      cover: webDefacementCover,
      url: "https://example.com/page1",
    },
    {
      id: 2,
      title: "Panduan Penanganan Insiden Serangan Phishing",
      cover: phishingCover,
      url: "https://example.com/page2",
    },
    {
      id: 3,
      title: "Panduan Penanganan Insiden Serangan Malware",
      cover: malwareCover,
      url: "https://example.com/page3",
    },
    {
      id: 4,
      title: "Pedoman Pertahanan Siber",
      cover: pertahananSiberCover,
      url: "https://example.com/page3",
    },
    {
      id: 1,
      title: "Panduan Penanganan Insiden Serangan Web Defacement",
      cover: webDefacementCover,
      url: "https://example.com/page1",
    },
    {
      id: 2,
      title: "Panduan Penanganan Insiden Serangan Phishing",
      cover: phishingCover,
      url: "https://example.com/page2",
    },
    {
      id: 3,
      title: "Panduan Penanganan Insiden Serangan Malware",
      cover: malwareCover,
      url: "https://example.com/page3",
    },
    {
      id: 4,
      title: "Pedoman Pertahanan Siber",
      cover: pertahananSiberCover,
      url: "https://example.com/page3",
    },
    // dst...
  ];

  const ITEMS_PER_PAGE = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const pagedItems = items.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <ContentVerticalPadding>
      <h1 className="text-center font-bold text-2xl mb-15">
        PANDUAN TEKNIS PENANGANAN INDSIDEN SIBER
      </h1>
      <div className="w-full h-fit flex flex-col justify-between">
        <div className="grid grid-cols-4 gap-20 w-full h-120">
          {pagedItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between h-full bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-full  object-cover"
                style={{ flex: 1, minHeight: 0 }}
              />
              <div className="w-full h-30 p-2 flex flex-col justify-between">
                <span className="font-semibold w-full">{item.title}</span>
                <div className="w-full h-fit flex justify-center">
                  <a
                    className="holographic-card w-full h-fit p-2 rounded-xl relative overflow-hidden flex justify-center items-center text-white duration-200"
                    style={{
                      background:
                        "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end"></div>
        <div className="flex justify-center items-center gap-2 pt-5">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1 ? "bg-[#1dbbb7] text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </ContentVerticalPadding>
  );
}

export default GuidePage;
