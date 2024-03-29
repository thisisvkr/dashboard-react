import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { BiShoppingBag } from 'react-icons/bi';
import { RiFileList2Line } from 'react-icons/ri';
import { RiBankCardLine } from 'react-icons/ri';

export const DataCards = [
  {
    icon: AiOutlineDollarCircle,
    heading: 'Earning',
    amount: 198,
    percentage: 37.8,
    period: 'this month',
    bgColor: '#d3f9d8',
    txtColor: '#37b24d',
  },
  {
    icon: RiFileList2Line,
    heading: 'Orders',
    amount: 2.4,
    percentage: 2,
    period: 'this month',
    bgColor: '#efc6ef',
    txtColor: '#860bb9',
  },
  {
    icon: RiBankCardLine,
    heading: 'Balance',
    amount: 2.4,
    percentage: 2,
    period: 'this month',
    bgColor: '#dbe4ff',
    txtColor: '#364fc7',
  },
  {
    icon: BiShoppingBag,
    heading: 'Total Sales',
    amount: 89,
    percentage: 11,
    period: 'this week',
    bgColor: '#ffa8a8',
    txtColor: '#c92a2a',
  },
];
