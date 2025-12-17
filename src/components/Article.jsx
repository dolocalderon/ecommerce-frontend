import {React, useEffect} from 'react'
import { useArticle } from '../utils/context/useArticle'

const Article = () => {

    const { articles, loading } = useArticle();

    if (loading) return <p>Cargando...</p>

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Artículos</h2>

            <ul className="space-y-2">
                {articles.map(article => (
                    <li
                        key={article.id}
                        className="border p-4 rounded-md"
                    >
                        <p className="font-semibold">{article.name}</p>
                        <p className="text-sm text-gray-500">{article.brand}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Article
