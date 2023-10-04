type ButtonProps= {
    styling:string
}

const SearchButton = ({styling}:ButtonProps) => {
  return (
    <div>
        <button className={`ml-3 z-10 ${styling}`}>
            <img src="/magnifying-glass.svg" width={40} height={40} />
        </button>
    </div>
  )
}

export default SearchButton