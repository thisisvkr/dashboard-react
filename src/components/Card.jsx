import PropTypes from 'prop-types';
import './Card.css';
function Card({ title, Icon, amount, percentage, period, background, color }) {
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
        <div className='percentage'>
          {percentage}% <span>{period}</span>
        </div>
      </div>
    </div>
  );
}

// import PropTypes from 'prop-types';
// import './Card.css';
// import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

// const Card = ({ png, title, value, growth, background, color, growthText }) => {
//   const Png = png;

//   return (
//     <div className="card">
//       <div className="png" style={{ background: background, color: color }}>
//         <Png />
//       </div>

//       <div className="info">
//         <p className="title">{title}</p>
//         <h2 className="value">${value}k</h2>
//         <p className="growth">
//           <span style={{ color: `${growth > 10 ? 'green' : 'red'}` }}>
//             {growth > 10 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
//             {growth}%
//           </span>
//           <span>{` ${growthText}`}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

Card.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.elementType.isRequired,
  amount: PropTypes.number,
  percentage: PropTypes.number,
  period: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

export default Card;
