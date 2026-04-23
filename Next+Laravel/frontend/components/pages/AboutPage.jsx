import { teamMembers } from '../../data/siteData';

export default function AboutPage() {
    return (
        <main>
            <section className="about-hero">
                <div className="container">
                    <h2 className="about-title reveal">Our Story</h2>
                    <p className="hero-subtitle reveal">Membangun Jembatan Pengetahuan Sejak 2010.</p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="grid-2">
                        <div className="about-image reveal">
                            <img
                                src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-583816330-crop.jpg?w=2880&quality=85"
                                alt="Sejarah LibrAspire"
                                style={{ width: '100%', border: '4px solid var(--color-accent-main)', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                        <div className="about-text reveal">
                            <h2 className="section-title">Who We Are</h2>
                            <p>
                                LibrAspire berawal dari sebuah komunitas kecil pecinta buku di Surabaya yang bermimpi untuk
                                mendigitalkan akses literasi bagi semua kalangan. Kami percaya bahwa pengetahuan harus dapat
                                diakses tanpa batasan fisik.
                            </p>
                            <p>
                                Dengan koleksi yang kini mencapai lebih dari 12.000 judul, kami terus bertransformasi menjadi
                                perpustakaan modern yang menggabungkan kenyamanan akses digital dengan kedalaman koleksi fisik.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-vision">
                <div className="container">
                    <div className="grid-2 reveal-group">
                        <div className="card reveal">
                            <h3>Visi Kami</h3>
                            <p>
                                Menjadi pusat literasi digital terdepan di Indonesia yang menginspirasi setiap individu untuk
                                terus belajar dan bertumbuh melalui akses bacaan berkualitas.
                            </p>
                        </div>
                        <div className="card reveal">
                            <h3>Misi Kami</h3>
                            <p>
                                Menyediakan sistem peminjaman yang transparan, merawat koleksi literasi yang beragam, dan
                                membangun ekosistem pembaca yang aktif dan kritis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <h2 className="section-title reveal">The Curators</h2>
                    <p className="reveal">Para penggerak di balik layar yang memastikan setiap buku sampai ke tangan Anda.</p>

                    <div className="team-grid reveal-group">
                        {teamMembers.map((member) => (
                            <div className="team-member reveal" key={member.name}>
                                <div className="member-img">{member.initials}</div>
                                <h3>{member.name}</h3>
                                <p className="color-text-muted">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
