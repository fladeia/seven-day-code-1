import { Envelope } from 'phosphor-react'
import heroImage from '../../assets/imagem-hero.png'
import { Card } from '../Card'

export function SubscribeNewsletter() {
  return (
    <>
      <div className="hero flex">
        <section className="left w-[585px] mt-24">
          <span className='text-[22px]'>Sua casa com as</span>
          <h1 className='text-[82px] leading-tight'>Melhores plantas</h1>
          <p className='mt-6'>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <div className="subscribe w-full h-[75px] mt-9 flex  items-center shadow-lg shadow-gray-400">
            <Envelope size={24} className='w-16 text-placeholder' />
            <input type="email" name="" id="" placeholder='Insira seu e-mail' className='flex-1 outline-none' />
            <button className='h-full px-10 bg-yellow text-white'>Assinar Newsletter</button>
          </div>
        </section>
        <section className="right w-[618px]">
          <img src={heroImage} alt="" />
        </section>
      </div>
      <main className='flex flex-col items-center'>
        <Card />
        <span className='mt-8'>Conheça nossas</span>
        <h3 className='text-[82px]'>Ofertas</h3>
        <section>
          cards
        </section>
      </main>
    </>
  )
}