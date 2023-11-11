import { FilterButton } from "../../components/Button/button"
import { FlexRow, FilterText } from "./index.styles"

export default function Filter({ searchParams, filterTypes, setSearchParams }) {
    const typeMap = {
        "primary": "simple",
        "secondary": "luxury",
        "rugged": "rugged"
    }

    function handleClick(e) {
        const selectedVariant = e.target.attributes.variant.value

        const selectedType = typeMap[selectedVariant]

        setSearchParams({ type: selectedType })
    }

    const types = ["primary", "secondary", "rugged"]
    const Buttons = types.map(type => (
        <FilterButton
          key={type}
          onClick={handleClick}
          variant={type}
          IsActive={filterTypes.includes(typeMap[type])}
        >
          {type === "primary" ? "Simple" : type === "secondary" ? "Luxury" : "Rugged" }
        </FilterButton>
      ));

    return (
        <section>
            <FilterText>Explore our van options</FilterText>
            <FlexRow>
                {Buttons}
                {searchParams.get("type") && <button onClick={() => setSearchParams({})}>Clear filters</button>}
            </FlexRow>
        </section>
    )
}