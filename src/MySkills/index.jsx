import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import styles from "../MySkills/myskills.module.css";

export default function MySkills() {
    return (
        <Row gutter={[48, 24]} align="middle" className={styles.container}>
            <Col xs={20} md={8} className={styles.contentColumn}>
                <div className={styles.introText}>
                    <img src="/web-programming.png" alt="程式設計" />
                    <h3>Programming</h3>
                    <p>前端以React為主，能搭配Redux完成動態網頁，後端則是對Fast API、SQLite有初步的認識。也有使用Firebase實現帳號註冊功能、串接氣象局API的經驗。</p>
                </div>
            </Col>
            <Col xs={20} md={8} className={styles.contentColumn}>
                <div className={styles.introText}>
                    <img src="/video.png" alt="程式設計" />
                    <h3>Edit video</h3>
                    <p>剪輯軟體以Adobe Premiere Pro為主，可為影片加上基本特效、轉場、字幕。擅長的影片類型是遊戲精華、生活VLOG。</p>
                </div>
            </Col>
        </Row>
    );
}