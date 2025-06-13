import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { toggleFavorite } from '../../store/favoritesSlice'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  aoComprar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const ProdutoComponent = ({
  produto,

  estaNosFavoritos
}: Props) => {
  const dispatch = useDispatch()

  const handleFavoritar = () => {
    dispatch(toggleFavorite(produto))
  }

  const handleComprar = () => {
    dispatch(addToCart(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
