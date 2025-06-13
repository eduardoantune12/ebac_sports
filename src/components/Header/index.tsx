import * as S from './styles'
import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'
import { Produto } from '../../App'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)

  const valorTotal = itensNoCarrinho.reduce(
    (acc: number, item: Produto) => acc + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
