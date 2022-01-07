import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {
  fetchCharacterById,
  selectCharacter,
  selectCharacterQuotes,
  selectStatus,
  selectError,
  fetchQuotesByName,
} from "./../features/breakingBadApp/breakingBadSlice";
import { NavBar, CharacterDetails, PageFrame } from "./../components";

export const CharacterDetailView = () => {

  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const params = useParams();


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacterById(params.id));
    dispatch(fetchQuotesByName(params.name))
  }, [dispatch, params]);

  if (error) return <p>Error: {error}</p>;
  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <PageFrame>
        <CharacterDetails />
      </PageFrame>
    </div>
  )
}
