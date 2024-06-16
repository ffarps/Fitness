// import React, { useEffect } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { SelectedPage } from "../shared/types";

// type Props = {
//   page: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
//   const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

//   useEffect(() => {
//     // Smooth scroll initialization logic
//     // Delayed execution to ensure elements are ready
//     const smoothScrollInit = () => {
//       const anchor = document.querySelector(`#${lowerCasePage}`);
//       if (anchor) {
//         anchor.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     setTimeout(smoothScrollInit, 100); // Adjust delay as needed
//   }, [lowerCasePage]); // Run effect whenever lowerCasePage changes

//   return (
//     <AnchorLink
//       className={`transition duration-500 hover:text-react-blue`}
//       href={`#${lowerCasePage}`}
//       onClick={() => setSelectedPage(lowerCasePage)}
//     >
//       {page}
//     </AnchorLink>
//   );
// };

// export default Link;

const Link = () => {
  return <div><p>Home Workouts Profile Contact us </p></div>;
};
export default Link;
