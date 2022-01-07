import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacterById, getCharacters, getCharacterQuotes } from './breakingBadAPI';

const initialState = {
  characters: [],
  character: {},
  characterQuotes: [],
  status: 'idle',
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (category) => {
    const response = await getCharacters(category);
    return response;
  }
);//fetchCharacters by category

export const fetchCharacterById = createAsyncThunk(
  'characters/fetchCharacterById',
  async (id) => {
    const response = await getCharacterById(id);
    return response;
  }
);//fetch single character by id

export const fetchQuotesByName = createAsyncThunk(
  'characters/fetchQuotesByName',
  async (name) => {
    const response = await getCharacterQuotes(name);
    return response;
  }
 )

export const breakingBadSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "idle";
        state.characters = action.payload
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "errored";
        state.error = action.error.message;
      })

    builder
      .addCase(fetchCharacterById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.status = "idle";
        state.character = action.payload;
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.status = "errored";
        state.error = action.error.message;
      })
    
    builder
      .addCase(fetchQuotesByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuotesByName.fulfilled, (state, action) => {
        state.status = "idle";
        state.characterQuotes = action.payload
      })
      .addCase(fetchQuotesByName.rejected, (state, action) => {
        state.status = "errored";
        state.error = action.error.message;
      })
  }

});
export const selectCharacterQuotes = (state) => state.characters.characterQuotes;
export const selectCharacter = (state) => state.characters.character;
export const selectCategory = (state) => state.characters.category;
export const selectStatus = (state) => state.characters.status;
export const selectCharacters = (state) => state.characters.characters;
export const selectError = (state) => state.characters.error;

export default breakingBadSlice.reducer;