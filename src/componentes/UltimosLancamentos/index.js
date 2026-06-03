import styled from 'styled-components'
import comomagica from '../../imagens/filmes/comomagica.png'
import michael from '../../imagens/filmes/michael.png'
import cabra from '../../imagens/filmes/umcabrabomdebola.png'
import mestresuniverso from '../../imagens/filmes/mestresdouniverso.png'

const lancamentos = [
{ nome: 'Como Mágica', id: 1, src: comomagica },
{ nome: 'Michael: o filme', id: 2, src: michael },
{ nome: 'Um Cabra Bom de Bola', id: 3, src: cabra },
{ nome: 'Mestres do Universo', id: 4, src: mestresuniverso }
]
const LancamentosContainer = styled.section`
background-color: #F4F1EA;
padding: 50px 0;
text-align: center;
`
const Titulo = styled.h2`
color: #111;
font-size: 32px;
`
const Filmes = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
`
const FilmeCard = styled.div`
background-color: #fff;
width: 180px;
padding: 20px;
border-radius: 10px;
`
const Capa = styled.img`
width: 100px;
`
function UltimosLancamentos() {
return (
<LancamentosContainer>
<Titulo>Últimos Lançamentos</Titulo>
<Filmes>
{lancamentos.map(filme => (
<FilmeCard>
<Capa src={filme.src} alt={filme.nome} />
<p>{filme.nome}</p>
</FilmeCard>
))}
</Filmes>
</LancamentosContainer>
)
}
export default UltimosLancamentos