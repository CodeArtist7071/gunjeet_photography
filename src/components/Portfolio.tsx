import { useEffect, useRef } from 'react'

interface PortfolioItem {
    id: number
    image: string
    title: string
    category: string
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        image: '/gunjeet_photography/images/portfolio1.png',
        title: 'Urban Shadows',
        category: 'Architecture',
    },
    {
        id: 2,
        image: '/gunjeet_photography/images/portfolio2.png',
        title: 'Silent Silhouette',
        category: 'Portrait',
    },
    {
        id: 3,
        image: '/gunjeet_photography/images/portfolio3.png',
        title: 'Misty Mountains',
        category: 'Landscape',
    },
]

const Portfolio = () => {
    const portfolioRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const items = portfolioRef.current?.querySelectorAll('.portfolio-item')
        items?.forEach((item) => observer.observe(item))

        return () => {
            items?.forEach((item) => observer.unobserve(item))
        }
    }, [])

    return (
        <section id="portfolio" className="py-32 relative">
            <div className="container max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-24 opacity-0 translate-y-8 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">Portfolio</h2>
                    <p className="text-base md:text-lg text-muted-gray">
                        A curated selection of my recent work
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
                    ref={portfolioRef}
                >
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="portfolio-item reveal relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer bg-charcoal-dark shadow-medium transition-transform duration-normal hover:-translate-y-2 hover:shadow-strong group"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 gradient-overlay translate-y-full transition-transform duration-normal group-hover:translate-y-0">
                                <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-light uppercase tracking-widest">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
