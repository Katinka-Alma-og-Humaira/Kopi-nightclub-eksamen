import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = () => {
  return (
    <>
      {/* Popover UDENFOR navbar */}
      <div id="popup" popover="auto" className="fixed items-center justify-center top-0 left-0 h-full w-full bg-black/75 m-0 p-0 flex flex-col items-center justify-center gap-[2.81rem] pb-60 mb-100">
        <button popoverTarget="popup" popoverTargetAction="hide" className="absolute top-6 right-6 text-white text-xl">
          ✕
        </button>
        <a href="/" className="tracking-widest text-white">
          HOME
        </a>
        <a href="/events" className="tracking-widest text-white">
          EVENTS
        </a>
        <a href="/book-table" className="tracking-widest text-white">
          BOOK TABLE
        </a>
        <a href="/contact" className="tracking-widest text-white">
          CONTACT US
        </a>
      </div>

      {/* Navbar */}
      <div className="md:hidden relative flex justify-between p-7 h-25 w-full border-[var(--color-pink)] border-t-2 border-b-2">
        <div className="absolute top-0 left-0 w-0 h-0" style={{ borderTop: "30px solid var(--color-pink)", borderRight: "30px solid transparent" }} />
        <div className="absolute bottom-0 right-0 w-0 h-0" style={{ borderBottom: "30px solid var(--color-pink)", borderLeft: "30px solid transparent" }} />

        <img src="/assets/icon/Logo_main.svg" alt="Logo" width={200} height={200} />

        <button popovertarget="popup" popovertargetaction="show">
          <GiHamburgerMenu fill="var(--color-white)" size={50} />
        </button>
      </div>
    </>
  );
};

export default BurgerMenu;
