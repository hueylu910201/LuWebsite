import React from 'react';
import { Card, Col, Row } from 'antd';
import styles from "../Daily/daily.module.css"

export default function Daily() {
    const dailyItems = [
        {
            id:'1',
            title:'系隊籃球',
            img:'/basketball.jpg',
            description:'從小就喜歡打籃球的我，在大一就果斷加入了系籃。在大學期間餐宇了很多比賽，也拿到了系際盃二連霸。'
        },
        {
            id:'2',
            title:'記錄生活',
            img:'/editvideo.jpg',
            description:'剪片也是我的興趣之一，從國中開始接觸剪片後便建立了頻道記錄自己遊戲與生活日常，剪片對我來說是一件很有成就感也很快樂的事。'
        },

    ]


    return (
        <Card className={styles.cardContainer}>
            <Row className={styles.cardRow}>
                <Col xs={24} sm={24} md={10} lg={8} xl={8} className={styles.colNoGutter}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/basketball.jpg"
                            alt="日常-打籃球"
                            className={styles.image}
                        />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={14} lg={16} xl={12} className={styles.colNoGutter}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>標題文字</h2>
                        <p className={styles.description}>
                            這裡是介紹文字的內容。您可以放入產品描述、服務說明或是其他重要資訊。
                            根據需求可以調整文字長度，系統會自動適應不同螢幕寬度來呈現最佳效果。
                        </p>
                        <ul className={styles.features}>
                            <li>重點特色 1</li>
                            <li>重點特色 2</li>
                            <li>重點特色 3</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}