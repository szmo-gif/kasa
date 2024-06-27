import './banner.css'

export default function Banner( {src, alt, title}) {
  return (
    <header className="banner">
      <img src={src} alt={alt}/>
      {{title} && <h1>{title}</h1>}
    </header>
  )
}