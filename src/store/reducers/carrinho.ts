import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtos = action.payload

      if (state.itens.find((produto) => produto.id === produtos.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtos)
      }
    }
  }
})

export const { adicionar } = CarrinhoSlice.actions

export default CarrinhoSlice.reducer
