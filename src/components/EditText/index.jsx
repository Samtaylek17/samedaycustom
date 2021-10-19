import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import styles from './EditText.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';

const EditText = ({ onChange, text }) => {
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
        </div>
      </div>
    </>
  );
};

EditText.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default EditText;
