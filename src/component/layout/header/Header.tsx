import CustomSidebar from "./SideBar/CustomSideBar.tsx";
import LogoClickHandler from "./LogoClickHandler.tsx";

const Header = () => {
  return (
    <div className="bg-[var(--single-border)] flex justify-around items-center border-b-4 border-orange-400 w-full   mx-auto fixed z-10 ">
      <CustomSidebar />
      <strong className="text-xl md:text-2xl bg-gradient-to-l from-[#d37827] via-[#c62d27] to-black inline-block text-transparent bg-clip-text ">
        راه هنر
      </strong>
      <LogoClickHandler />
    </div>
  );
};
export default Header;
