import ellipse from '../../assets/ellipse.svg'

export function Card() {
  return (
    <div className="card w-[995px] h-[440px] -mt-4 z-10 flex shadow-lg shadow-gray-400">
      <div className="w-[60%] h-full bg-image-card bg-no-repeat bg-cover"></div>
      <div className="content flex flex-col pl-10 justify-center flex-1 gap-4 bg-white">
        <span className='text-[22px] text-gray opacity-50'>Como conseguir</span>
        <h2 className='font-serif text-[42px]'>Minha planta</h2>
        <div className="steps flex items-center gap-3">
          <img src={ellipse} alt="" />
          <p className='text-[22px] text-gray opacity-50'>Escolha suas plantas</p>
        </div>
        <div className="steps flex items-center gap-3">
          <img src={ellipse} alt="" />
          <p className='text-[22px] text-gray opacity-50'>Faça seu pedido</p>
        </div>
        <div className="steps flex items-center gap-3">
          <img src={ellipse} alt="" />
          <p className='text-[22px] text-gray opacity-50'>Aguarde na sua casa</p>
        </div>
      </div>
    </div >
  )
}