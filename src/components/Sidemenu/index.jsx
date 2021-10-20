/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';
import styles from './Sidemenu.module.css';
import Submenu from '../Submenu';
import { ReactComponent as TextIcon } from './img/text.svg';
import { ReactComponent as ImageIcon } from './img/image.svg';
import { ReactComponent as UploadIcon } from './img/upload.svg';
import { ReactComponent as ColorIcon } from './img/color.svg';
import { ReactComponent as TeamIcon } from './img/teamnames.svg';
import { ReactComponent as NoteIcon } from './img/notes.svg';

const Sidemenu = ({ selectMenu, selectedMenu }) => {
  // const [selectedMenu, setSelectedMenu] = useState('SM');
  const [content, setContent] = useState(<Submenu />);

  const cx = classNames.bind(styles);
  return (
    <>
      <div
        className="col-sm-auto col-md-1 pe-0"
        style={{ height: 'auto', background: '#007BFF' }}
      >
        <ul className={`${cx({ sideNav: true })} nav flex-column text-center`}>
          {/* <li className={`${cx({ sideNavItem: true })} nav-item`}> */}
          <li
            className={`${
              selectedMenu === 'TEXT'
                ? `${cx({ sideNavItem: true, navActive: true })} nav-item`
                : `${cx({ sideNavItem: true })} nav-item`
            }`}
          >
            <button
              type="button"
              onClick={() => selectMenu('TEXT')}
              className={`${
                selectedMenu === 'TEXT'
                  ? `${cx({ navLink: true, active: true })} nav-link active`
                  : `${cx({ navLink: true })} nav-link`
              }`}
              aria-current="page"
            >
              <TextIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Add Text</p>
            </button>
          </li>
          <li
            className={`${
              selectedMenu === 'USETEMPLATE'
                ? `${cx({ sideNavItem: true, navActive: true })} nav-item`
                : `${cx({ sideNavItem: true })} nav-item`
            }`}
          >
            <button
              type="button"
              className={`${
                selectedMenu === 'TEMPLATE'
                  ? `${cx({ navLink: true, active: true })} nav-link active`
                  : `${cx({ navLink: true })} nav-link`
              }`}
            >
              <ImageIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Use Templates</p>
            </button>
          </li>
          <li
            className={`${
              selectedMenu === 'UPLOAD'
                ? `${cx({ sideNavItem: true, navActive: true })} nav-item`
                : `${cx({ sideNavItem: true })} nav-item`
            }`}
          >
            <button
              type="button"
              onClick={() => selectMenu('UPLOAD')}
              className={`${
                selectedMenu === 'UPLOAD'
                  ? `${cx({ navLink: true, active: true })} nav-link active`
                  : `${cx({ navLink: true })} nav-link`
              }`}
              href="/"
            >
              <UploadIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Upload Design</p>
            </button>
          </li>
          <li
            className={`${
              selectedMenu === 'COLOR'
                ? `${cx({ sideNavItem: true, navActive: true })} nav-item`
                : `${cx({ sideNavItem: true })} nav-item`
            }`}
          >
            <button
              type="button"
              className={`${
                selectedMenu === 'COLOR'
                  ? `${cx({ navLink: true, active: true })} nav-link active`
                  : `${cx({ navLink: true })} nav-link`
              }`}
              href="/"
            >
              <ColorIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Product Colors</p>
            </button>
          </li>
          <li
            className={`${
              selectedMenu === 'TEAM'
                ? `${cx({ sideNavItem: true, navActive: true })} nav-item`
                : `${cx({ sideNavItem: true })} nav-item`
            }`}
          >
            <button
              type="button"
              className={`${
                selectedMenu === 'TEAM'
                  ? `${cx({ navLink: true, active: true })} nav-link active`
                  : `${cx({ navLink: true })} nav-link`
              }`}
              href="/"
            >
              <TeamIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Add Team names</p>
            </button>
          </li>
          <li
            className={`${
              selectedMenu === 'NOTE'
                ? `${cx({ sideNavItem: true, navActive: true })} nav-item`
                : `${cx({ sideNavItem: true })} nav-item`
            }`}
          >
            <button
              type="button"
              className={`${
                selectedMenu === 'NOTE'
                  ? `${cx({ navLink: true, active: true })} nav-link active`
                  : `${cx({ navLink: true })} nav-link`
              }`}
              href="/"
            >
              <NoteIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Add Notes</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

Sidemenu.propTypes = {
  selectMenu: Proptypes.func.isRequired,
  selectedMenu: Proptypes.string.isRequired,
};

export default Sidemenu;
