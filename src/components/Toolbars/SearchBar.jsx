import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { Search } from 'react-bootstrap-icons';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    //NOTE - searchTerm으로 API Call하는 부분
    e.preventDefault(); // Prevents page reload
    console.log(searchTerm); // Logs search term in console
    setSearchTerm(''); // Initializes placeholder after submission
  };

  return (
    <form className={styles.container_searchbar} onSubmit={handleSubmit}>
      <input
        className={styles.searchbar}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="게임을 검색해봐! 홍삼이 가르쳐줄게!"
      />
      <div className={styles.button_wrapper}>
        <button className={styles.submit_button}><Search /></button>
      </div>
    </form>
  );
};