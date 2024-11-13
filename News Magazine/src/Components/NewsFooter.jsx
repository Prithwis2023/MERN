import "./NewsFooter.css";

const NewsFooter = () => {
  return (
    <footer className="news-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Your trusted source for breaking news, insightful analysis, and
            informative stories from around the world.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: newsdesk@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} NewsWebsite. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default NewsFooter;
