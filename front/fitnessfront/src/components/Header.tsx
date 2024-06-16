import logo from "../assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "../shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Header({ selectedPage, setSelectedPage }: Props) {
  return (
    <div className="Header">
      <div className="container mx-auto p-3">
        <div className="flex items-center justify-between w-5/6 mx-auto">
          <div className="flex items-center gap-16">
            <img src={logo} alt="logo" width={150} />
            <div className="flex items-center gap-8">
              <Link></Link>
              {/* <Link
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
              /> */}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <p>Sign in</p>
            <p>Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
