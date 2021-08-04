import { GetServerSideProps } from 'next'
import { Card } from '../components/Card';

import { Header } from '../components/Header';

import { Article } from '../types';

interface HomeProps {
  articles: Article[]
}

export default function Home({ articles }: HomeProps) {
  return (
    <div>
      <Header />

      <section className="hero">
        <div className="container">
          <div>
            <h2>
              As melhores tecnologias em programação, direto ao ponto e do jeito
              certo.
            </h2>
            <p>
              No meio de tanta informação e da quantidade de ferramentas que
              surgem todos os dias, você precisa de alguém que te leve na direção
              certa.
            </p>
            <a href="#" className="button">Quero embarcar neste foguete!</a>
          </div>
          <img
            src="./images/melhores-tecnologias.svg"
            alt=""
          />
        </div>
      </section>

      <main>
        <section className="cards">
          {articles.map(article => <Card key={article.video_id} article={article} /> )}
        </section>
      </main>

      <section id="form">
        <form action="">
          <h3>Quero Estudar na Rocket!</h3>
          <div className="form-group">
            <input className="input-control" placeholder="Nome" />

            <input type="email" className="input-control" placeholder="Email" />
          </div>

          <div className="form-group">
            <input className="input-control" placeholder="Empresa" />
          </div>

          <div className="form-group">
            <input className="input-control" placeholder="Endereço" />
          </div>

          <div className="form-group">
            <input className="input-control" placeholder="Cidade" />
            <input className="input-control" placeholder="Estado"/>
            <input className="input-control" placeholder="CEP"/>
          </div>

          <div className="form-group">
            <button type="submit" className="button">Save</button>

          </div>

        </form>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/articles')
  const articles = await response.json();

  return {
    props: {
      articles 
    }
  }
}
