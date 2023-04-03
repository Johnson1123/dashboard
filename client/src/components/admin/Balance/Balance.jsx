import './Balance.scss'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Balance() {
    const percent = 66;
    const sales = 860
  return (
    <div className='balance'>
        <div className="Btop flex">
            <p className="p-text">Amount Generated</p>
            <MoreVertIcon />         
        </div>
        <div className="Bcenter">
            <CircularProgressbar value={percent} text={`${percent}%`} className='bar'/>
            <p className="p-text">Today sales</p>
            <p className="p-text num">${sales}</p>
            <p className="p-text small">Recent transaction processed, last transaction might not be uploaded </p>
        </div>
        <div className="bottom flex">
            <div className="data">
                <p className="p-text">Target</p>
                <div className='negative'><KeyboardArrowDownIcon className='negative'/> 5.42k</div>
            </div>
            <div className="data">
                <p className="p-text">Last Week</p>
                <div className='p-text negative'><KeyboardArrowDownIcon className='negative'/> 5.42k</div>
            </div>
            <div className="data">
                <p className="p-text">Last Month</p>
                <div className='positive p-text'><KeyboardArrowUpIcon className='positive' /> 235.42k</div>
            </div>
        </div>
    </div>
  )
}

export default Balance