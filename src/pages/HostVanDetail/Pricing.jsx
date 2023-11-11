import { useOutletContext } from "react-router-dom"

export default function Pricing() {
    const { price } = useOutletContext()

    return <h3>{price}$ per day. ({price * 6}$ per week)</h3>
}