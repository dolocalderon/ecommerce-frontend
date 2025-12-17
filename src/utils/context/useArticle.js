import { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";

export function useArticle() {
    const context = useContext(ArticleContext);
    if (context === undefined) {
        throw new Error("El contexto no esta proveido para este componente.")
    }
    return context;
}