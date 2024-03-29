"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { useWindowSize } from './hooks/useWindowSize'

const bgExt = "webp";

const DynamicBackgroundImage = ({ children }) => {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();
  const { width } = useWindowSize(); // Get the window width using the custom hook


  const isDarkTheme = theme === 'dark';
  const isMobile = width <= 768; // Adjust the breakpoint as needed for your mobile devices

  // Define your background images for light and dark themes
  const lightImages = [
    `/backgrounds/bg_engagement_light_1.${bgExt}`,
    `/backgrounds/bg_engagement_light_2.${bgExt}`,
    `/backgrounds/bg_engagement_light_3.${bgExt}`,
  ];
  const darkImages = [
    `/backgrounds/bg_engagement_dark_1.${bgExt}`,
    `/backgrounds/bg_engagement_dark_2.${bgExt}`,
    `/backgrounds/bg_engagement_dark_3.${bgExt}`,
  ];

  const mobileLightImages = [
    `/backgrounds/bg_engagement_light_mobile_1.${bgExt}`,
    `/backgrounds/bg_engagement_light_mobile_2.${bgExt}`,
    `/backgrounds/bg_engagement_light_mobile_3.${bgExt}`,
  ];

  const mobileDarkImages = [
    `/backgrounds/bg_engagement_dark_mobile_1.${bgExt}`,
    `/backgrounds/bg_engagement_dark_mobile_2.${bgExt}`,
    `/backgrounds/bg_engagement_dark_mobile_3.${bgExt}`,
    `/backgrounds/bg_engagement_dark_mobile_4.${bgExt}`,
  ];

  useEffect(() => {
    if (isMobile) {
      setBackgroundImages(isDarkTheme ? mobileDarkImages : mobileLightImages);
    } else {
      setBackgroundImages(isDarkTheme ? darkImages : lightImages);
    }
  }, [isDarkTheme, isMobile]);

  useEffect(() => {
    // Function to cycle through background images
    const interval = setInterval(() => {
      setBackgroundImages((prevImages) => {
        const lastIndex = prevImages.length - 1;
        const updatedImages = [...prevImages];
        updatedImages.unshift(updatedImages[lastIndex]);
        updatedImages.pop();
        return updatedImages;
      });
    }, 10000); // Change the interval duration here (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="background-carousel">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`background-image ${index === 0 ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
      <div className="content">{children}</div>

      <style jsx>{`
        .background-carousel {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .background-image.active {
          opacity: 1;
        }

        .content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default DynamicBackgroundImage