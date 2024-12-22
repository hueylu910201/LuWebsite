import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import styles from "../Header/header.module.css"
export default function Header({ onAboutMeClick, onPortfolioClick, onDailyClick, onPortfolio2Click }) {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            // 只有當滾動超過一定距離時才觸發隱藏/顯示
            if (currentScrollPos > 80) {
                setVisible(isScrollingUp);
            } else {
                setVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.container}>
                <div className={styles.navContent}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <img className={styles.img} src='/basket-ball.png' alt='logo image' />
                        {/* <span>老呂</span> */}
                    </div>

                    {/* Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        <a href="#" className={styles.menuItem} onClick={(e) => { e.preventDefault(); onAboutMeClick(); }}>
                            個人簡介
                        </a>
                        <a href="#" className={styles.menuItem} onClick={(e) => { e.preventDefault(); onPortfolioClick(); }}>
                            經歷分享
                        </a>
                        <a href="#" className={styles.menuItem} onClick={(e) => { e.preventDefault(); onPortfolio2Click(); }}>
                            我的作品
                        </a>
                        {/* <a href="#" className={styles.menuItem} onClick={(e) => { e.preventDefault(); onCommentClick(); }}>
                            聯絡我
                        </a> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={styles.mobileMenuButton}
                        aria-label="Toggle menu"
                    >
                        <div className={styles.iconWrapper}>
                            <Menu
                                className={`${styles.icon} ${styles.menuIcon} ${isOpen ? styles.hidden : ''}`}
                            />
                            <X
                                className={`${styles.icon} ${styles.closeIcon} ${isOpen ? styles.visible : ''}`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.isOpen : ''}`}>
                    <div className={styles.mobileMenuInner}>
                        <a href="#" className={styles.mobileMenuItem} onClick={(e) => { e.preventDefault(); onAboutMeClick(); }}>
                            個人簡介
                        </a>
                        <a href="#" className={styles.mobileMenuItem} onClick={(e) => { e.preventDefault(); onPortfolioClick(); }}>
                            經歷分享
                        </a>
                        <a href="#" className={styles.mobileMenuItem} onClick={(e) => { e.preventDefault(); onPortfolio2Click(); }}>
                            我的作品
                        </a>
                        {/* <a href="#" className={styles.mobileMenuItem} onClick={(e) => { e.preventDefault(); onCommentClick(); }}>
                            聯絡我
                        </a> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}