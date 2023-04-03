import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className="search flex center">
        <input type="text" />
        <SearchIcon />
    </div>
  )
}

export default Search