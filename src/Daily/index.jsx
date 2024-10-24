import React from 'react';
import { Card, Col, Row } from 'antd';
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


    return (
        <Card className={styles.cardContainer}>
            <div className={styles.toptitle}>
                <h1>我的日常</h1>
            </div>
            {dailyItems.map(item => (
                <Row className={styles.cardRow} key={item.id}> {/* Add marginBottom for spacing */}
                    <Col xs={24} sm={24} md={10} lg={8} xl={8} className={styles.colNoGutter}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={item.img}
                                alt={item.title}
                                className={styles.image}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={10} xl={10} className={styles.colNoGutter}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.description}>
                                {item.description}
                            </p>
                        </div>
                    </Col>
                </Row>
            ))}
        </Card>
    );
}