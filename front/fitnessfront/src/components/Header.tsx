import logo from "../assests/logo.png";
import { SelectedPage } from "../shared/types";
import Link from "./Link";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
function Header({ selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className="Header">
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={logo} alt="logo" width={150}></img>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              {/* <p>Home</p> */}
              <Link
                page="Workouts"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Profile"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign in</p>
              <p>Log in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
