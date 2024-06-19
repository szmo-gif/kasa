import './not-found.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous recherchez n'existe pas</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </main>
  )
}