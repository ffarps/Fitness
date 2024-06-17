import React from 'react';
import { SelectedPage } from "../shared/types";

type LinkProps = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const isSelected = selectedPage === page;

  return (
    <div
      className={`cursor-pointer ${isSelected ? 'bg-react-blue' : ''}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </div>
  );
};

export default Link;
