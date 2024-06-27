import './host.css'

export default function Host({name, picture}) {
  return (
    <figure className="host">
      <figcaption>{name}</figcaption>
      <img src={picture} alt={name}/>
    </figure>
  )
}