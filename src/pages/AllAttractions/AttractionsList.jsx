import React, { useEffect, useState } from "react";
import NewAttractCard from "./NewAttractCard";
import SearchBar from "../../components/SearchBar";
import magnifier from '../../assest/image/reviews/magnifier.svg';

function AttractionsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState("default");
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/List/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setError(error);
        setLoading(false);
      });
  }, []);


  const handleChange = (value, setStateFunction, resetPage = true) => {
    setLoading(true);
    setStateFunction(value);
    if (resetPage) setCurrentPage(1); 
    setTimeout(() => setLoading(false), 300); 
  };


  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => handleChange(e.target.value, setFilterType);
  const handleSortChange = (e) => handleChange(e.target.value, setSortBy);
  const handleSortDirectionChange = (e) => handleChange(e.target.value, setSortDirection);
  const paginate = (pageNumber) => handleChange(pageNumber, setCurrentPage, false); 

  const filteredData = data
    .filter((item) => {
      if (filterType !== "all") {
        return item.classSort === filterType;
      }
      return true;
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "popularity") {
      if (sortDirection === "desc") {
        return b.pop - a.pop;
      } else {
        return a.pop - b.pop;
      }
    }
    return 0;
  });

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__row">
          <div className="loader__item"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">Ошибка при загрузке данных: {error.message}</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <SearchBar data={data} onSearch={handleSearch} />

      <div className="attraction__wrap-sort">
        <div className="attraction__filter">
          <label className="attraction__filter-text">Фильтровать по типу: </label>
          <select
            className="attraction__filter-select"
            value={filterType}
            onChange={handleFilterChange} 
          >
            <option value="all">Все</option>
            <option value="temple">Храмы</option>
            <option value="museum">Музеи</option>
            <option value="teatr">Театры</option>
          </select>
        </div>

        <div className="attraction__sort">
          <label className="attraction__filter-text">Сортировать по: </label>
          <select
            className="attraction__sort-select"
            value={sortBy}
            onChange={handleSortChange} 
          >
            <option value="default">По умолчанию</option>
            <option value="popularity">По популярности</option>
          </select>

          {sortBy === "popularity" && (
            <select
              className="attraction__sort-select"
              value={sortDirection}
              onChange={handleSortDirectionChange} 
            >
              <option value="desc">По убыванию</option>
              <option value="asc">По возрастанию</option>
            </select>
          )}
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="search__none">
          <h2 className="search__none-text">Тут пока что ничего нет...</h2>
          <img className="search__none-img" src={magnifier} alt="лупа" />
        </div>
      ) : (
        <>
          <div className="attraction__wrap">
            {currentItems.map((item) => (
              <NewAttractCard
                key={item.pk}
                image={item.image}
                title={item.name}
                text={item.text}
                address={item.local}
                id={item.pk}
              />
            ))}
          </div>

          <div className="attraction__pagination">
            {Array.from(
              { length: Math.ceil(sortedData.length / itemsPerPage) },
              (_, i) => (
                <button
                  className="attraction__pagination-btn"
                  key={i + 1}
                  onClick={() => paginate(i + 1)} 
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default AttractionsList;