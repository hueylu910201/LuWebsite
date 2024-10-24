import React from 'react';
import { Card, Row, Col } from 'antd';
import styles from "../Portfolio/portfolio.module.css";
const { Meta } = Card;
export default function Portfolio() {
    const portfolioItems = [
        {
            id: 1,
            title: '官網重製-跑跑卡丁車',
            description: '使用技術：HTML/CSS/JS',
            imageUrl: '/kartrider.jpg',
            link: 'https://hueylu910201.github.io/2022.1.3-web-final/index.html',
        },
        {
            id: 2,
            title: '購物網站-影視快帝',
            description: '使用技術：React、Redux、Firebase',
            imageUrl: '/movie.jpg',
            link: 'https://2023web-midterm.vercel.app/',
        },
        {
            id: 3,
            title: '旅遊網站-旅龜LUKUI',
            description: '使用技術：React、Redux、Leaflet',
            imageUrl: '/lukui.jpg',
            link: 'https://lukui-final.vercel.app/',
        },
        {
            id: 4,
            title: 'iT鐵人賽2024',
            description: '旅龜LUKUI簡易版的教學文章',
            imageUrl: '/it2024.jpg',
            link: 'https://ithelp.ithome.com.tw/users/20169447/ironman',
        },
        // 可以繼續添加更多作品
    ];

    return (
        <div className={styles.portfolioContainer}>
            <div className={styles.title}>
                <h1>前端作品集</h1>
            </div>
            <Row gutter={[24, 24]} className={styles.portfolioRow}>
                {portfolioItems.map(item => (
                    <Col
                        key={item.id}
                        xs={18}    // 手機螢幕一列顯示一個
                        sm={16}    // 平板螢幕一列顯示兩個
                        md={8}     // 電腦螢幕一列顯示三個
                        lg={4}     // 大螢幕一列顯示四個
                        className={styles.portfolioCol}
                    >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Card
                                hoverable
                                className={styles.portfolioCard}
                                cover={
                                    <div className={styles.imageContainer}>
                                        <img
                                            alt={item.title}
                                            src={item.imageUrl}
                                            className={styles.portfolioImage}
                                        />
                                    </div>
                                }
                            >
                                <Meta
                                    title={<div className={styles.cardTitle}>{item.title}</div>}
                                    description={<div className={styles.cardDescription}>{item.description}</div>}
                                />
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </div>
    );
}