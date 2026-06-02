

function Intersection() {
    const options = { threshold: 1 };
    const observer = new IntersectionObserver( (entries) => {
        for(const entry of entries) {
            if (entry.isIntersecting) {
                
            }
        }
    }, options);
    
    return (
        <div>

        </div>
    );
}