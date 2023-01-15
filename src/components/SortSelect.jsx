import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './SortSelect.module.scss';

function SortSelect({ onChange, options, className }) {
  const SPACEBAR_KEY = ' ';
  const ENTER_KEY = 'Enter';
  // const DOWN_ARROW_KEY = 40;
  // const UP_ARROW_KEY = 38;
  const ESCAPE_KEY = 'Escape';

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].title);

  function closeDropDown() {
    setIsOpen(false);
    // listContainer.setAttribute('aria-expanded', false);
  }

  function toggleDropDownVisibility(e) {
    const openDropDown = e.key === SPACEBAR_KEY || e.key === ENTER_KEY;

    if (e.key === ESCAPE_KEY) {
      closeDropDown();
    }

    if (e.type === 'click' || openDropDown) {
      setIsOpen(!isOpen);
      // listContainer.setAttribute(
      //   'aria-expanded',
      // );
    }

    // if (e.keyCode === DOWN_ARROW_KEY) {
    //   focusNextListItem(DOWN_ARROW_KEY);
    // }
    //
    // if (e.keyCode === UP_ARROW_KEY) {
    //   focusNextItem(UP_ARROW_KEY);
    // }
  }

  const selectValue = (e, option) => {
    toggleDropDownVisibility(e);
    setSelectedValue(option.title);
    onChange(option.value);
  };

  const handleItemClick = (e, option) => {
    if (option.title === selectedValue) {
      toggleDropDownVisibility(e);
      return;
    }

    selectValue(e, option);
  };

  const handleKeyDown = (e, option) => {
    if (option.title === selectedValue) {
      toggleDropDownVisibility(e);
      return;
    }

    switch (e.key) {
      case (ENTER_KEY):
        selectValue(e, option);
        break;

      case (SPACEBAR_KEY):
        selectValue(e, option);
        break;

        // case DOWN_ARROW_KEY:
        //   focusNexItem(DOWN_ARROW_KEY);
        //   break;
        //
        // case UP_ARROW_KEY:
        //   focusNextItem(UP_ARROW_KEY);
        //   break;

      case ESCAPE_KEY:
        toggleDropDownVisibility(e);
        break;

      default:
    }
  };

  return (
    <ul className={`${styles['sort-select']} ${className}`}>
      <li
        role="button"
        tabIndex="0"
        className={`${styles.selected} ${isOpen && styles.opened}`}
        onKeyDown={toggleDropDownVisibility}
        onClick={toggleDropDownVisibility}
      >
        {selectedValue}
      </li>
      {
        isOpen
          && (
          <li aria-expanded="false" role="list" className={styles.dropdown}>
            <ul role="listbox">
              {
                options.map((option, index) => (
                  <SortItem
                    key={index}
                    option={option}
                    onItemClick={handleItemClick}
                    onItemKeyDown={handleKeyDown}
                  />
                ))
              }
            </ul>
          </li>
          )
      }
    </ul>
  );
}

SortSelect.defaultProps = {
  options: [
    {
      value: '',
      title: 'По умолчанию',
    },
    {
      value: 'asc',
      title: 'По возрастанию цены',
    },
    {
      value: 'desc',
      title: 'По убыванию цены',
    },
  ],
  className: '',
};

SortSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  })),
  className: PropTypes.string,
};

export default SortSelect;

function SortItem({ option, onItemClick, onItemKeyDown }) {
  const handleClick = (e) => {
    onItemClick(e, option);
  };

  const handleKeyDown = (e) => {
    onItemKeyDown(e, option);
  };

  return (
    <li tabIndex="0" role="option" onKeyDown={handleKeyDown} onClick={handleClick}>{ option.title }</li>
  );
}

SortItem.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onItemKeyDown: PropTypes.func.isRequired,
};
