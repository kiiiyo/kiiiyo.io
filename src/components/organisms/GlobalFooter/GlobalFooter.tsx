import { FC } from 'react'
//

// Interface

// Component

export const GlobalFooter: FC = () => {
  return (
    <div className="bg-white py-8 lg:pt-24 pb-36 lg:pb-48">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="mb-6 mr-12">
            <a className="text-2xl font-bold text-gray-800  lg:text-3xl hover:text-gray-700 " href="#">
              Brand
            </a>
            <p className="text-sm my-1">Kiiiyoのポートフォリオサイトです。</p>
          </div>
          <nav>
            <ul>
              <li className="my-2">
                <a className="text-sm text-gray-600 hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a className="text-sm text-gray-600 hover:text-gray-500" href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        <p></p>
      </div>
    </div>
  )
}
