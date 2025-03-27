import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavState = {
  itens: Produto[]
}

const initialState: FavState = {
  itens: []
}

const FavoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((fav) => fav.id === favoritos.id)) {
        state.itens = state.itens.filter((fav) => fav.id !== favoritos.id)
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { favoritar } = FavoritoSlice.actions

export default FavoritoSlice.reducer
