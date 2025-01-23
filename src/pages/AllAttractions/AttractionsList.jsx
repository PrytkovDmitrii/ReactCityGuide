import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NewAttractCard from "./NewAttractCard";
import SearchBar from "../../components/SearchBar";
import magnifier from "../../assest/image/reviews/magnifier.svg";

// import styles from  './asdasd.module.scss'

function AttractionsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("default");
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const fetchAttractions = async ({ queryKey }) => {
    const [, { filterType, sortBy, sortDirection, searchTerm }] = queryKey;

    const url = new URL(
      `https://6735da235995834c8a945ad9.mockapi.io/api/List/`,
    );

    if (filterType && filterType !== "all") {
      url.searchParams.append("classSort", filterType);
    }
    if (sortBy === "popularity") {
      url.searchParams.append("sortBy", "pop");
      url.searchParams.append("order", sortDirection);
    }
    if (searchTerm) {
      url.searchParams.append("name", searchTerm);
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }

    return response.json();
  };

  const {
    data: attractions = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: [
      "attractions",
      { filterType, sortBy, sortDirection, searchTerm },
    ],
    queryFn: fetchAttractions,
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = attractions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(attractions.length / itemsPerPage);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handleSortDirectionChange = (e) => {
    setSortDirection(e.target.value);
    setCurrentPage(1);
  };

  if (isLoading && !searchTerm) {
    return (
      <div className="loader">
        <div className="loader__row">
          <div className="loader__item"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">Ошибка при загрузке данных: {error.message}</div>
    );
  }

  return (
    <div>
      <SearchBar data={attractions} onSearch={handleSearch} />

      <div className="attraction__wrap-sort">
        <div className="attraction__filter">
          <label className="attraction__filter-text">
            Фильтровать по типу:{" "}
          </label>
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

      {currentItems.length === 0 ? (
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
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                className="attraction__pagination-btn"
                key={i + 1}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo(0, 0);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AttractionsList;
