import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const TAB = ["Home", "Benefits", "Our Classes", "Contact Us"];

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-content";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE  */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE  */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                {TAB.map((tab) => (
                  <Link page={tab} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                ))}
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
