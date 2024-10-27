import React , { useEffect }from 'react';
import { Card, Row, Col } from 'antd';
import styles from "../Portfolio2/portfolio2.module.css";
const { Meta } = Card;
export default function Portfolio2() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newSize = 100 + scrollPosition / 20; // 動態計算背景大小
            document.querySelector(`.${styles.portfolioContainer}`).style.backgroundSize = `${newSize}%`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const portfolioItems = [
        {
            id: 1,
            title: 'Stanley-史丹利',
            description: '短暫剪輯過史丹利影片，使用Pr完成特效、迷因與字卡',
            imageUrl: '/bandicam 2024-10-24 14-12-11-700.jpg',
            link: 'https://hueylu910201.github.io/2022.1.3-web-final/index.html',
        },
        {
            id: 2,
            title: '傳說對決-神操作漂亮',
            description: '使用剪映上字幕，再搭配Pr完成基本字卡與特效',
            imageUrl: '/bandicam 2024-10-24 14-12-50-057.jpg',
            link: 'https://www.youtube.com/watch?v=otaFAQ_BdM0&list=PL4vTE-yDLo3uGI8QNK_ci0KLiHceqi50E&index=6&ab_channel=Garena%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA',
        },
        {
            id: 3,
            title: '畢業VLOG',
            description: '使用Pixel 8錄製，再使用capcut做簡單轉場與字幕',
            imageUrl: '/2024.4..png',
            link: 'https://youtu.be/OxVPZsNArQo?si=P6DysWPvjx_2On-1',
        },
        {
            id: 4,
            title: '畢業VLOG-2',
            description: '使用iPhone與穩定器錄製大學最後的時光，最後再用Pr進行後製',
            imageUrl: '/2024.4. (1).png',
            link: 'https://www.youtube.com/watch?v=e0P-_WXEAVo&t=10s&ab_channel=%E3%80%90%E8%80%81%E5%91%82%E3%80%91',
        },
        {
            id: 5,
            title: '畢業祝福影片',
            description: '系上師生的祝福影片，在畢業典禮當天播放',
            imageUrl: '/Blue Orange Colorful Aesthetic Minimalist Lofi Music YouTube Thumbnail (1).png',
            link: 'https://www.youtube.com/watch?v=cBuWGqR3Mh4&ab_channel=%E3%80%90%E8%80%81%E5%91%82%E3%80%91',
        },
        {
            id: 6,
            title: '跨年VLOG',
            description: '使用iPhone與穩定器錄製自己的跨年之旅',
            imageUrl: '/2023跨年.png',
            link: 'https://www.youtube.com/watch?v=cBuWGqR3Mh4&ab_channel=%E3%80%90%E8%80%81%E5%91%82%E3%80%91',
        },
        {
            id: 7,
            title: '魔獸初登板VLOG',
            description: '記錄魔獸來台初登板的T1職籃比賽',
            imageUrl: '/Howard.png',
            link: 'https://youtu.be/Ft_hzQmsQWA?si=hWZWh-QpfPGQUKzO',
        },
        {
            id: 8,
            title: '臺北大巨蛋-棒球亞錦賽',
            description: '大巨蛋終於開張，記錄亞錦賽中華vs菲律賓的精華',
            imageUrl: '/大巨蛋.png',
            link: 'https://youtu.be/_IZA36L87VM?si=sHCgzna9T3oswhkv',
        },
        // 可以繼續添加更多作品
    ];

    return (
        <div className={styles.portfolioContainer}>
            <div className={styles.title}>
                <h1>剪輯作品集</h1>
            </div>
            <Row gutter={[24, 24]} className={styles.portfolioRow}>
                {portfolioItems.map(item => (
                    <Col
                        key={item.id}
                        xs={18}    // 手機螢幕一列顯示一個
                        sm={16}    // 平板螢幕一列顯示兩個
                        md={8}     // 電腦螢幕一列顯示三個
                        lg={5}     // 大螢幕一列顯示四個
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