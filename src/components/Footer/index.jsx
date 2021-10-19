import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.css';

import { ReactComponent as DollarIcon } from './img/dollar.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';
import { ReactComponent as ShareIcon } from './img/share.svg';
import { ReactComponent as ShirtIcon } from './img/shirt-sm.svg';

const Footer = () => {
  const cx = classNames.bind(styles);
  return (
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
  );
};

export default Footer;
