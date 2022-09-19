import { ArrowRight } from 'phosphor-react'

interface CardSmallProps {
  title: string,
  id: number
}

export function CardSmall({ title, id }: CardSmallProps) {

  console.log(id + 1)
  return (
    <div className="card-small w-[380px] h-[200px] flex shadow-lg shadow-gray-400">
      <div className={`card-image w-[50%] h-full bg-image-card-small-${id + 1} bg-no-repeat bg-cover`}></div>
      <div className="card-details flex flex-col flex-1 justify-center">
        <h3 className='font-serif text-[32px] leading-tight'>{title}</h3>
        <span className='text-gray opacity-50'>R$ 20,00</span>
        <div className="btn flex items-center gap-6 mt-3 text-yellow-light">
          <span>Comprar</span>
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}