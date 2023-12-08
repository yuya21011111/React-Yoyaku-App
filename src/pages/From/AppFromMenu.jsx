import React from 'react'
import { Form, Row, Col } from 'antd'
import 'antd/dist/antd.css'
function AppFromMenu() {
  return (
    <>
    <div class="relative w-full mt-4 bg-white p-4">
        <h2 className='text-gray-500 font-medium text-3xl'>ユーザーアカウント</h2>
          <div class="w-full border-b border-gray-300 border-2"></div>
        <Form layout='vertical'>
        <Row className='flex justify-center'>
            <Col span={8}>
                <Form.Item className='mt-4' label="姓:" name="firstName"
                rules={[
                    {
                        required: true,
                        message: "姓は必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>
                <Form.Item className='mt-4' label="名前:" name="lastName"
                rules={[
                    {
                        required: true,
                        message: "名前は必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="性別:" name="gender"
                rules={[
                    {
                        required: true,
                        message: "性別は必ず入力してください。"
                    }
                ]}>
                    <select className='border border-gray-500'>
                        <option value="1">男性</option>
                        <option value="2">女性</option>
                        <option value="3">その他</option>
                    </select>
                </Form.Item>


                <Form.Item className='mt-4' label="メールアドレス:" name="email"
                rules={[
                    {
                        required: true,
                        message: "メールアドレスは必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="電話番号:" name="phone"
                rules={[
                    {
                        required: true,
                        message: "電話番号は必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="メールアドレス:" name="email"
                rules={[
                    {
                        required: true,
                        message: "メールアドレスは必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="Webサイト:" name="website"
                rules={[
                    {
                        required: true,
                        message: "Webサイトは必ず入力してください。"
                    }
                ]}>
                    <input type='text' className='border border-gray-500 rounded-lg px-8 py-2 w-80' />
                </Form.Item>

                <Form.Item className='mt-4' label="住所:" name="address"
                rules={[
                    {
                        required: true,
                        message: "住所は必ず入力してください。"
                    }
                ]}>
                    <textarea type='text' className='border border-gray-500 rounded-lg px-8 py-2' />
                </Form.Item>

                <Form.Item className='mt-4' label="開始時間:" name="startime"
                rules={[
                    {
                        required: true,
                        message: "開始時間は必ず入力してください。"
                    }
                ]}>
                    <input type='time' className='border border-gray-500 rounded-lg px-8 py-2' />
                </Form.Item>


                <Form.Item className='mt-4' label="終了時間:" name="endtime"
                rules={[
                    {
                        required: true,
                        message: "終了時間は必ず入力してください。"
                    }
                ]}>
                    <input type='time' className='border border-gray-500 rounded-lg px-8 py-2' />
                </Form.Item>
            </Col>
        </Row>
      </Form>
    </div>
    </>
  )
}

export default AppFromMenu