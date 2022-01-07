import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import "./CharacterList.css";

import { RenderCharacters } from ".";

import {
  fetchCharacters,
  selectCharacters,
  selectError,
  selectStatus,
  // selectCategory,
} from "./../features/breakingBadApp/breakingBadSlice";

export const CharacterList = () => {
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const [categoryTerm, setCategoryTerm] = useState("category=Breaking+Bad");
  const [checked, setChecked] = useState("All");



  useEffect(() => {
    dispatch(fetchCharacters(categoryTerm));
  }, [categoryTerm]);


  const onSetCategory = e => {
    setChecked(e.target.value);
    let term = ""
    if (e.target.value !== "All") {
      term = `category=${e.target.value}`
    }
    setCategoryTerm(term);

  };

  if (error) return <p>Error: {error}</p>;
  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="characters__container">
      <div
        className="characters__categories"
      >
        <label className="characters__radio-label">
          <input className="character__radio-btn"
            type="radio"
            name="category"
            value="Breaking+Bad"
            onChange={onSetCategory}
            checked={checked === "Breaking+Bad"}
          /> Breaking Bad
        </label>

        <label className="characters__radio-label">
          <input className="character__radio-btn"
            type="radio"
            name="category"
            value="Better+Call+Saul"
            onChange={onSetCategory}
            checked={checked === "Better+Call+Saul"}
          /> Better Call Saul
        </label>
        
        <label className="characters__radio-label">
          <input className="character__radio-btn"
            type="radio"
            name="category"
            value="All"
            onChange={onSetCategory}
            checked={checked === "All"}
          /> All
        </label>
      </div>
      {/* <button className="characters__search-btn" type="submit">Search</button> */}
      <RenderCharacters />
    </div >
  )
}

