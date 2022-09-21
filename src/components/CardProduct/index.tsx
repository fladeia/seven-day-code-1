import { ArrowRight } from 'phosphor-react'

interface CardProductProps {
  plantImage: string,
  title: string,
  price: string
}

export function CardProduct({ plantImage, title, price }: CardProductProps) {

  return (
    <div className="card-product w-[380px] h-[200px] flex shadow-lg shadow-gray-400">
      <div className="card-image w-[50%] h-full" >
        <img src={plantImage} alt="" />
      </div>
      <div className="card-details flex flex-col flex-1 justify-center">
        <h3 className='font-serif text-[32px] leading-tight'>{title}</h3>
        <span className='text-gray opacity-50'>R$ {price}</span>
        <div className="btn flex items-center gap-6 mt-3 text-yellow-light">
          <span>Comprar</span>
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}