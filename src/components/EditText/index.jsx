import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './EditText.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { ReactComponent as AngleDown } from './img/angle-down.svg';

const EditText = ({ onChange, text, selectMenu }) => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
        <div className="col-md-12">
          <p className={`${cx({ editText: true })} text-center mt-2`}>
            Edit Text
            <CloseIcon className="float-end mt-2 cursor-pointer" />
          </p>

          <Input
            placeholder="Design Text"
            className={`${cx({ textInput: true })}`}
            onChange={onChange}
          />
          <div
            tabIndex={0}
            onKeyDown={() => selectMenu('FONT')}
            role="button"
            onClick={() => selectMenu('FONT')}
            className={`${cx({
              cursor: true,
            })} d-flex justify-content-between mt-3 border-bottom`}
          >
            <p>Font</p>
            <p>
              Inter <AngleDown />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

EditText.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  selectMenu: PropTypes.func.isRequired,
};

export default EditText;
