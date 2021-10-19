import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import WebFont from 'webfontloader';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import styles from './FontList.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';

const FontList = ({ onChange, text, font }) => {
  const [popularFonts, setPopularFonts] = useState([]);
  const cx = classNames.bind(styles);

  useEffect(async () => {
    const request = await axios.get(
      'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkmgQ1HZCDkVzVehaKzoVyLfLbF_btqxo&sort=popularity'
    );
    const popularity = request.data.items.slice(0, 8);

    setPopularFonts(popularity);
    console.log(popularity);
  }, []);

  return (
    <>
      <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
        <div className="col-md-12">
          <p className={`${cx({ changeFont: true })} text-center mt-2`}>
            Change Font
            <CloseIcon className="float-end mt-2 cursor-pointer" />
          </p>
          <Input
            placeholder="Design Text"
            className={`${cx({ textInput: true })}`}
            onChange={onChange}
          />

          <ul className="list-unstyled text-center">
            {popularFonts.map((fontStyle) => (
              <li key={fontStyle.family} className="border-bottom py-2">
                {WebFont.load({
                  google: {
                    families: [`${fontStyle.family}`],
                  },
                })}
                <p
                  style={{
                    fontFamily: `${fontStyle.family}`,
                    fontSize: '24px',
                    lineHeight: '26px',
                    color: '#102A43',
                    marginBottom: '0',
                  }}
                >
                  Design Text
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
};

export default FontList;
