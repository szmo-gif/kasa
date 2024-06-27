import './tags.css';

export default function Tags({tags, index}) {
  return (
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
  )
}