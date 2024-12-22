import React from 'react';
import { Row, Col } from 'antd';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <Row justify="center" className={styles.footer}>
            <Col xs={24} sm={20} md={16} lg={12}>
                <div className={styles.socialMedia}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className={styles.icon} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <YouTubeIcon className={styles.icon} />
                    </a>
                </div>
                <p className={styles.footerText}>©Copyright All rights reserved.</p>
            </Col>
        </Row>
    );
}