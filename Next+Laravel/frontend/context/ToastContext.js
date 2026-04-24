import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
const showToast = (message) => {
    const id = Date.now();
    
    // Hapus pesan sebelumnya agar tidak menumpuk, hanya sisakan yang terbaru
    setToasts([{ id, message }]); 
    
    setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
};
    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <div className="toast-container">
                {toasts.map((t) => (
                    <div key={t.id} className="toast">
                        {t.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    
    // Jika context tidak ditemukan, berikan peringatan di console bukannya crash
    if (context === undefined) {
        console.warn("Peringatan: useToast digunakan di luar ToastProvider!");
        return () => {}; // Kembalikan fungsi kosong agar tidak error "is not a function"
    }
    
    return context;
};