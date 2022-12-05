
import Image from 'next/image'
import styles from './../styles/Home.module.css'

import img2 from './../img/quitaçao.jpg'
import img3 from './../img/antecipar.jpeg'
import img1 from './../img/2via.jpg'
import img4 from './../img/segunda-via-aguas-jahu.jpg'

export default function Home() {

  return (
    <main>
      <div className={styles.firstImage}>
        <Image src={img1} alt='acessoria GMAC' layout='responsive'/>
      </div>
      <div className={styles.content1}>
        <h1>ASSESSORIA G M A C</h1>
        <p>2 via de boleto Quitação de Contrato Antecipar Parcelas</p>
        <p>Abre às 09:00</p>

        <button>SOLICITAR COTAÇÃO</button>
      </div>

      <div className={styles.content2}>
        <h2>Como funciona</h2>

        <p>Negociamos a sua dívida e apresentamos proposta que caiba no seu bolso em um prazo de até 20 minutos, Analisamos a sua situação atual e orientamos sobre quais as melhores soluções para o seu caso, Você efetua o pagamento e pronto! O prazo para baixa leva de 24 horas.</p>
      </div>

      <div className={styles.content3}>
        <div>
          <Image src={img3} alt='acessoria' layout='responsive' />
        </div>
        <div>
          <Image src={img4} alt='acessoria' layout='responsive' />
        </div>
      </div>

      <div className={styles.content4}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106923674282!2d-46.655722999999995!3d-23.564602999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8ae7ba4af%3A0x464b6c004f08e8c0!2sAlameda%20Santos%2C%201343%20-%20Cj.%20712%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001419-001!5e0!3m2!1spt-BR!2sbr!4v1669295513257!5m2!1spt-BR!2sbr"
          width='100%' height='300px' loading="lazy"></iframe>
      </div>

      <footer className={styles.content5}>
        <div>
          <h3>Contato</h3>
          <button>SOLICITAR COTAÇÃO</button>
          <p>(11) 3415-7625</p>
        </div>
        <div>
          <h3>Endereço</h3>
          <button>SOLICITAR COTAÇÃO</button>
          <p>Alameda Santos, 1343 - CONJ 712 - Cerqueira César</p>
          <p>São Paulo - SP</p>
          <p>01419-002</p>
          <p>Brasil</p>
        </div>
        <div>
          <h3>Endereço</h3>
          <p>seg: 09:00-18:00</p>
          <p>ter: 09:00-18:00</p>
          <p>qua: 09:00-18:00</p>
          <p>qui: 09:00-18:00</p>
          <p>sex: 09:00-18:00</p>
          <p>sab: fechado</p>
          <p>dom: fechado</p>
        </div>
      </footer>
    </main>
  )
}