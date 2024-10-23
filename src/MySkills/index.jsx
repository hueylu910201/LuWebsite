import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import styles from "../MySkills/myskills.module.css";

export default function MySkills() {
    return (
        <Row gutter={[48, 24]} align="middle" className={styles.container}>
            <Col xs={20} md={10} className={styles.contentColumn}>
                <div className={styles.introText}>
                    <img src="/web-programming.png" alt="程式設計" />
                    <h3>Programming</h3>
                    <p>前端以React為主，能完成動態網頁，後端則是對Fast API、SQLite有初步的認識</p>
                </div>
            </Col>
            <Col xs={20} md={10} className={styles.contentColumn}>
                <div className={styles.introText}>
                    <img src="/video.png" alt="程式設計" />
                    <h3>Edit video</h3>
                    <p>剪輯軟體以Adobe Premiere Pro為主，可為影片加上基本特效、轉場、字幕</p>
                </div>
            </Col>
        </Row>
    );
}