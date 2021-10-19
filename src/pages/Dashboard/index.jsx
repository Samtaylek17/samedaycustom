import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { PlusCircleOutlined } from '@ant-design/icons';
import ResizableContent from './ResizableContent';
import './style.css';
import styles from './Dashboard.module.css';
import Header from '../../components/Header';
import Sidemenu from '../../components/Sidemenu';
import Submenu from '../../components/Submenu';
import EditText from '../../components/EditText';
import ImageUploader from '../../components/ImageUploader';

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
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const cx = classNames.bind(styles);

  const isOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
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
          <Sidemenu />
          {/* <Submenu /> */}
          {/* <EditText onChange={handleChange} text={text} /> */}
          <ImageUploader />
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
              <div
                className={`${cx({
                  canvasArea: true,
                })} col-md-7 d-flex align-items-center justify-content-center`}
              >
                <>
                  <div className={styles.drawArea}>
                    <ResizableContent
                      top={250}
                      left={750}
                      width={300}
                      height={100}
                      rotateAngle={0}
                    >
                      <div className="content content2">
                        <svg
                          viewBox="0 0 100 50"
                          preserveAspectRatio="xMidYMin slice"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className={styles.textBox}
                        >
                          <text x="50%" y="70%">
                            {text}
                          </text>
                        </svg>
                      </div>
                    </ResizableContent>
                  </div>
                </>
              </div>
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
