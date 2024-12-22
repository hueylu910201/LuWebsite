import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import styles from "../BackToTop/backtotop.module.css";
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);

      // Show/hide button
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  // Calculate the border gradient position
  const gradientDegree = (progress * 3.6); // Convert percentage to degrees (360 * progress / 100)

  if (!isVisible) return null;
  return (
    <div className={styles.container}>
      <button
        onClick={scrollToTop}
        className={styles.scrollButton}
        style={{
          background: `conic-gradient(
              #5BC1C5 ${gradientDegree}deg,
              #f0f0f0 ${gradientDegree}deg
            )`
        }}
      >
        <div className={styles.buttonInner}>
          <VerticalAlignTopOutlined />
        </div>
      </button>
    </div>
  );
}