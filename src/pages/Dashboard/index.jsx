import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Modal, message } from 'antd';
import axios from 'axios';

import ResizableContent from '../../components/ResizableContent';
import '../../components/ResizableContent/style.css';
import styles from './Dashboard.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidemenu from '../../components/Sidemenu';
import Submenu from '../../components/Submenu';
import EditText from '../../components/EditText';
import ImageUploader from '../../components/ImageUploader';
import FontList from '../../components/EditText/FontList';

import { ReactComponent as UndoIcon } from './img/undo.svg';
import { ReactComponent as RedoIcon } from './img/redo.svg';
import { ReactComponent as FrontImage } from './img/front.svg';
import { ReactComponent as BackImage } from './img/back.svg';
import { ReactComponent as RightSleeve } from './img/rightSleeve.svg';
import { ReactComponent as LeftSleeve } from './img/leftSleeve.svg';

const Dashboard = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('');
  const [open, setOpen] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [popularFonts, setPopularFonts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('TEMPLATE');
  const [content, setContent] = useState(<Submenu />);
  const cx = classNames.bind(styles);

  const changeFont = (option) => {
    setFont(option);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };

  const handleCancel = () => setPreviewVisible(false);

  const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    async onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        if (!info.file.url && !info.file.preview) {
          info.file.preview = await getBase64(info.file.originFileObj);
        }

        setPreviewImage(info.file.url || info.file.preview);
        setPreviewTitle(
          info.file.name ||
            info.file.url.substring(info.file.url.lastIndexOf('/') + 1)
        );
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {},
  };

  useEffect(() => {
    switch (selectedMenu) {
      case 'TEXT':
        setContent(
          <EditText
            onChange={handleChange}
            text={text}
            selectMenu={onMenuClick}
          />
        );
        break;
      case 'TEMPLATE':
        setContent(<Submenu />);
        break;
      case 'UPLOAD':
        setContent(
          <ImageUploader
            handlePreview={handlePreview}
            handleCancel={handleCancel}
            props={props}
          />
        );
        break;
      case 'FONT':
        setContent(
          <FontList
            onChange={handleChange}
            text={text}
            font={font}
            popularFonts={popularFonts}
            setFont={changeFont}
            selectMenu={onMenuClick}
          />
        );
        break;
      default:
        setContent(<Submenu />);
    }
  }, [selectedMenu]);

  useEffect(async () => {
    const request = await axios.get(
      'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkmgQ1HZCDkVzVehaKzoVyLfLbF_btqxo&sort=popularity'
    );
    const popularity = request.data.items.slice(0, 8);

    setPopularFonts(popularity);
  }, []);

  return (
    <>
      <Header selectMenu={onMenuClick} selectedMenu={selectedMenu} />
      <div className="container-fluid">
        <div className="row">
          <Sidemenu selectMenu={onMenuClick} selectedMenu={selectedMenu} />

          {content}
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
                    {text && (
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
                            <text
                              x="50%"
                              y="70%"
                              style={{ fontFamily: `${font}` }}
                            >
                              {text}
                            </text>
                          </svg>
                        </div>
                      </ResizableContent>
                    )}

                    {previewImage && (
                      <ResizableContent
                        top={250}
                        left={750}
                        width={300}
                        height={100}
                        rotateAngle={0}
                      >
                        <div className="content content2">
                          <img
                            src={previewImage}
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                      </ResizableContent>
                    )}
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
      <Footer />
    </>
  );
};

export default Dashboard;
