import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import styles from "../AboutMe/aboutme.module.css";
import MySkills from '../MySkills';

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
            <div
                className={styles.parallaxBackground}
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            />

            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>關於我</h1>

                {/* 整個內容區塊一起移動 */}
                <div
                    className={styles.mainContentWrapper}
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`
                    }}
                >
                    <Row gutter={[48, 24]} align="middle" className={styles.mainContent}>
                        {/* 左側個人簡介 */}
                        <Col xs={24} md={12} className={styles.textColumn}>
                            <div className={styles.introText}>
                                <p>我是呂修逸，目前就讀於國北教數位系玩遊所碩士班一年級，平常的興趣是喜歡打籃球、游泳等戶外活動以及影片剪輯。</p>
                                <p>而我對於網頁的前端比較熟悉，後端仍在初學階段。在工作方面，之前有曾過電視節目的後製剪接助理，協助字卡、人物去背等工作，對於剪輯是有相當大的熱忱。</p>
                            </div>
                        </Col>

                        {/* 右側照片 */}
                        <Col xs={24} md={12} className={styles.imageColumn}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/newdesign.jpg"
                                    alt="個人照片"
                                    className={styles.profileImage}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}