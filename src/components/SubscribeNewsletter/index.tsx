import { useState } from 'react'
import { Envelope } from 'phosphor-react'
import heroImage from '../../assets/imagem-hero.png'
import { Card } from '../Card'
import { CardProduct } from '../CardProduct'
import plantImage from '../../assets/card-small-image-1.png'


export function SubscribeNewsletter() {
  const plants = ['Ajuga reptans', 'Cordyline fruticosa', 'Crassula ovata', 'Cyperus rotundus', 'Delairea odorata', 'Datura metel']
  const [email, setEmail] = useState('')

  function handleClick(e: React.SyntheticEvent) {
    console.log(email)
    setEmail('')
  }

  return (
    <>
      <div className="hero flex">
        <section className="left w-[585px] mt-24">
          <span className='text-[22px] text-gray opacity-50'>Sua casa com as</span>
          <h1 className='font-serif text-[82px] leading-tight'>Melhores plantas</h1>
          <p className='mt-6 text-gray opacity-50'>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <div className="subscribe w-full h-[75px] mt-9 flex  items-center shadow-lg shadow-gray-400 ">
            <label htmlFor="email">
              <Envelope size={24} className='w-16 text-placeholder text-gray opacity-50' />
            </label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Insira seu e-mail' className='flex-1 outline-none text-gray opacity-50' />
            <button type='submit' className='h-full px-10 bg-yellow text-white' onClick={handleClick}>Assinar Newsletter</button>
          </div>
        </section>
        <section className="right w-[618px]">
          <img src={heroImage} alt="" />
        </section>
      </div>
      <main className='flex flex-col items-center'>
        <Card />
        <span className='mt-8 text-gray opacity-50'>Conheça nossas</span>
        <h3 className='font-serif text-[82px]'>Ofertas</h3>
        <section className='grid grid-cols-3 gap-4 mb-32  '>
          {
            plants.map((item, index) => {
              return <CardProduct key={index} plantImage={plantImage} title={item} price='20,00' />
            })
          }
        </section>
      </main>
    </>
  )
}