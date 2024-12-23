import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Segmented, Modal, Button } from 'antd';
import styles from "../Portfolio2/portfolio2.module.css";
import { set } from 'rsuite/esm/internals/utils/date';
const { Meta } = Card;
export default function Portfolio2() {

    const portfolioItems = [
        {
            id: 1,
            title: 'Stanley-史丹利',
            description: '短暫剪輯過史丹利影片，主要使用Pr剪輯，完成特效、放入迷因與綜藝字卡，搭配Arctime上字幕，但因為是外包的緣故，片頭片尾還是給原剪輯師負責。',
            imageUrl: '/bandicam 2024-10-24 14-12-11-700.jpg',
            link: 'https://www.youtube.com/watch?v=ixcjAE0ORjU&list=PL4vTE-yDLo3uGI8QNK_ci0KLiHceqi50E&ab_channel=Stanley%E5%8F%B2%E4%B8%B9%E5%88%A9',
        },
        {
            id: 2,
            title: '傳說對決-神操作漂亮',
            description: '先使用剪映AI上字幕，再搭配Pr完成基本字卡與特效，整體難度不高但也是很好的素材可以讓我維持剪輯的手感，同時也增加字幕校稿的準確度。',
            imageUrl: '/bandicam 2024-10-24 14-12-50-057.jpg',
            link: 'https://www.youtube.com/watch?v=otaFAQ_BdM0&list=PL4vTE-yDLo3uGI8QNK_ci0KLiHceqi50E&index=6&ab_channel=Garena%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA',
        },
        // {
        //     id: 3,
        //     title: '畢業VLOG',
        //     description: '使用Pixel 8錄製，畢業倒數一個月的學校與參展日常，再使用CapCut做簡單轉場與字幕',
        //     imageUrl: '/2024.4..png',
        //     link: 'https://youtu.be/OxVPZsNArQo?si=P6DysWPvjx_2On-1',
        // },
        {
            id: 4,
            title: '畢業VLOG',
            description: '使用iPhone 11與DJI Osmo Mobile 5穩定器錄製在大學最後一周的時光，最後再用Pr進行降噪與字卡與其他特效，經過這支VLOG讓我知道很多細節可以做更好，包括收音狀況、節奏掌控等等，受益良多。',
            imageUrl: '/2024.4. (1).png',
            link: 'https://www.youtube.com/watch?v=e0P-_WXEAVo&t=10s&ab_channel=%E3%80%90%E8%80%81%E5%91%82%E3%80%91',
        },
        {
            id: 5,
            title: '畢業祝福影片',
            description: '系上師生的祝福應屆畢業生的影片，在畢業典禮當天播放給全校師生觀看。因為不想跟大家枯燥乏味的影片一樣，所以用許多轉場效果讓整部影片看起來更有活力。',
            imageUrl: '/Blue Orange Colorful Aesthetic Minimalist Lofi Music YouTube Thumbnail (1).png',
            link: 'https://www.youtube.com/watch?v=cBuWGqR3Mh4&ab_channel=%E3%80%90%E8%80%81%E5%91%82%E3%80%91',
        },
        // {
        //     id: 6,
        //     title: '跨年VLOG',
        //     description: '使用iPhone與穩定器錄製自己的跨年之旅',
        //     imageUrl: '/2023跨年.png',
        //     link: 'https://www.youtube.com/watch?v=cBuWGqR3Mh4&ab_channel=%E3%80%90%E8%80%81%E5%91%82%E3%80%91',
        // },
        // {
        //     id: 7,
        //     title: '魔獸初登板VLOG',
        //     description: '記錄魔獸Howard來台初登板的T1職籃比賽',
        //     imageUrl: '/Howard.png',
        //     link: 'https://youtu.be/Ft_hzQmsQWA?si=hWZWh-QpfPGQUKzO',
        // },
        // {
        //     id: 8,
        //     title: '臺北大巨蛋-棒球亞錦賽',
        //     description: '大巨蛋終於開張，記錄亞錦賽中華vs菲律賓的精華',
        //     imageUrl: '/大巨蛋.png',
        //     link: 'https://youtu.be/_IZA36L87VM?si=sHCgzna9T3oswhkv',
        // },
        // 可以繼續添加更多作品
    ];


    const portfolioItems2 = [
        {
            id: 1,
            title: '官網重製-跑跑卡丁車',
            description: '使用HTML/CSS/JS再搭配Bootstrap完成的網頁，主要是為了練習RWD切版，並且加入了一些動畫效果。完成這專案後對於RWD有更深的了解。',
            imageUrl: '/跑跑期末.jpg',
            link: 'https://hueylu910201.github.io/2022.1.3-web-final/index.html',
        },
        {
            id: 2,
            title: '購物網站-影視快帝',
            description: '使用React、Redux、Firebase完成簡單的購物網站範例，主要是為了練習Redux的完成動態網頁，並且加入了一些Firebase的功能，帳號註冊、登入、登出等等。',
            imageUrl: '/前端進階期中mockup.jpg',
            link: 'https://2023web-midterm.vercel.app/',
        },
        {
            id: 3,
            title: '旅遊網站-旅龜LUKUI',
            description: '使用技術：React、Redux、Leaflet完成的旅遊網站，主要是為了練習Redux的完成動態網頁，並加入Leaflet套件實現地圖導覽功能，同時也可以新增旅遊行程清單。',
            imageUrl: '/lukui.jpg',
            link: 'https://lukui-final.vercel.app/',
        },
        {
            id: 4,
            title: 'iT鐵人賽2024',
            description: '使用React、Redux、Leaflet完成的類似於旅龜LUKUI的網站，此網頁實作為參加iT鐵人賽的作品，對於文案撰寫、資料統整的能力有大幅的提升，是一次良好的參賽經驗。',
            imageUrl: '/bandicam 2024-12-23 02-24-25-804.jpg',
            link: 'https://ithelp.ithome.com.tw/users/20169447/ironman',
        },
        // 可以繼續添加更多作品
    ];

    const [selectedOption, setSelectedOption] = useState('前端作品');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const[portfolioTitle,setPortfolioTitle]=useState(portfolioItems);
    const handleCardClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        setPortfolioTitle(item.title);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const handleSegmentedChange = (value) => {
        setSelectedOption(value);
    };
    return (
        <div className={styles.portfolioContainer}>
            <div className={styles.title}>
                <h1>我的作品</h1>
                <Segmented
                    options={['前端作品', '剪輯作品']}
                    value={selectedOption}
                    onChange={handleSegmentedChange}
                    className={styles.segmented}
                />
            </div>

            {selectedOption === '剪輯作品' ? (
                <Row gutter={[24, 24]} className={styles.portfolioRow}>
                    {portfolioItems.map(item => (
                        <Col
                            key={item.id}
                            xs={18}    // 手機螢幕一列顯示一個
                            sm={16}    // 平板螢幕一列顯示兩個
                            md={5}     // 電腦螢幕一列顯示三個
                            className={styles.portfolioCol}
                        >
                            <div target="_blank" rel="noopener noreferrer" onClick={() => handleCardClick(item)}>
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
                                    />
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>

            ) : (
                <Row gutter={[24, 24]} className={styles.portfolioRow}>
                    {portfolioItems2.map(item => (
                        <Col
                            key={item.id}
                            xs={18}    // 手機螢幕一列顯示一個
                            sm={16}    // 平板螢幕一列顯示兩個
                            md={5}     // 電腦螢幕一列顯示三個
                            className={styles.portfolioCol}
                        >
                            <div target="_blank" rel="noopener noreferrer" onClick={() => handleCardClick(item)}>
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
                                    />
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
            <Modal
                title={<div className={styles.modalBigTitle}>{portfolioTitle}</div>}
                open={isModalOpen}
                onCancel={handleModalClose}
                footer={null}
                width={800}
                className={styles.portfolioModal}
            >
                {selectedItem && (
                    <div className={styles.modalContent}>
                        <img
                            src={selectedItem.imageUrl}
                            alt={selectedItem.title}
                            className={styles.modalImage}
                        />
                        <div className={styles.modalDescription}>
                            {/* <p className={styles.modaltitle}>{selectedItem.title}</p> */}
                            <p className={styles.modaledscription}>{selectedItem.description}</p>
                            {/* 可以在這裡添加更多項目詳細信息 */}
                            <Button
                                type="primary"
                                href={selectedItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.modalButton}>
                                前往作品連結
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>

        </div>
    );
}


