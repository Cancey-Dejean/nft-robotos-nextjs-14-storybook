export type InventoryProps = {
  textColor?: string
  bgColor?: string
  invAvailable?: number
  invTotal?: number
  cryptoType?: string
}

const Inventory = ({
  textColor = "inherit",
  bgColor = "inherit",
  invAvailable = 8208,
  invTotal = 9999,

  cryptoType = "ETH",
}: InventoryProps) => {
  const num = invAvailable / invTotal
  const average = Number(num).toFixed(2)
  // const average = Number(invAverage).toFixed(2)
  return invAvailable > 0 ? (
    <div
      className={`inventory-area`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <div className="inventory-num">
        {invAvailable.toLocaleString()} of {invTotal.toLocaleString()} available
      </div>

      <div className="averages">
        {average} {cryptoType} per roboto
      </div>
    </div>
  ) : (
    <p>No information available</p>
  )
}

export default Inventory
