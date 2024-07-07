import { useState } from "react";
import Header from "../components/Header";
import { SelectedPage } from "../shared/types";

const Workouts = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
      );
    return(
    <div className="Workouts">
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div>Workouts</div>
    </div>
    ) 
};
export default Workouts