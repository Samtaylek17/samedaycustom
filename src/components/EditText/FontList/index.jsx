import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { ClockCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import WebFont from 'webfontloader';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import styles from './FontList.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';

const FontList = ({
  onChange,
  text,
  font,
  popularFonts,
  setFont,
  selectMenu,
}) => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
        <div className="col-md-12">
          <p className={`${cx({ changeFont: true })} text-center mt-2`}>
            Change Font
            <CloseIcon
              onClick={() => selectMenu('TEXT')}
              className={`${cx({
                cursor: true,
              })} float-end mt-2 cursor-pointer`}
            />
          </p>
          <Input
            placeholder="Search Font"
            className={`${cx({ textInput: true })}`}
          />
          <span className={`${cx({ recentlyUsed: true })} my-1`}>
            <ClockCircleOutlined className="align-middle" /> Recently used fonts
          </span>
          <ul className="list-unstyled text-center">
            {popularFonts.map((fontStyle) => (
              <li key={fontStyle.family} className="border-bottom py-2">
                {WebFont.load({
                  google: {
                    families: [`${fontStyle.family}`],
                  },
                })}
                <button
                  type="button"
                  className={`${cx({ fontBtn: true })}`}
                  onClick={() => setFont(fontStyle.family)}
                >
                  <p
                    style={{
                      fontFamily: `${fontStyle.family}`,
                      fontSize: '24px',
                      lineHeight: '26px',
                      color: '#102A43',
                      marginBottom: '0',
                    }}
                  >
                    {text || 'Design Text'}
                  </p>
                  <span
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#627D98',
                    }}
                  >
                    {fontStyle.family}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

FontList.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  popularFonts: PropTypes.arrayOf(PropTypes.any).isRequired,
  setFont: PropTypes.func.isRequired,
  selectMenu: PropTypes.func.isRequired,
};

export default FontList;
