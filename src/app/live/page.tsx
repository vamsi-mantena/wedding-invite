// pages/your-page.js
import "./page.css";

const YourPage = () => {
  return (
    <div className="">
      <div className="heading-wrapper">
        <h1>Jagadish & Naveena Wedding Live</h1>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/wysJBY851qc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Live Stream"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default YourPage;
