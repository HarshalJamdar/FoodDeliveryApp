import ShimmerCard from  './ShimmerCard';

const Shimmer = () => {
    return (
        <div className='shimmer-cotainer'>
            {Array.from({ length: 20 }).map((i) => (
                <ShimmerCard key={i} />
            ))}
        </div>
    );
}

export default Shimmer;
