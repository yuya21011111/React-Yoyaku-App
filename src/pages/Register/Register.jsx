import React from 'react'

function Register() {
    return (
    <div className="mt-40 mx-20">
      <div className="flex justify-center mt-32 mx-10 mb-10">
        <form className="w-full max-w-2xl">
          <p className="text-2xl text-black font-bold text-center mb-5">
            新規登録フォーム
          </p>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-first-name"
              >
                名前
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>

            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="山田　太郎"
               
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                メールアドレス
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                defaultValue=""
                placeholder="例) example@gmail.me"
               
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
            　パスワード
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="例) adsffkkwe3432kge"
               
              />
            </div>
          </div>
        <div className='flex justify-end'>
            <button type='button' className='border border-cyan-400 bg-cyan-400 rounded-lg text-white py-2 px-4'>登録する</button>
        </div>
        </form>
      </div>
    </div>
    )
}

export default Register