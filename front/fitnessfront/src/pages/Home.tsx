import { useState } from "react";
import banner from "../assests/anastase-maragos-9dzWZQWZMdE-unsplash 2.png";
import Header from "../components/Header";
import { SelectedPage } from "../shared/types";
function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="Home">
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold text-react-blue">
            BECOME THE TRUE VERSION OF YOURSELF
          </h1>
          <button className="bg-react-blue px-10 text-2xl uppercase tracking-tighter hover:bg-black">
            Start now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
