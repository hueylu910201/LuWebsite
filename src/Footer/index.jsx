import React from 'react';
import { Row, Col } from 'antd';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <Row justify="center" className={styles.footer}>
            <Col xs={24} sm={20} md={16} lg={12}>
                <p className={styles.footerText}>©Copyright All rights reserved.</p>
            </Col>
        </Row>
    );
}