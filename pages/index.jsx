import Image from 'next/image'
import Page from '../components/Page'
import Contato from '../components/Contato'
import Faixa from '../components/Faixa'
import Footer from '../components/Footer'
import Info3 from '../components/Info3'
import Info2 from '../components/Info2'
import Info1 from '../components/Info1'
import Info4 from '../components/Info4'
import Cards from '../components/Cards'
import Header from '../components/Header'

export default function Home() {
  return(
    <Page title="Plano de Saúde Intermédica Rio" description="Todos os planos de saúde Intermédica e simulador de planos de saúde online" path="/">
      <Header />
      <Info4 />
      <Info1 />
      <Cards />
      <Info2 />
      <Info3 />
      <Faixa />
      <Contato button="enviar" display='hidden' bg='bg-white' />
      <Footer/>
    </Page>
  )
}
