import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectCharacters } from '../features/breakingBadApp/breakingBadSlice';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./CharacterList.css";

export const RenderCharacters = () => {
  // const [characters, setCharacters] = useState(props.characters);
  const characters = useSelector(selectCharacters);

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const charsPerPage = 10;
  const pagesVisited = pageNum * charsPerPage;
  const pageCount = Math.ceil(characters.length / charsPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected)
  };

  //add filter here
  const displayCharacters = characters.filter((val) => {
    if (searchTerm === "") {
      return val;
    }
    return val.name.toLowerCase().includes(searchTerm.toLowerCase());
  })
    .slice(pagesVisited, pagesVisited + charsPerPage)
    .map((character) => {
      return (
        <Card className="characters__card" key={character.char_id}>
          <Card.Body>
            <Link
              className="characters__Link"
              to={`/characters/${character.char_id}/${character.name}`}>
              <ul className="characters__list">
                <li>
                  <h2>{character.name}</h2>
                </li>
                <li>
                  <h4>Occupation: </h4>"{character.occupation[0]}" {character.occupation[1] ? `"${character.occupation[1]}"` : ""}
                </li>
                <li>DOB: "{character.birthday}"</li>
                <li><b>{character.status}</b></li>
              </ul>
            </Link>
          </Card.Body>
        </Card>
      )
    })
  //TODO
  //filter by names

  return (
    <div className="characters__container">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="characters__filter-input"
        type="text"
        placeholder="Filter by name..."
      />
      <div className="characters__list-container">
        {characters && displayCharacters}
      </div>
      <ReactPaginate
        previousLabel={"<<<"}
        nextLabel={">>>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeLinkClassName={"paginationActive"}
      />
    </div>
  )
}
