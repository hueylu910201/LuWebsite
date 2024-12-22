import React, { useState, useRef, useEffect } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { motion, useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import styles from "../Daily/daily.module.css"

export default function Daily() {

    const ref = useRef(null); // 監控的元素
    const isInView = useInView(ref, { threshold: 0.5 }); // 元素至少有 50% 可見時觸發
    const [hasPlayed, setHasPlayed] = useState(false); // 是否已觸發動畫
  
    useEffect(() => {
      if (isInView && !hasPlayed) {
        setHasPlayed(true);
      }
    }, [isInView, hasPlayed]);
  
    // 打字動畫組件
    const TypingText = ({ text, speed }) => {
      const [displayedText, setDisplayedText] = useState("");
      const index = useRef(0);
  
      useEffect(() => {
        setDisplayedText("");
        index.current = 0;
  
        const interval = setInterval(() => {
          if (index.current < text.length) {
            setDisplayedText(text.slice(0, index.current + 1));
            index.current++;
          } else {
            clearInterval(interval);
          }
        }, speed);
  
        return () => clearInterval(interval);
      }, [text, speed]);
  
      return <p className="min-h-[24px]">{displayedText}</p>;
    };
    return (
        <div className={styles.aboutContainer}>
            {/* 視差背景 */}
            {/* <div
                className={styles.parallaxBackground}
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            /> */}

            <div className={styles.contentWrapper}>

                {/* 整個內容區塊一起移動 */}
                <motion.div
                    className={styles.mainContentWrapper}
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`
                    }}
                    initial={{ opacity: 0, y: 100 }} // Start hidden and slightly below
                    animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                    transition={{ duration: 0.7 }} // Animation duration
                >
                    <Row gutter={[48, 24]} align="middle" className={styles.mainContent}>
                        {/* 左側個人簡介 */}
                        <Col xs={24} md={12} className={styles.textColumn} >
                            <div className={styles.introText}>
                                <p className={styles.title}>關於我</p>
                                <TypingText
                                    text="熱愛運動的我，在大學中我同時參加了系籃與系排，很熟悉團隊合作與溝通，同時我也很喜歡剪輯自己的遊戲精華或記錄生活VLOG。我對於開發網頁、APP也有極高的興趣，目前仍持續學習新技術中!"
                                    speed={20} // 每個字母的顯示速度
                                />
                                <Button className={styles.learnButton} href='https://www.youtube.com/@huey_lu_0201'>我的頻道</Button>
                            </div>
                        </Col>

                        <Row gutter={[20]} className={styles.rowContainer}>
                            <Col xs={8} md={10} className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/basketball.png" alt="前端設計" />
                                    <h3>打球</h3>
                                </div>
                            </Col>
                            <Col xs={8} md={10} className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/code.png" alt="前端設計" />
                                    <h3>程式</h3>
                                </div>
                            </Col>
                            <Col xs={8} md={10} className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/gamepad.png" alt="前端設計" />
                                    <h3>遊戲</h3>
                                </div>
                            </Col>
                            <Col xs={8} md={10} className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/video (2).png" alt="前端設計" />
                                    <h3>剪輯</h3>
                                </div>
                            </Col>
                        </Row >
                    </Row>
                </motion.div>
            </div>
        </div>
    );
}