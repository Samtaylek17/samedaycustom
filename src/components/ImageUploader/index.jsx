/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Upload, message, Modal } from 'antd';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ImageUploader.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { ReactComponent as UploadIcon } from './img/upload-cloud.svg';

const ImageUploader = ({ handlePreview, handleCancel, props }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const cx = classNames.bind(styles);
  const { Dragger } = Upload;

  return (
    <>
      <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
        <div className="col-md-12 p-1">
          <p className={`${cx({ header: true })} text-center mt-2`}>
            Upload Design
            <CloseIcon className="float-end mt-2 cursor-pointer" />
          </p>
          <p className={`${cx({ uploadLabel: true })} mt-4 mb-1`}>
            Choose file to upload
          </p>
          <Dragger
            {...props}
            onPreview={handlePreview}
            listType="picture-card"
            className={styles.dragger}
          >
            <p className="ant-upload-drag-icon">
              <UploadIcon />
            </p>
            <p className="ant-upload-text text-wrap px-5">
              Drag file here or browse your computer
            </p>
          </Dragger>

          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>

          <p className={`${cx({ uploadLabel: true })} mt-4`}>
            Accepted file types
          </p>
          <div className="mt-3">
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .PNG
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .JPEG
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .JPG
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .GIF
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .BMP
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .PDF
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .AI
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .PSD
            </button>
            <button type="button" className={`${cx({ fileTag: true })}`}>
              .EPS
            </button>
          </div>
          <p className={`${cx({ differentFile: true })} mt-3`}>
            Have a different type of file?{' '}
            <a href="mailto:ogunsusitemitayo99@gmail.com">Email it to us</a> and
            weʼll have it ready for you to use within a few hours!
          </p>
          <p className={`${cx({ uploadLabel: true })} mt-4`}>
            Copyright & Trademark
          </p>
          <p className={`${cx({ differentFile: true })} mt-3`}>
            By uploading your artwork you agree that you take full
            responsibility and have full rights to utilize the logo or mark on
            customized products.
          </p>
        </div>
      </div>
    </>
  );
};

ImageUploader.propTypes = {
  handlePreview: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ImageUploader;
