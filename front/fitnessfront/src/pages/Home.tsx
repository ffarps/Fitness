import banner from "../assests/anastase-maragos-9dzWZQWZMdE-unsplash.jpg";
import Header from "../components/Header";
function Home() {
  return (
    <div className="Home">
      <Header />
      <img src={banner} alt="logo" width={1920}></img>
    </div>
  );
}

export default Home;
