import { useEffect, useState } from 'react';

export default function AnimatedNumber({ target, suffix }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let frameId = 0;
        let start = 0;
        const duration = 1200;

        const animate = (timestamp) => {
            if (start === 0) {
                start = timestamp;
            }

            const progress = Math.min((timestamp - start) / duration, 1);
            setValue(Math.floor(target * progress));

            if (progress < 1) {
                frameId = window.requestAnimationFrame(animate);
            }
        };

        frameId = window.requestAnimationFrame(animate);

        return () => window.cancelAnimationFrame(frameId);
    }, [target]);

    return (
        <strong>
            {value.toLocaleString('id-ID')}
            {suffix}
        </strong>
    );
}
