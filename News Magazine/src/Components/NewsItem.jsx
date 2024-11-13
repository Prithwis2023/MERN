import './NewsItem.css';
export const NewsItem = ({ title, description, src, url }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className='all'>
      <div className="card-item">
        <img src={src?src:"https://img.freepik.com/free-vector/hand-drawn-news-studio-background_23-2149928932.jpg?uid=R173219278&ga=GA1.1.1712717183.1731267559&semt=ais_hybrid"} className="card-img-top" alt="News image" />
        <div className="card-body">
          <h5 className="card-title">
            {truncateText(title, 50)}
          </h5>
          <p className="card-text">
            {description ? truncateText(description, 60) : "Checkout the full event..."}
          </p>
          <a href={url} className="btn" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

