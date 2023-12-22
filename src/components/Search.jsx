import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Warning from "./Warning";

function Search(props) {
  const [searchText, setSearchText] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    setIsClick(false);
  }, [searchText]);

  function filterItems(items, searchText) {
    const searchTextLower = searchText.toLowerCase();
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchTextLower)
    );
  }

  function clickButton() {
    const items = filterItems(props.item, searchText);
    setFoundItems(items);
    setIsClick(true);
  }
  const clearSearch = () => {
    setSearchText("");
  };
  return (
    <>
      <div className="form ">
        <span>
          <input
            type="text"
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            placeholder="Type to search for products"
          />
        </span>
        <button onClick={clickButton}>
          <span>Search</span>
        </button>
      </div>
      {isClick && (
        <ItemList
          items={foundItems}
          emptyHeading={<Warning clearSearch={clearSearch} />}
        />
      )}
    </>
  );
}

export default Search;
