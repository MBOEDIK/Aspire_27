import { useRouter } from 'next/router';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import BookCard from '../BookCard';
import { catalogBooks } from '../../data/siteData';

export default function CatalogPage() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    useEffect(() => {
        const category = router.query.category;
        setQuery(typeof category === 'string' ? category : '');
    }, [router.query.category]);

    const filteredBooks = useMemo(() => {
        const normalizedQuery = deferredQuery.trim().toLowerCase();

        return catalogBooks.filter((book) => {
            if (normalizedQuery === '') {
                return true;
            }

            return `${book.title} ${book.author}`.toLowerCase().includes(normalizedQuery);
        });
    }, [deferredQuery]);

    return (
        <main>
            <section className="book-lists">
                <div className="container">
                    <section className="hero">
                        <div className="container">
                            <h2 className="section-title reveal">Book Lists</h2>
                            <div className="search-box reveal visible">
                                <input
                                    type="text"
                                    placeholder="Search by title, author, or category..."
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                <button className="btn btn-primary" type="button">
                                    Cari
                                </button>
                            </div>
                        </div>
                    </section>

                    <div className="books-grid reveal-group">
                        {filteredBooks.map((book) => (
                            <BookCard key={book.title} book={book} reveal />
                        ))}
                    </div>
                </div>
            </section>

            <section className="pagination">
                <div className="container">
                    <button type="button">&lt;&lt;</button>
                    <button type="button">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button">&gt;&gt;</button>
                </div>
            </section>
        </main>
    );
}
