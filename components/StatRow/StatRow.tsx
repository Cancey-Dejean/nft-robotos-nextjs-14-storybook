export type StatRowListItem = {
  id?: string
  number?: string
  text?: string
}

export type StatRowColumn = {
  list?: StatRowListItem[]
}

export type StatRowProps = {
  title?: string
  columns?: StatRowColumn[]
}

const StatRow = ({ columns = [] }: StatRowProps) => {
  return (
    <>
      {columns.map((column, index) => (
        <div key={index}>
          <h4 className="rarity-title">{column.title}</h4>
          {column.list?.map((item) => (
            <div className="rarity-row" key={item.id}>
              <div className="rarity-number">{item.number}</div>
              <div className="rarity-row-text">{item.text}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default StatRow
