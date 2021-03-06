import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Logo from './img/logo.svg';
import { ReactComponent as TogglerIcon } from './img/toggler-icon.svg';
import { ReactComponent as MessageIcon } from './img/Chat.svg';
import { ReactComponent as AngleDown } from './img/angle-down.svg';
import { ReactComponent as UserIcon } from './img/user.svg';

const Header = ({ selectMenu, selectedMenu }) => {
  const [open, setOpen] = useState(false);
  const cx = classNames.bind(styles);

  const isOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom p-0">
        <div className="container">
          <a href="/" className="py-3">
            <img src={Logo} className="img-fluid" alt="..." />
          </a>
          <button
            className={`${cx({
              navbarToggler: true,
            })} navbar-toggler navbar-toggler-right ${open ? 'collapsed' : ''}`}
            type="button"
            onClick={isOpen}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <TogglerIcon />
          </button>
          <div className="navbar-collapse collapse py-0 ps-5" id="navbarNav">
            <div className="navbar-nav ">
              <button
                type="button"
                className={`${cx({
                  navLink: true,
                  navItemSelected: selectedMenu === 'TEMPLATE',
                })} nav-link active`}
                onClick={() => selectMenu('TEMPLATE')}
              >
                Design Lab
              </button>
              <button
                type="button"
                className={`${cx({
                  navLink: true,
                  navItemSelected: selectedMenu === 'products',
                })} nav-link active`}
              >
                Products
              </button>
              <button
                type="button"
                className={`${cx({
                  navLink: true,
                  navItemSelected: selectedMenu === 'howworks',
                })} nav-link active`}
              >
                How it works
              </button>
              <button
                type="button"
                className={`${cx({
                  navLink: true,
                  navItemSelected: selectedMenu === 'pricing',
                })} nav-link active`}
              >
                Bulk pricing
              </button>
            </div>
            <div className="navbar-nav ms-auto">
              <a
                href="."
                className={`${cx({
                  getHelp: true,
                })} text-decoration-none mx-sm-4`}
              >
                <MessageIcon /> <span className="mx-1">Get help </span>{' '}
                <AngleDown />
              </a>
              <a
                href="."
                className={`${cx({
                  accountDropdown: true,
                })} text-decoration-none`}
              >
                <UserIcon /> <span className="mx-1">Your Account </span>{' '}
                <AngleDown />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  selectMenu: PropTypes.func.isRequired,
  selectedMenu: PropTypes.string.isRequired,
};

export default Header;
