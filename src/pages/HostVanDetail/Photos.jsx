import { useOutletContext } from "react-router-dom"
import { SquareImage } from "../../components/Images"

export default function Photos() {
    const { image, name } = useOutletContext()

    return (
        <>
            <br/>
            <SquareImage Size={250} src={image} alt={name} />
        </>
    )
}