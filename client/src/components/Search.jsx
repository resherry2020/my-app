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
    <div>
      <div class="hstack gap-3 container p-5">
        <input
          class="form-control me-auto"
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
          type="text"
          placeholder="Type to search for products..."
          aria-label="Type to search for products..."
        />
        <button type="button" class="btn btn-secondary" onClick={clickButton}>
          Search
        </button>
      </div>
      <div>
        {isClick && (
          <ItemList
            items={foundItems}
            emptyHeading={<Warning clearSearch={clearSearch} />}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
