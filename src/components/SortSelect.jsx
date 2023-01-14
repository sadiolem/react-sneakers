import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './SortSelect.module.scss';

function SortSelect({ onChange, options, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].title);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const handleSelect = (option) => {
    if (option.title === selectedValue) {
      toggleOpen();
      return;
    }

    setSelectedValue(option.title);
    toggleOpen();
    onChange(option.value);
  };

  return (
    <div className={`${styles['sort-select']} ${className}`}>
      <button type="button" className={`${styles.selected} ${isOpen && styles.opened}`} onClick={toggleOpen}>
        {selectedValue}
      </button>
      {
        isOpen
          && (
          <div className={styles.dropdown}>
            {
              options.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SortItem key={index} option={option} onItemClick={handleSelect} />
              ))
            }
          </div>
          )
      }
    </div>
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

function SortItem({ option, onItemClick }) {
  const handleClick = () => {
    onItemClick(option);
  };

  return (
    <button type="button" onClick={handleClick}>{ option.title }</button>
  );
}

SortItem.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
