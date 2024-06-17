import './tags.css';

export default function Tags({tags, index}) {
  return (
    <div className="tags">
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}