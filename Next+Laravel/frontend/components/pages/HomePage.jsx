import Link from "next/link";
import { useDeferredValue, useMemo, useState, useRef } from "react";
import AnimatedNumber from "../AnimatedNumber";
import BookCard from "../BookCard";
import { useToast } from "../../context/ToastContext";
import {
  categories,
  catalogBooks,
  stats,
  testimonialsData,
} from "../../data/siteData";

export default function HomePage() {
  const toast = useToast();
  
  // Ref untuk navigasi horizontal
  const categoryScrollRef = useRef(null);
  const bookScrollRef = useRef(null);

  const [query, setQuery] = useState("");
  const [listTestimonials, setListTestimonials] = useState([...testimonialsData]);
  const [newTesti, setNewTesti] = useState({ name: "", comment: "" });

  const deferredQuery = useDeferredValue(query);
  
  const filteredBooks = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();
    return catalogBooks
      .filter((book) =>
        `${book.title} ${book.author}`.toLowerCase().includes(normalizedQuery),
      );
  }, [deferredQuery]);

  // Fungsi navigasi scroll manual
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300; // Jarak geser dalam pixel
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (!newTesti.name.trim() || !newTesti.comment.trim()) {
      toast("Mohon isi nama dan komentar Anda.");
      return;
    }

    const entry = { name: newTesti.name, comment: newTesti.comment };
    setListTestimonials([...listTestimonials, entry]);
    setNewTesti({ name: "", comment: "" });
    toast("Terima kasih! Testimoni Anda telah ditambahkan.");
  };

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

      {/* SECTION CATEGORIES */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title reveal">Book Categories</h2>
          <div className="categories-scroll-container reveal" ref={categoryScrollRef}>
            <ul className="categories-list-horizontal">
              {categories.map((category) => (
                <li className="category-item-horizontal" key={category.name}>
                  <Link
                    href={`/catalog?category=${encodeURIComponent(category.name)}`}
                    className="category-card"
                  >
                    <span className="cat-name">{category.name}</span>
                    <span className="cat-count">{category.count.toLocaleString("id-ID")} books</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION POPULAR BOOKS WITH SLIDER & NAV */}
      <section className="popular-books">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title reveal">Popular Books</h2>
            {/* Tombol Navigasi Slider */}
            <div className="scroll-controls reveal">
              <button className="nav-btn" onClick={() => handleScroll(bookScrollRef, "left")}>&larr;</button>
              <button className="nav-btn" onClick={() => handleScroll(bookScrollRef, "right")}>&rarr;</button>
            </div>
          </div>
          
          <div className="books-slider-container reveal-group">
            <div className="books-slider" ref={bookScrollRef} style={{ display: 'flex', overflowX: 'auto', gap: '20px', scrollBehavior: 'smooth', padding: '10px 0' }}>
              {filteredBooks.map((book) => (
                <div className="book-slide-item" key={book.title} style={{ flex: '0 0 auto', width: '250px' }}>
                  <BookCard book={book} reveal />
                </div>
              ))}
            </div>
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
              <div className="stat-item reveal" key={stat.label}>
                <AnimatedNumber target={stat.target} suffix={stat.suffix} />{" "}
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title reveal">User Testimonials</h2>
        </div>
        
        <div className="testimonials-marquee">
          <div className="marquee-content">
            {listTestimonials.concat(listTestimonials).map((testimoni, index) => (
              <div className="testi-card" key={index}>
                <p className="testi-comment">"{testimoni.comment}"</p>
                <h4 className="testi-name">- {testimoni.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="container testi-input-container">
          <div className="contact-form-wrapper reveal" style={{ maxWidth: "500px", margin: "40px auto 0" }}>
            <form className="classic-form" onSubmit={handleAddTestimonial}>
              <h3 className="form-heading">Bagikan Pengalaman Anda</h3>
              <div className="form-group">
                <label>Nama Anda:</label>
                <input 
                  type="text" 
                  placeholder="Tuliskan nama..."
                  value={newTesti.name}
                  onChange={(e) => setNewTesti({...newTesti, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Komentar:</label>
                <textarea 
                  placeholder="Berikan kesan Anda terhadap LibrAspire..."
                  value={newTesti.comment}
                  onChange={(e) => setNewTesti({...newTesti, comment: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-primary">Kirim Testimoni</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}