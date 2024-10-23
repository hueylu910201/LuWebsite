import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import styles from "../Header/header.module.css"
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navContent}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <img className={styles.img} src='/basket-ball.png' alt='logo image' />
                        <span>老呂</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        <a href="#" className={styles.menuItem}>
                            關於我
                        </a>
                        <a href="#" className={styles.menuItem}>
                            工作經歷
                        </a>
                        <a href="#" className={styles.menuItem}>
                            我的作品
                        </a>
                        <a href="#" className={styles.menuItem}>
                            我的日常
                        </a>
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
                        <a href="#" className={styles.mobileMenuItem}>
                            關於我
                        </a>
                        <a href="#" className={styles.mobileMenuItem}>
                            工作經歷
                        </a>
                        <a href="#" className={styles.mobileMenuItem}>
                            我的作品
                        </a>
                        <a href="#" className={styles.mobileMenuItem}>
                            我的日常
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}