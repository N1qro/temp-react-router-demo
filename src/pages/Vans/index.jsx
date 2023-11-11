import Filter from "./Filter";
import Card from "./Card"
import Container from "../../components/Container";
import { useState, useEffect } from "react";
import { CardWrapper } from "./index.styles";
import { useSearchParams, useLoaderData } from "react-router-dom";


export async function loader() {
    const data = await fetch("/api/vandata")
    const json = await data.json()
    return json
}


export default function Vans() {
    const vanData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")?.split(",") || ["simple", "rugged", "luxury"]


    const CardElements = vanData
                            .filter(obj => typeFilter.includes(obj.type.toLowerCase()))
                            .map(data => <Card key={data.id} {...data}/>)

    return (
        <Container>
            <Filter
                filterTypes={typeFilter}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
            <CardWrapper>
                {CardElements ? CardElements : "Loading..."}
            </CardWrapper>
        </Container>
    )
}