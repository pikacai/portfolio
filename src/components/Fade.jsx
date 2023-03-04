import { useState, useEffect, useRef } from 'react';
import './fade.scss';

const Fade = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect( () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        const { current } = domRef;
        observer.observe(current);

        observer.observe(domRef.current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    );
}
 
export default Fade;