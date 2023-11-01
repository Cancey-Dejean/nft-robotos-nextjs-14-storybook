export type StatsColumnProps = {
  title: string
  text: string
}

const StatsColumn = ({ title, text }: StatsColumnProps) => {
  return (
    <div className="rarity-row">
      <div className="rarity-number">{title}</div>
      <div className="rarity-row-text">{text}</div>
    </div>
  )
}

export default StatsColumn
