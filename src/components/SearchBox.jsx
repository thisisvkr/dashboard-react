import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBox.css';

function SearchBox() {
  const [description, setDescription] = useState('');
  return (
    <div className='search'>
      <BsSearch />
      <input
        type='text'
        placeholder='search'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
