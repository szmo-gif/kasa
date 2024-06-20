import './location-card.css'

export default function LocationCard({src, title, alt}) {
  return (
    <figure className="card">
      <img src={src} alt={alt} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}