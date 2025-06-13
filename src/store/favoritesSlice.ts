import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type FavoritesState = {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.items.find((item) => item.id === produto.id)

      if (existe) {
        state.items = state.items.filter((item) => item.id !== produto.id)
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
