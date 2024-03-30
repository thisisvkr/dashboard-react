import PropTypes from 'prop-types';
import './Card.css';
import { HiOutlineArrowUp, HiOutlineArrowDown } from 'react-icons/hi2';
function Card({
  title,
  Icon,
  amount,
  growthPercentage,
  period,
  background,
  color,
}) {
  return (
    <div className='card'>
      <div
        className='icon-box'
        style={{ background: background, color: color }}
      >
        <Icon />
      </div>
      <div className='info'>
        <h1 className='title'>{title}</h1>
        <h1 className='value'>${amount}k</h1>
        <div
          className='percentage'
          style={{ color: growthPercentage > 10 ? '#2b8a3e' : '#c92a2a' }}
        >
          {growthPercentage > 10 ? (
            <HiOutlineArrowUp />
          ) : (
            <HiOutlineArrowDown />
          )}{' '}
          {growthPercentage}% <span>{period}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.elementType.isRequired,
  amount: PropTypes.number,
  growthPercentage: PropTypes.number,
  period: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

export default Card;
