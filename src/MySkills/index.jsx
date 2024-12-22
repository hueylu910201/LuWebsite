import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import styles from "../MySkills/myskills.module.css";

export default function MySkills() {
    return (
        <Row gutter={[48, 24]} align="middle" className={styles.container}>
            <Col span={24} className={styles.titleColumn}>
                <h1 className={styles.title}>技能包</h1>
            </Col>
            <Col xs={18} md={6} xxl={5} className={styles.contentColumn}>
                <div className={styles.introText}>
                    <img src="/web-programming.png" alt="前端設計" />
                    <h3>前端設計</h3>
                    <p>熟悉基本網頁架構，能使用HTML、React完成RWD切版，也能使用Redux完成動態網頁</p>
                </div>
            </Col>
            <Col xs={18} md={6} xxl={5} className={styles.contentColumn2}>
                <div className={styles.introText}>
                    <img src="/big-data.png" alt="後端維護" />
                    <h3>後端維護</h3>
                    <p>使用過firebase完成簡易帳號註冊功能、利用FastAPI與SQLite做出基本後台資料庫功能</p>
                </div>
            </Col>
            <Col xs={18} md={6} xxl={5} className={styles.contentColumn}>
                <div className={styles.introText}>
                    <img src="/video.png" alt="剪輯影片" />
                    <h3>剪輯影片</h3>
                    <p>使用手機搭配穩定器錄製日常影片與遊戲精華，再透過Pr與剪映來完成後製剪輯與字卡</p>
                </div>
            </Col>
        </Row>
    );
}