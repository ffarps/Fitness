import logo from "../assests/logo.png";
function Header() {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className="Header">
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={logo} alt="logo" width={150}></img>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              {/* <p>Home</p> */}
              <p>Workouts</p>
              <p>Profile</p>
              <p>Contact us</p>
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
