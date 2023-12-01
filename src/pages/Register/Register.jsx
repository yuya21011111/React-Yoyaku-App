import React from 'react'
import { Form } from "antd"
import { Link } from "react-router-dom"
 
function Register() {

  const onFinish = (values) => {
    // values.preventDefault()
    console.log(values)
  }
    return (
    <div className="mt-40 mx-20">
      <div className="flex justify-center mt-32 mx-10 mb-10 shadow-lg bg-gray-100 px-8">
        <Form className="w-full max-w-2xl" onFinish={onFinish}>
          <p className="text-2xl text-black font-bold text-center mb-5 mt-4">
            新規登録フォーム
          </p>
          <div className="md:flex md:items-center mb-6">
            <Form.Item label="名前" name="name" className="md:w-1/3">
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="山田　太郎"
              />
            </Form.Item>
          </div>

          <div className="md:flex md:items-center mb-6">
            <Form.Item label="メールアドレス" name="email" className="md:w-1/3">
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                placeholder="aaa@aaa.com"
              />
            </Form.Item>
          </div>

          <div className="md:flex md:items-center mb-6">
            <Form.Item label="パスワード" name="password" className="md:w-1/3">
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="********"
              />
            </Form.Item>
          </div>
        <div className='flex justify-end'>
            <button type='submit' className='mb-4 border border-cyan-400 bg-cyan-400 rounded-lg text-white py-2 px-4'>登録する</button>
        </div>
        <Link className='text-blue-400 text-sm' to="/login">
              既に登録済みの方ですか？ <storage className=" text-blue-500 font-medium">ログイン</storage>
        </Link>
        </Form>
      </div>
    </div>
    )
}

export default Register