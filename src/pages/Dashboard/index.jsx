import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { PlusCircleOutlined } from '@ant-design/icons';
import styles from './Dashboard.module.css';
import Header from '../../components/Header';
import Sidemenu from '../../components/Sidemenu';
import Logo from './img/logo.svg';
import { ReactComponent as TextIcon } from './img/text.svg';
import { ReactComponent as ImageIcon } from './img/image.svg';
import { ReactComponent as UploadIcon } from './img/upload.svg';
import { ReactComponent as ColorIcon } from './img/color.svg';
import { ReactComponent as TeamIcon } from './img/teamnames.svg';
import { ReactComponent as NoteIcon } from './img/notes.svg';
import { ReactComponent as AddTextIcon } from './img/addText.svg';
import { ReactComponent as UploadLgIcon } from './img/upload-lg.svg';
import { ReactComponent as ImageTemplateIcon } from './img/imageTemplate.svg';
import { ReactComponent as ProductsIcon } from './img/products.svg';
import { ReactComponent as UndoIcon } from './img/undo.svg';
import { ReactComponent as RedoIcon } from './img/redo.svg';
import { ReactComponent as FrontImage } from './img/front.svg';
import { ReactComponent as BackImage } from './img/back.svg';
import { ReactComponent as RightSleeve } from './img/rightSleeve.svg';
import { ReactComponent as LeftSleeve } from './img/leftSleeve.svg';
import { ReactComponent as DollarIcon } from './img/dollar.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';
import { ReactComponent as ShareIcon } from './img/share.svg';
import { ReactComponent as ShirtIcon } from './img/shirt-sm.svg';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const cx = classNames.bind(styles);

  const isOpen = () => {
    setOpen(true);
  };

  const onMenuClick = (e, menu) => {
    e.preventDefault();
    setSelectedMenu(menu);
    // onTabClick(menu);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-auto col-md-1 pe-0"
            style={{ height: 'auto', background: '#007BFF' }}
          >
            <ul
              className={`${cx({ sideNav: true })} nav flex-column text-center`}
            >
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
          <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
            <div className="col-md-12 ">
              <p className={`${cx({ headline: true })} mt-5 text-center`}>
                What&apos;s next for you?
              </p>
              <div className="row justify-content-around mt-4">
                <div
                  className={`${cx({ function: true })} col-md-6 text-center`}
                >
                  <AddTextIcon className="img-fluid" />
                  <p
                    className={`${cx({
                      functionLabel: true,
                    })} text-center mt-2`}
                  >
                    Add Text
                  </p>
                </div>
                <div
                  className={`${cx({ function: true })} col-md-6 text-center`}
                >
                  <ImageTemplateIcon className="img-fluid" />
                  <p
                    className={`${cx({
                      functionLabel: true,
                    })} text-center mt-2`}
                  >
                    Use Template
                  </p>
                </div>
              </div>
              <div className="row justify-content-around mt-4">
                <div
                  className={`${cx({ function: true })} col-md-6 text-center`}
                >
                  <UploadLgIcon className="img-fluid" />
                  <p
                    className={`${cx({
                      functionLabel: true,
                    })} text-center mt-2`}
                  >
                    Upload Design
                  </p>
                </div>
                <div
                  className={`${cx({ function: true })} col-md-6 text-center`}
                >
                  <ProductsIcon className="img-fluid" />
                  <p
                    className={`${cx({
                      functionLabel: true,
                    })} text-center mt-2`}
                  >
                    Change Products
                  </p>
                </div>
              </div>
              <p className="text-center mt-3">
                or <a href=".">start over</a>
              </p>
            </div>
          </div>
          <div
            className={`${cx({
              bgGrey: true,
            })} col-md-8 d-sm-flex align-items-stretch`}
          >
            <div className="row w-100">
              <div className="col-md-2 position-relative">
                <div className={`${cx({ undoRedo: true })} d-flex flex-column`}>
                  <button type="button" className={`${cx({ undoBtn: true })}`}>
                    <UndoIcon />
                    <span className={styles.undoLabel}>Undo</span>
                  </button>
                  <button type="button" className={`${cx({ undoBtn: true })}`}>
                    <RedoIcon />
                    <span className={styles.undoLabel}>Redo</span>
                  </button>
                </div>
              </div>
              <div className={`${cx({ canvasArea: true })} col-md-7`}> </div>
              <div className="col-md-3 position-relative">
                <div
                  className={`${cx({ shirtArea: true })} d-flex flex-column`}
                >
                  <button type="button" className={`${cx({ frontBtn: true })}`}>
                    <FrontImage />
                    <span className={styles.shirtCustomLabel}>Front</span>
                  </button>
                  <button type="button" className={`${cx({ frontBtn: true })}`}>
                    <BackImage />
                    <span className={styles.shirtCustomLabel}>Back</span>
                  </button>
                  <button type="button" className={`${cx({ frontBtn: true })}`}>
                    <RightSleeve />
                    <span className={styles.shirtCustomLabel}>
                      Right Sleeve
                    </span>
                  </button>
                  <button type="button" className={`${cx({ frontBtn: true })}`}>
                    <LeftSleeve />
                    <span className={styles.shirtCustomLabel}>Left sleeve</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 py-1">
        <div className="container">
          <button type="button" className={`${cx({ saveBtn: true })}`}>
            <PlusCircleOutlined className="align-middle" /> Add products
          </button>
          <ShirtIcon className="mx-2 py-1" />

          <div
            className="navbar-collapse collapse py-0 ps-5 border-left"
            id="navbarNav"
          >
            <div className="navbar-nav ms-auto justify-content-between">
              <button type="button" className={`${cx({ shareBtn: true })}`}>
                <ShareIcon />
              </button>
              <button type="button" className={`${cx({ saveBtn: true })} mx-2`}>
                <SaveIcon /> Save
              </button>
              <button type="button" className={`${cx({ getPricing: true })}`}>
                <DollarIcon /> Get pricing
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;
