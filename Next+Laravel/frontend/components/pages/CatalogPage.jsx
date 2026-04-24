import { useRouter } from "next/router";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import BookCard from "../BookCard";
import { catalogBooks, categories } from "../../data/siteData";

export default function CatalogPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const category = router.query.category;
    setQuery(typeof category === "string" ? category : "");
  }, [router.query.category]);

  const filteredBooks = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return catalogBooks.filter((book) => {
      if (normalizedQuery === "") {
        return true;
      }

      const searchableString =
        `${book.title} ${book.author} ${book.category || ""}`.toLowerCase();
      return searchableString.includes(normalizedQuery);
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
              <div
                className="category-filters reveal visible"
                style={{
                  marginTop: "15px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setQuery(cat.name)}
                  >
                    {cat.name}
                  </button>
                ))}
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => setQuery("")}
                  style={{ backgroundColor: "#ccc", color: "#333" }}
                >
                  Reset
                </button>
              </div>
            </div>
          </section>

          <div className="books-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.title} book={book} />
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
