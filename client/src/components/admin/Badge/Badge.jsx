import './Badge.scss'

import { Link } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Badge({type}) {
    let data;
    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                total: 700,
                link: 'See all users',
                href: '',
                percent: 20,
                icon: <PersonIcon />
            }
            break;
            case 'order':
            data = {
                title: 'Orders',
                total: 100,
                link: 'View all orders',
                href: '',
                percent: 10,
                icon: <AddShoppingCartIcon />
            }
            break; 
            case 'earning':
            data = {
                title: 'Earning',
                amount: 20.7,
                link: 'View all orders',
                href: '',
                percent: 50,
                icon: <MonetizationOnIcon />
            }
            break; 
            case 'balance':
            data = {
                title: 'Balance',
                amount: 10.7,
                link: 'See details',
                href: '',
                percent: 15,
                icon: <AccountBalanceWalletIcon />
            }
            break; 
    
        default:
            data = ''
            break;
    }
  return (
    <div className='badgeBox flex box-shadow'>
        <div className="Bleft">
            <p className="p-text label">{data.title}</p>
            <p className="p-text num">{data.amount ? `$${data.amount}` : data.total}</p>
            <Link to='/' className='p-text link'>{data.link}</Link>
        </div>
        <div className="Bright flex">
            <div className="iconRight flex center">
                {data.percent < 20 ? <KeyboardArrowDownIcon className='negative'/> : <KeyboardArrowUpIcon  className='positive'/> }
                <span className={data.percent < 20 ? `negative` : ` positive`}>{data.percent < 20 ? '-' : '+' }{data.percent} <span>%</span></span>
                
            </div>
            <span className='icon'>{data.icon}</span>
        </div>

    </div>
  )
}

export default Badge