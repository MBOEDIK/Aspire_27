import { useState } from 'react';

export default function PasswordField({ id, name, placeholder, value, onChange }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="form-group">
            <label htmlFor={id}>Password:</label>
            <div style={{ position: 'relative' }}>
                <input
                    type={visible ? 'text' : 'password'}
                    id={id}
                    name={name}
                    required
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <button
                    type="button"
                    onClick={() => setVisible((current) => !current)}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        opacity: 0.6,
                        userSelect: 'none',
                        background: 'transparent',
                        border: 'none',
                    }}
                >
                    {visible ? 'Tutup' : 'Lihat'}
                </button>
            </div>
        </div>
    );
}
