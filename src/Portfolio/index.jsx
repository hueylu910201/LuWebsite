import React from 'react';
import { Timeline } from 'rsuite';
import { Card, Row, Col } from 'antd';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WebIcon from '@mui/icons-material/Web';
import WorkIcon from '@mui/icons-material/Work';
import 'rsuite/Timeline/styles/index.css';
import styles from "../Portfolio/portfolio.module.css";
const { Meta } = Card;
export default function Portfolio() {
    const portfolioItems = [
        {
            id: 1,
            title: '2023/06-09',
            description: '在全民星攻略擔任後製剪接助理',
            imageUrl: '/kartrider.jpg',
            icon: <VideoLibraryIcon style={{ fontSize: '3.5rem', position: 'relative', bottom: '1rem', right: '1.5rem', backgroundColor: '#D3E6FB', padding: '0.5rem', borderRadius: '500px' }} />,
            link: 'https://hueylu910201.github.io/2022.1.3-web-final/index.html',
        },
        {
            id: 2,
            title: '2023/10-11',
            description: '短暫成為史丹利Stanley外包剪輯師',
            imageUrl: '/movie.jpg',
            icon: <VideoLibraryIcon style={{ fontSize: '3.5rem', position: 'relative', bottom: '1rem', right: '1.5rem', backgroundColor: '#D3E6FB', padding: '0.5rem', borderRadius: '500px' }} />,
            link: 'https://2023web-midterm.vercel.app/',
        },
        {
            id: 3,
            title: '2024/05',
            description: '參加第43屆新一代設計展並擔任機動長',
            imageUrl: '/lukui.jpg',
            icon: <WorkIcon style={{ fontSize: '3.5rem', position: 'relative', bottom: '1rem', right: '1.5rem', backgroundColor: '#D3E6FB', padding: '0.5rem', borderRadius: '500px' }} />,
            link: 'https://lukui-final.vercel.app/',
        },
        {
            id: 4,
            title: '2024/09-10',
            description: '參加2024 iT鐵人賽-網頁專案實作',
            imageUrl: '/it2024.jpg',
            icon: <WebIcon style={{ fontSize: '3.5rem', position: 'relative', bottom: '1rem', right: '1.5rem', backgroundColor: '#D3E6FB', padding: '0.5rem', borderRadius: '500px' }} />,
            link: 'https://ithelp.ithome.com.tw/users/20169447/ironman',
        },
        {
            id: 5,
            title: '2024/09-11',
            description: '為傳說對決官方剪輯YouTube節目',
            imageUrl: '/it2024.jpg',
            icon: <VideoLibraryIcon style={{ fontSize: '3.5rem', position: 'relative', bottom: '1rem', right: '1.5rem', backgroundColor: '#D3E6FB', padding: '0.5rem', borderRadius: '500px' }} />,
            link: 'https://ithelp.ithome.com.tw/users/20169447/ironman',
        },
        // 可以繼續添加更多作品
    ];

    return (
        <div className={styles.portfolioContainer}>
            <div className={styles.title}>
                <h1>經歷分享</h1>
            </div>
            <Row gutter={[48, 24]} className={styles.portfolioRow}>
                <Col xs={24} md={10} className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/Group 21.png"
                            alt="個人照片"
                            className={styles.profileImage}
                        />
                    </div>
                </Col>

                <Col
                    sm={16}    // 平板螢幕一列顯示兩個
                    md={10}     // 電腦螢幕一列顯示三個
                    className={styles.portfolioCol}
                >
                    <Timeline className={styles.timelineItem}>
                        {portfolioItems.map(item => (
                            <Timeline.Item key={item.id} dot={item.icon} >
                                <div className={styles.timeline}>
                                    <p className={styles.timelineTitle}>{item.title}</p>
                                    <p className={styles.timelineDescription}>{item.description}</p>
                                </div>
                            </Timeline.Item>
                        ))}
                    </Timeline>

                </Col>
            </Row>
        </div>
    );
}


{/* <a href={item.link} target="_blank" rel="noopener noreferrer">
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
                        </a> */}