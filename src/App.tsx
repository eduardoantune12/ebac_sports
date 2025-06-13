import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { addToCart } from './store/cartSlice'
import { toggleFavorite } from './store/favoritesSlice'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useEffect, useState } from 'react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  const carrinho = useSelector(
    (state: RootState) => state.cart.items
  ) as Produto[]
  const favoritos = useSelector((state: RootState) => state.favorites.items)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(addToCart(produto))
    }
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
