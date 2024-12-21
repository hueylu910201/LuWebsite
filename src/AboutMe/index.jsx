import React, { useEffect, useState } from 'react';
import { Row, Col,Button } from 'antd';
import { motion } from 'framer-motion';
import styles from "../AboutMe/aboutme.module.css";

export default function AboutMe() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <Col xs={24} md={12} className={styles.textColumn}>
                            <div className={styles.introText}>
                                <p className={styles.title}>大家好，我是呂修逸<br></br>擅長前端設計與影音剪輯</p>
                                <p className={styles.sideTitle}>目前就讀於國立台北教育大學玩具與遊戲設計碩士班一年級，對於新事物充滿學習熱忱，還在摸索其他領域中!</p>
                                <Button className={styles.learnButton}>了解更多</Button>
                            </div>
                        </Col>

                        {/* 右側照片 */}
                        <Col xs={24} md={12} className={styles.imageColumn}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/selfimage.png"
                                    alt="個人照片"
                                    className={styles.profileImage}
                                />
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </div>
        </div>
    );
}