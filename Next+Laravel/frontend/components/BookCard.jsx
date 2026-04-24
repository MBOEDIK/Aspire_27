export default function BookCard({ book, reveal = false }) {
    return (
        <article className={`book-card${reveal ? ' reveal' : ''}`} style={{ position: 'relative' }}>
            {book.year >= 2016 && (
                <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#ffd700', color: '#000', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold', zIndex: 2 }}>
                    Baru
                </span>
            )}
            <img className="book-cover" src={book.image} alt={book.title} />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">
                Penulis: {book.author} ({book.year})
            </p>
            <p className="book-status">
                Status: <span className={`badge ${book.status}`}>{book.statusLabel}</span>
            </p>
        </article>
    );
}