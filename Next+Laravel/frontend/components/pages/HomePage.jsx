import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import AnimatedNumber from "../AnimatedNumber";
import BookCard from "../BookCard";
import {
  categories,
  catalogBooks,
  stats,
  testimonialsData,
} from "../../data/siteData";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filteredBooks = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return catalogBooks
      .slice(0, 6)
      .filter((book) =>
        `${book.title} ${book.author}`.toLowerCase().includes(normalizedQuery),
      );
  }, [deferredQuery]);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2 className="hero-title reveal visible">
            Find and Borrow Books Easily
          </h2>
          <p className="hero-subtitle reveal visible">
            Access thousands of books anytime, anywhere.
          </p>

          <div className="search-box reveal visible">
            <input
              type="text"
              placeholder="Search by title, author, or category..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Link
              className="btn btn-primary"
              href={`/catalog${query ? `?category=${encodeURIComponent(query)}` : ""}`}
            >
              Cari
            </Link>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2 className="section-title reveal">Book Categories</h2>
          <ul className="categories-list reveal-group">
            {categories.map((category) => (
              <li className="category-item reveal" key={category.name}>
                <Link
                  href={`/catalog?category=${encodeURIComponent(category.name)}`}
                >
                  {category.name}
                </Link>{" "}
                ({category.count.toLocaleString("id-ID")} books)
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="popular-books">
        <div className="container">
          <h2 className="section-title reveal">Popular Books</h2>
          <div className="books-grid reveal-group">
            {filteredBooks.map((book) => (
              <BookCard key={book.title} book={book} reveal />
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title reveal">How It Works</h2>
          {[
            "Register - Buat akun gratis.",
            "Search Book - Temukan buku yang diinginkan.",
            "Request Borrow - Ajukan peminjaman.",
            "Pick Up Book - Ambil buku di perpustakaan.",
          ].map((step, index) => (
            <div className="step reveal" key={step}>
              <span className="step-number">{index + 1}. </span>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="statistics">
        <div className="container">
          <h2 className="section-title reveal">Statistics</h2>
          <div className="stats-grid reveal-group">
            {stats.map((stat) => (
              <p className="stat-item reveal" key={stat.label}>
                <AnimatedNumber target={stat.target} suffix={stat.suffix} />{" "}
                {stat.label}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title reveal">User Testimonials</h2>
          <div className="stats-grid reveal-group" style={{ gap: "20px" }}>
            {testimonialsData.map((testimoni) => (
              <div
                className="stat-item reveal"
                key={testimoni.name}
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
                  "{testimoni.comment}"
                </p>
                <h4>- {testimoni.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
