import banner from "../assests/anastase-maragos-9dzWZQWZMdE-unsplash 2.png";
import Header from "../components/Header";
function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold text-react-blue">
            BECOME THE BEST VERSION OF YOURSELF
          </h1>
          <button>Start now!</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
