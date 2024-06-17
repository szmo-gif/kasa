import './locationCard.css'

export default function LocationCard({src, title, alt}) {
  return (
    <figure className="orange-card">
      <img src={src} alt={alt} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}