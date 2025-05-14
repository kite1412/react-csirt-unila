import LogoUnila from "../assets/Logo_UnivLampung.svg?react";

function UnilaWebsites({ unilaSites }) {
  return (
    <div className="grid grid-cols-3 place-items-center p-10 text-white w-full gap-15 rounded-xl shadow-sm shadow-black/30">
      {unilaSites.map((unilaSite) => (
        <a
          key={unilaSite.name}
          href={unilaSite.url}
          target="_blank"
          className="w-full h-20 rounded-xl shadow-sm shadow-black/100 flex justify-between items-center px-20"
          style={{
            background:
              "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
          }}
        >
          <span className="font-semibold text-xl">
            {unilaSite.name.toUpperCase()}
          </span>
          <LogoUnila className="w-15 h-auto" />
        </a>
      ))}
    </div>
  );
}

export default UnilaWebsites;
