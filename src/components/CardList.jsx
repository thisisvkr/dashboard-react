import { DataCards } from '../assets/data/data';
import Card from './Card';
import './CardList.css';

function CardList() {
  return (
    <div className='cards'>
      {DataCards.map(data => (
        <Card
          key={data.heading}
          title={data.heading}
          Icon={data.icon}
          amount={data.amount}
          growthPercentage={data.growthPercentage}
          period={data.period}
          background={data.bgColor}
          color={data.txtColor}
        ></Card>
      ))}
    </div>
  );
}

export default CardList;
