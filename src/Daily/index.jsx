import React, { useState, useRef } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { motion, useInView } from 'framer-motion';
import styles from "../Daily/daily.module.css"

export default function Daily() {
    const dailyItems = [
        {
            id: '1',
            title: '系隊籃球',
            img: '/basketball.jpg',
            description: '從小就喜歡打籃球的我，在大一就果斷加入了系籃。在大學期間餐與了很多比賽，也拿到了系際盃二連霸。在系隊中也讓我成長許多，不管是球技、心態方面又或是成為領導者等，都讓我收獲滿滿。'
        },
        {
            id: '2',
            title: '記錄生活',
            img: '/editvideo.jpg',
            description: '剪片也是我的興趣之一，由於國中開始喜歡看遊戲實況主精華片段便接觸剪片，之後也因此建立了頻道記錄自己遊戲與生活日常，雖然沒有定期更新，但剪片對我來說是仍然是一件很有成就感且很快樂的事。'
        },

    ]
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.3 }); // 30% 可見時觸發動畫
    const [hasPlayed, setHasPlayed] = useState(false); // 記錄動畫是否已經觸發過

    // 當進入視窗且動畫尚未播放過時，播放動畫
    if (isInView && !hasPlayed) {
        setHasPlayed(true);
    }

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
                                <p>熱愛運動的我，在大學中我同時參加了系籃與系排，很熟悉團隊合作與溝通，同時我也很喜歡剪輯自己的遊戲精華或記錄生活VLOG。我對於開發網頁、APP也有極高的興趣，目前仍持續學習新技術中!</p>
                                <Button className={styles.learnButton}>我的頻道</Button>
                            </div>
                        </Col>

                        {/* 右側照片 */}
                        {/* <Col xs={24} md={12} className={styles.imageColumn}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/selfimage.png"
                                    alt="個人照片"
                                    className={styles.profileImage}
                                />
                            </div>
                        </Col> */}
                        <Row gutter={[20]} className={styles.rowContainer}>
                            <Col xs={8} md={10}  className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/basketball.png" alt="前端設計" />
                                    <h3>打球</h3>
                                </div>
                            </Col>
                            <Col xs={8} md={10}  className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/code.png" alt="前端設計" />
                                    <h3>程式</h3>
                                </div>
                            </Col>
                            <Col xs={8} md={10}  className={styles.contentColumn}>
                                <div className={styles.habbitBox}>
                                    <img src="/gamepad.png" alt="前端設計" />
                                    <h3>遊戲</h3>
                                </div>
                            </Col>
                            <Col xs={8} md={10}  className={styles.contentColumn}>
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