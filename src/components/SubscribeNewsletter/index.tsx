import { useFormik, FormikErrors } from 'formik'
import { Envelope } from 'phosphor-react'
import heroImage from '../../assets/imagem-hero.png'
import { Card } from '../Card'
import { CardProduct } from '../CardProduct'
import plantImage from '../../assets/card-small-image-1.png'
import { useState } from 'react'

interface Values {
  email: string
}

export function SubscribeNewsletter() {
  const [email, setEmail] = useState('')

  const validate = (values: Values) => {
    const errors: FormikErrors<Values> = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Insira um e-mail válido'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: values => {
      setEmail(values.email)
      // console.log(email)
      // alert(JSON.stringify(values, null, 2))


      // client.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY)

      // const request = {
      //   method: 'GET',
      //   url: 'https://api.sendgrid.com/v3/api_keys'
      // };

      // client.request(request)
      //   .then(([response, body]) => {
      //     console.log(response.statusCode);
      //     console.log(body);
      //   })

      // const msg = {
      //   to: { email },
      //   from: 'flavio@ladeia.dev.br',
      //   subject: 'Newsletter Casa Verde',
      //   text: 'Cadastro da newsletter Casa Verde',
      //   html: '<div><strong>Olá, Nome.</strong><p>Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.</p><span>Até logo!</span></div>'
      // }

      // sgMail
      //   .send(msg)
      //   .then(() => {
      //     console.log('Email send')
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })


    }
  })


  const plants = ['Ajuga reptans', 'Cordyline fruticosa', 'Crassula ovata', 'Cyperus rotundus', 'Delairea odorata', 'Datura metel']

  return (
    <>
      <div className="hero flex">
        <section className="left w-[585px] mt-24">
          <span className='text-[22px] text-gray opacity-50'>Sua casa com as</span>
          <h1 className='font-serif text-[82px] leading-tight'>Melhores plantas</h1>
          <p className='mt-6 text-gray opacity-50'>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="subscribe w-full h-[75px] mt-9 flex items-center shadow-lg shadow-gray-400 "
          >
            <label htmlFor="email">
              <Envelope size={24} className='w-16 text-placeholder text-gray opacity-50' />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder='Insira seu e-mail'
              className='flex-1 outline-none text-gray opacity-50'
            />
            {
              formik.errors.email
                ?
                <div className='text-xs px-1 text-center text-red-600'>{formik.errors.email}</div>
                :
                <button
                  type='submit'
                  className='h-full px-10 bg-yellow text-white'
                >
                  Assinar Newsletter
                </button>}

          </form>
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