import { Layout } from "../../../components/Layout/Layout"
import { ItemListContainer } from "../../ItemListContainer/ItemListContainer"

export const Home = () => {
    const ItemListContainerProp = {
        greeting: "hola bienvenido",
        bg_verde: false
    }

    return (
        <Layout>
            <ItemListContainer { ...ItemListContainerProp}/>
        </Layout>
    )
}