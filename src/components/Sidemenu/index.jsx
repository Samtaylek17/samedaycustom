import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidemenu.module.css';
import { ReactComponent as TextIcon } from './img/text.svg';
import { ReactComponent as ImageIcon } from './img/image.svg';
import { ReactComponent as UploadIcon } from './img/upload.svg';
import { ReactComponent as ColorIcon } from './img/color.svg';
import { ReactComponent as TeamIcon } from './img/teamnames.svg';
import { ReactComponent as NoteIcon } from './img/notes.svg';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, name, className, selectedMenuIcon, onSelect }) => {
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    if (selectedMenuIcon !== name) setIsSelected(false);
  }, [selectedMenuIcon]);

  const onClick = (e) => {
    e.preventDefault();

    setIsSelected(true);
    onSelect();
  };

  return (
    <button
      type="button"
      className={`${cx({
        iconContainer: true,
        iconContainerSelected: isSelected,
      })} ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

const Sidemenu = () => {
  const [selectedMenuIcon, setSelectedMenuIcon] = useState('question');

  const menuItems = [
    {
      name: 'text',
      label: 'Add Text',
      className: 'text',
      icon: <TextIcon />,
      expands: true,
      containerWidth: '20%',
    },

    {
      name: 'image',
      label: 'Add Text',
      className: 'text',
      icon: <ImageIcon />,
      expands: true,
      containerWidth: '20%',
    },
    {
      name: 'text',
      label: 'Add Text',
      className: 'upload',
      icon: <UploadIcon />,
      expands: true,
      containerWidth: '20%',
    },
    {
      name: 'color',
      label: 'Add Text',
      className: 'text',
      icon: <ColorIcon />,
      expands: true,
      containerWidth: '20%',
    },
    {
      name: 'teamnames',
      label: 'Add Text',
      className: 'text',
      icon: <TeamIcon />,
      expands: true,
      containerWidth: '20%',
    },
    {
      name: 'notes',
      label: 'Add Text',
      className: 'text',
      icon: <NoteIcon />,
      expands: true,
      containerWidth: '20%',
    },
  ];
  return (
    <>
      <div className="col-md-2 d-flex flex-column">
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            className={item.className}
            selectedMenuIcon={selectedMenuIcon}
            onSelect={item.onSelect}
          />
        ))}
      </div>
    </>
  );
};

export default Sidemenu;
