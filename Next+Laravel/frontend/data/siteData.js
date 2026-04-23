export const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/catalog', label: 'Catalog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export const categories = [
    { name: 'Technology', count: 2500 },
    { name: 'Science', count: 1800 },
    { name: 'Novel', count: 4200 },
    { name: 'Business', count: 1500 },
    { name: 'History', count: 1200 },
    { name: 'Education', count: 1300 },
];

export const catalogBooks = [
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        year: 2016,
        status: 'available',
        statusLabel: 'Available',
        image: 'https://ebooks.gramedia.com/ebook-covers/34319/image_highres/ID_HCO2016MTH09TSAONGAF.jpeg',
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        year: 2018,
        status: 'reserved',
        statusLabel: 'Reserved',
        image: 'https://0.academia-photos.com/attachment_thumbnails/105741810/mini_magick20230915-1-9p5k2q.png?1694777602',
    },
    {
        title: 'Sapiens: Riwayat Singkat Umat Manusia',
        author: 'Yuval Noah Harari',
        year: 2011,
        status: 'available',
        statusLabel: 'Available',
        image: 'https://e-library.banjarmasinkota.go.id/storage/book_cover/1665980469_4084.jpeg',
    },
    {
        title: 'Factfulness',
        author: 'Hans Rosling, dkk.',
        year: 2018,
        status: 'reserved',
        statusLabel: 'Reserved',
        image: 'https://www.hachette.co.uk/wp-content/uploads/2019/04/hbg-title-factfulness-3-256.jpg',
    },
    {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        year: 2011,
        status: 'available',
        statusLabel: 'Available',
        image: 'https://cdn.gramedia.com/uploads/items/9786020637181_THINKING_FAST_AND_SLOW_C_1_4-1.jpg',
    },
    {
        title: 'Guns, Germs, and Steel',
        author: 'Jared Diamond',
        year: 1997,
        status: 'borrowed',
        statusLabel: 'Borrowed',
        image: 'https://m.media-amazon.com/images/I/81RdveuYXWL.jpg',
    },
    {
        title: 'The Emperor of All Maladies',
        author: 'Siddhartha Mukherjee',
        year: 2010,
        status: 'borrowed',
        statusLabel: 'Borrowed',
        image: 'https://m.media-amazon.com/images/I/61oFjl5O5wL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        title: 'Cosmos',
        author: 'Carl Sagan',
        year: 1980,
        status: 'available',
        statusLabel: 'Available',
        image: 'https://m.media-amazon.com/images/I/91uHpL1ATXL._UF1000,1000_QL80_.jpg',
    },
    {
        title: 'The Immortal Life of Henrietta Lacks',
        author: 'Rebecca Skloot',
        year: 2010,
        status: 'available',
        statusLabel: 'Available',
        image: 'https://m.media-amazon.com/images/I/811yGFJMOJL._UF1000,1000_QL80_.jpg',
    },
];

export const stats = [
    { label: 'Books', target: 12500, suffix: '+' },
    { label: 'Members', target: 3200, suffix: '+' },
    { label: 'Monthly Borrows', target: 850, suffix: '+' },
];

export const contactInfo = [
    {
        label: 'Lokasi Kami:',
        value: 'Jl. Raya ITS, Keputih, Sukolilo, Surabaya, Jawa Timur, Indonesia',
    },
    {
        label: 'Surat Elektronik (Email):',
        value: <a href="mailto:support@libraspire.com" className="contact-link">support@libraspire.com</a>,
    },
    {
        label: 'Jam Kunjungan:',
        value: (
            <>
                Senin - Jumat : 08.00 - 20.00 WIB
                <br />
                Sabtu - Minggu : 09.00 - 15.00 WIB
            </>
        ),
    },
];

export const teamMembers = [
    { initials: 'AR', name: 'Arya Raditya', role: 'Chief Librarian' },
    { initials: 'SN', name: 'Siti Nurbaya', role: 'Archive Specialist' },
    { initials: 'BP', name: 'Budi Perkasa', role: 'Technology Lead' },
    { initials: 'DL', name: 'Dewi Lestari', role: 'Community Manager' },
];
