import React from 'react';
import logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import { SelectedPage } from "../shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Header = ({ selectedPage, setSelectedPage }: Props) => {
  const pages: { name: SelectedPage, path: string }[] = [
    { name: SelectedPage.Home, path: '/' },
    { name: SelectedPage.Workouts, path: '/workouts' },
    { name: SelectedPage.Profile, path: '/profile' },
    { name: SelectedPage.ContactUs, path: '/contact-us' },
    { name: SelectedPage.Login, path: '/login' },
    { name: SelectedPage.Signup, path: '/signup' }
  ];

  return (
    <div className="Header">
      <div className="container mx-auto p-3">
        <div className="flex items-center justify-between w-5/6 mx-auto">
          <div className="flex items-center gap-16">
            <img src={logo} alt="logo" width={150} />
            <div className="flex items-center gap-8">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={()=>selectedPage}
                  className={selectedPage===page.name ? 'selected' : ''}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
