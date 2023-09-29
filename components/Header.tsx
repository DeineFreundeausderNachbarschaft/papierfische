interface Props {
  type: string;
  query: string;
  category: string;
}

const Header = ({ type, query, category }: Props) => {
  if(query && category) {
    return (
      <h1 className="heading3 self-auto text-[darkgreen]">
        Suchergebnisse für &#34;{query}&#34; in <span className="capitalize">{category}</span>
      </h1>
    )
  }

  if(query) {
    return (
      <h1 className="heading3 self-auto text-[darkgreen]">
        Suchergebnisse für &#34;{query}&#34;
      </h1>
    )
  }

  if(category) {
    return (
      <h1 className="heading3 self-auto text-[darkgreen]">
        <span className="capitalize">{category}</span>
      </h1>
    )
  }

  return (
    <h1 className="heading3 self-auto text-[darkgreen] font-black">
      keine Ergebnisse
    </h1>
  )
}

export default Header