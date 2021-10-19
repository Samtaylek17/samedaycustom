/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Upload, message } from 'antd';
import classNames from 'classnames/bind';
import styles from './ImageUploader.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { ReactComponent as UploadIcon } from './img/upload-cloud.svg';

const ImageUploader = () => {
  const cx = classNames.bind(styles);

  const { Dragger } = Upload;

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
      <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
        <div className="col-md-12">
          <p className={`${cx({ header: true })} text-center mt-2`}>
            Upload Design
            <CloseIcon className="float-end mt-2 cursor-pointer" />
          </p>
          <p className={`${cx({ uploadLabel: true })}`}>
            Choose file to upload
          </p>
          <Dragger {...props} className={styles.dragger}>
            <p className="ant-upload-drag-icon">
              <UploadIcon />
            </p>
            <p className="ant-upload-text text-wrap px-5">
              Drag file here or browse your computer
            </p>
          </Dragger>
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
