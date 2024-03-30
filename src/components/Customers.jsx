import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './Customers.css';

function Customers() {
  return (
    <div className='customers-container'>
      <h1>Customers</h1>
      <p className='customer-sub-heading'> Customers that buy products</p>

      <div className='circular-bar'>
        <div className='progress-bar'>
          <CircularProgressbarWithChildren
            value={65}
            styles={buildStyles({
              pathColor: '#7549ea',
              trailColor: '#eee',
              strokeLinecap: 'butt',
            })}
          >
            {/* Foreground path */}
            <CircularProgressbar
              value={15}
              styles={buildStyles({
                trailColor: 'transparent',
                strokeLinecap: 'butt',
              })}
            />
            <div className='new-customers-container'>
              <strong>65%</strong>
              <p className='new-customers-paragraph'>Total new Customers</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}

export default Customers;
