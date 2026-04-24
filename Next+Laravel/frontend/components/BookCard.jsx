export default function BookCard({ book, reveal = false }) {
    return (
        <article className={`book-card${reveal ? ' reveal' : ''}`}>
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
