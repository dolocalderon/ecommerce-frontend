import { createContext, useEffect, useState } from "react"
import { webUrlEcommerce } from "../utils/urlConfig";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchGetAllProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `${webUrlEcommerce}article/get-all-article`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            if (response.ok) {
                const data = await response.json();
                setArticles(data);
                console.log("ARTICLES FROM BACKEND:", data);
            } else {
                console.error("Error al obtener los productos, codigo de estado:", response.status);
                setArticles([]);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            setArticles([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGetAllProducts();
    }, [])

    return (
        <ArticleContext.Provider
            value={{
                articles,
                loading
            }}
        >
            {children}
        </ArticleContext.Provider>
    )
}

