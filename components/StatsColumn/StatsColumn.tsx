export type StatsColumnProps = {
  /**
   * Description goes here
   */
  title: string
  /**
   * Description goes here
   */
  text: string
}

const StatsColumn = ({ title = "Title", text = "Text" }: StatsColumnProps) => {
  return (
    <div className="rarity-row">
      <div className="rarity-number">{title}</div>
      <div className="rarity-row-text">{text}</div>
    </div>
  )
}

export default StatsColumn
