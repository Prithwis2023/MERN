import { useState, useEffect } from "react";
import "./Carousal.css"; 

const videoIds = ["KGCE7i_OT-Q", "RTRl_uikc9s", "3JZ_D3ELwOQ"];
const milIds = ["MClH6rC-gvA", "1YQb-DcQ4mQ", "VTQ8yZSyrC0"];
const sportsIds = ["XbIkwp-Wjt0", "vgTleD5JQfg", "eza0-3ex1wY"];

export const Carousal = () => {
  const [index1, setIndex1] = useState(0); 
  const [index2, setIndex2] = useState(0); 
  const [index3, setIndex3] = useState(0); 

 
  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prevIndex) => (prevIndex === videoIds.length - 1 ? 0 : prevIndex + 1));
    }, 13000); 
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setIndex2((prevIndex) => (prevIndex === milIds.length - 1 ? 0 : prevIndex + 1));
    }, 20000); 
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setIndex3((prevIndex) => (prevIndex === sportsIds.length - 1 ? 0 : prevIndex + 1));
    }, 17000); 
    return () => clearInterval(interval3);
  }, []);

  return (
    <div className="youtube-slider">
      <div className="child">
        <iframe
          key={videoIds[index1]} 
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoIds[index1]}?autoplay=1&mute=1`}
          title="YouTube video player 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="child">
        <iframe
          key={milIds[index2]} 
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${milIds[index2]}?autoplay=1&mute=1`}
          title="YouTube video player 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="child">
        <iframe
          key={sportsIds[index3]} 
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${sportsIds[index3]}?autoplay=1&mute=1`}
          title="YouTube video player 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
