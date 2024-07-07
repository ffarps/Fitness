import { useState } from "react";
import Header from "../components/Header";
import { SelectedPage } from "../shared/types";

const Profile = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
      <div className="Profile">
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div>Profile</div>
      </div>
    );
  }
  
  export default Profile;
  