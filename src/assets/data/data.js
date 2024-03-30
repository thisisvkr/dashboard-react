import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { RiFileList2Line } from 'react-icons/ri';
import { TbDashboard } from 'react-icons/tb';
import { AiFillCodeSandboxSquare } from 'react-icons/ai';
import { PiUserSquareBold } from 'react-icons/pi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { LuBadgePercent } from 'react-icons/lu';
import { MdOutlineLiveHelp } from 'react-icons/md';
import {
  MdOutlineDashboard,
  MdOutlineAttachMoney,
  MdOutlineHelpOutline,
} from 'react-icons/md';
import { FaProductHunt } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiOutlineUser } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';

export const SidebarData = [
  {
    icon: MdOutlineDashboard,
    title: 'Dashboard',
  },
  {
    icon: FaProductHunt,
    title: 'Product',
  },
  {
    icon: AiOutlineUser,
    title: 'Customers',
  },
  {
    icon: MdOutlineAttachMoney,
    title: 'Income',
  },
  {
    icon: LuBadgePercent,
    title: 'Promote',
  },
  {
    icon: BiSupport,
    title: 'Help',
  },
];

export const DataCards = [
  {
    icon: AiOutlineDollarCircle,
    heading: 'Earning',
    amount: 198,
    growthPercentage: 37.8,
    period: 'this month',
    bgColor: '#d3f9d8',
    txtColor: '#37b24d',
  },
  {
    icon: RiFileList2Line,
    heading: 'Orders',
    amount: 2.4,
    growthPercentage: 2,
    period: 'this month',
    bgColor: '#efc6ef',
    txtColor: '#860bb9',
  },
  {
    icon: RiFileList2Line,
    heading: 'Balance',
    amount: 2.4,
    growthPercentage: 2,
    period: 'this month',
    bgColor: '#dbe4ff',
    txtColor: '#364fc7',
  },
  {
    icon: BiShoppingBag,
    heading: 'Total Sales',
    amount: 89,
    growthPercentage: 11,
    period: 'this week',
    bgColor: '#ffa8a8',
    txtColor: '#c92a2a',
  },
];
