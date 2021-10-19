import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidemenu.module.css';
import { ReactComponent as TextIcon } from './img/text.svg';
import { ReactComponent as ImageIcon } from './img/image.svg';
import { ReactComponent as UploadIcon } from './img/upload.svg';
import { ReactComponent as ColorIcon } from './img/color.svg';
import { ReactComponent as TeamIcon } from './img/teamnames.svg';
import { ReactComponent as NoteIcon } from './img/notes.svg';

const Sidemenu = () => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div
        className="col-sm-auto col-md-1 pe-0"
        style={{ height: 'auto', background: '#007BFF' }}
      >
        <ul className={`${cx({ sideNav: true })} nav flex-column text-center`}>
          <li className={`${cx({ sideNavItem: true })} nav-item`}>
            <a className="nav-link active" aria-current="page" href="/">
              <TextIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Add Text</p>
            </a>
          </li>
          <li className={`${cx({ sideNavItem: true })} nav-item`}>
            <a className="nav-link" href="/">
              <ImageIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Use Templates</p>
            </a>
          </li>
          <li className={`${cx({ sideNavItem: true })} nav-item`}>
            <a className="nav-link" href="/">
              <UploadIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Upload Design</p>
            </a>
          </li>
          <li className={`${cx({ sideNavItem: true })} nav-item`}>
            <a className="nav-link" href="/">
              <ColorIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Product Colors</p>
            </a>
          </li>
          <li className={`${cx({ sideNavItem: true })} nav-item`}>
            <a className="nav-link" href="/">
              <TeamIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Add Team names</p>
            </a>
          </li>
          <li className={`${cx({ sideNavItem: true })} nav-item`}>
            <a className="nav-link" href="/">
              <NoteIcon
                className={`${cx({ iconContainer: true })} img-fluid`}
              />
              <p>Add Notes</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidemenu;
