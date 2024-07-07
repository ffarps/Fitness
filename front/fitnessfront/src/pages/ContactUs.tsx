import { useState } from "react";
import Header from "../components/Header";
import { SelectedPage } from "../shared/types";
const ContactUs = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
      );
    return(
    <div className="ContactUs">
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div>ContactUs</div>
    </div>
    )
};
export default ContactUs