import Footer from "../components/Footer";
import Header from "../components/Header";
import contentHorizontalPadding from "../styles/contentHorizontalPadding";

export default function MainLayout({ children }) {
  return (
    <div className="size-full grid grid-rows-[1fr_6fr]">
      <Header />
      <div className="flex flex-col jsutify-between overflow-auto gap-2">
        <div
          className="text-black h-full w-full"
          style={{
            ...contentHorizontalPadding,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
