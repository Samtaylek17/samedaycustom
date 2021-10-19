import React from 'react';
import classNames from 'classnames/bind';
import styles from './Submenu.module.css';
import { ReactComponent as AddTextIcon } from './img/addText.svg';
import { ReactComponent as UploadLgIcon } from './img/upload-lg.svg';
import { ReactComponent as ImageTemplateIcon } from './img/imageTemplate.svg';
import { ReactComponent as ProductsIcon } from './img/products.svg';

const Submenu = () => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className="col-sm-auto col-md-3 d-sm-flex align-items-stretch">
        <div className="col-md-12 ">
          <p className={`${cx({ headline: true })} mt-5 text-center`}>
            What&apos;s next for you?
          </p>
          <div className="row justify-content-around mt-4">
            <div className={`${cx({ function: true })} col-md-6 text-center`}>
              <AddTextIcon className="img-fluid" />
              <p
                className={`${cx({
                  functionLabel: true,
                })} text-center mt-2`}
              >
                Add Text
              </p>
            </div>
            <div className={`${cx({ function: true })} col-md-6 text-center`}>
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
            <div className={`${cx({ function: true })} col-md-6 text-center`}>
              <UploadLgIcon className="img-fluid" />
              <p
                className={`${cx({
                  functionLabel: true,
                })} text-center mt-2`}
              >
                Upload Design
              </p>
            </div>
            <div className={`${cx({ function: true })} col-md-6 text-center`}>
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
    </>
  );
};

export default Submenu;
