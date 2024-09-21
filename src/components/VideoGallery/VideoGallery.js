import React, { useEffect } from "react";
import styles from "./VideoGallery.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function VideoGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS cu durata de 1000ms
  }, []);

  return (
    <section className={styles.videoGallery}>
      <h2 className={styles.title} data-aos="fade-up">
        Videogalerie
      </h2>
      <div className={styles.grid}>
        <div className={styles.videoItem} data-aos="zoom-in">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IvBToRiExbk?si=N2dxRHFEHspxUtHY"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.videoItem} data-aos="zoom-in">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fXN-m49MHO0?si=lHj50aLbqjwtRIE2"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Adaugă alte videoclipuri similare */}
      </div>
    </section>
  );
}

export default VideoGallery;
