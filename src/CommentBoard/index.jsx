// MessageBoard.js
import React, { useState } from 'react';
import { Row, Col, Input, Button, Form, message } from 'antd';
import { db, collection, addDoc } from '../Firebase';  // 引入 Firestore 函式
import styles from './commentboard.module.css';

export default function CommentBoard() {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        const { name, email, content } = values;

        try {
            await addDoc(collection(db, 'comment'), {  // 將資料存入 comment 集合
                name,
                email,
                content,
                timestamp: Date.now()
            });
            message.success('留言成功!');
            console.log("名字:", name);
            console.log("信箱:", email);
            console.log("內容:", content);
            form.resetFields();
        } catch (error) {
            console.error("留言失敗:", error);
            message.error('留言失敗，請重試');
        }
    };

    return (
        <Row justify="center" className={styles.container}>
            <Col xs={22} sm={20} md={10} lg={9}>
                <h1 className={styles.title}>聯絡我</h1>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className={styles.form}
                >
                    <Form.Item
                        label={<span style={{ color: "#fff" }}>姓名</span>}
                        name="name"
                        rules={[{ required: true, message: '請輸入您的姓名' }]}
                    >
                        <Input placeholder="請輸入您的姓名" />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ color: "#fff" }}>email</span>}
                        name="email"
                        rules={[
                            { required: true, message: '請輸入您的 Email' },
                            { type: 'email', message: 'Email 格式錯誤' },
                        ]}
                    >
                        <Input placeholder="請輸入您的 Email" />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ color: "#fff" }}>留言內容</span>}
                        name="content"
                        rules={[{ required: true, message: '請輸入留言內容' }]}
                    >
                        <Input.TextArea rows={4} placeholder="請輸入留言內容" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className={styles.submit}>
                            送出留言
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

// const MessageBoard = () => {

// };

// export default MessageBoard;
