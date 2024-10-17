import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
export const SecondNav = () => {
  return (
    <div className="w-full z-50 fixed top-12 left-0 bg-[#ffffff] border-b border-zinc-200 p-3">
      <div className="max-w-[1400px] m-auto flex justify-between">
        <div className="flex items-center gap-4">
          <div>
            <svg
              width="154"
              height="35"
              viewBox="0 0 154 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 15L21 5L39.75 15L21 25L2.25 15Z"
                stroke="#FF6636"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.375 37.5V20L21 15"
                stroke="#FF6636"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.375 17.3333V25.8521C35.3755 26.1218 35.2884 26.3843 35.1266 26.6001C34.074 28.0008 29.6333 33.1249 21 33.1249C12.3667 33.1249 7.92597 28.0008 6.87336 26.6001C6.71165 26.3843 6.62449 26.1218 6.625 25.8521V17.3333"
                stroke="#FF6636"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M51.2955 32V8.72727H66.4318V12.2614H55.5114V18.5795H65.6477V22.1136H55.5114V28.4659H66.5227V32H51.2955ZM80.1707 20.6136V24H69.6934V20.6136H80.1707ZM92.2533 14.5455V17.7273H82.2192V14.5455H92.2533ZM84.6965 10.3636H88.8101V26.75C88.8101 27.303 88.8934 27.7273 89.0601 28.0227C89.2344 28.3106 89.4616 28.5076 89.7419 28.6136C90.0222 28.7197 90.3328 28.7727 90.6738 28.7727C90.9313 28.7727 91.1662 28.7538 91.3783 28.7159C91.598 28.678 91.7647 28.6439 91.8783 28.6136L92.5715 31.8295C92.3518 31.9053 92.0374 31.9886 91.6283 32.0795C91.2268 32.1705 90.7344 32.2235 90.151 32.2386C89.1207 32.2689 88.1927 32.1136 87.3669 31.7727C86.5412 31.4242 85.8859 30.8864 85.401 30.1591C84.9238 29.4318 84.6889 28.5227 84.6965 27.4318V10.3636ZM105.859 24.6591V14.5455H109.972V32H105.984V28.8977H105.802C105.408 29.875 104.76 30.6742 103.859 31.2955C102.965 31.9167 101.862 32.2273 100.552 32.2273C99.4079 32.2273 98.3965 31.9735 97.5177 31.4659C96.6465 30.9508 95.9647 30.2045 95.4723 29.2273C94.9798 28.2424 94.7336 27.053 94.7336 25.6591V14.5455H98.8473V25.0227C98.8473 26.1288 99.1503 27.0076 99.7564 27.6591C100.362 28.3106 101.158 28.6364 102.143 28.6364C102.749 28.6364 103.336 28.4886 103.904 28.1932C104.472 27.8977 104.938 27.4583 105.302 26.875C105.673 26.2841 105.859 25.5455 105.859 24.6591ZM121.958 14.5455V17.7273H111.924V14.5455H121.958ZM114.401 10.3636H118.515V26.75C118.515 27.303 118.598 27.7273 118.765 28.0227C118.939 28.3106 119.167 28.5076 119.447 28.6136C119.727 28.7197 120.038 28.7727 120.379 28.7727C120.636 28.7727 120.871 28.7538 121.083 28.7159C121.303 28.678 121.47 28.6439 121.583 28.6136L122.276 31.8295C122.057 31.9053 121.742 31.9886 121.333 32.0795C120.932 32.1705 120.439 32.2235 119.856 32.2386C118.826 32.2689 117.898 32.1136 117.072 31.7727C116.246 31.4242 115.591 30.8864 115.106 30.1591C114.629 29.4318 114.394 28.5227 114.401 27.4318V10.3636ZM131.865 32.3409C130.16 32.3409 128.683 31.9659 127.433 31.2159C126.183 30.4659 125.213 29.4167 124.524 28.0682C123.842 26.7197 123.501 25.1439 123.501 23.3409C123.501 21.5379 123.842 19.9583 124.524 18.6023C125.213 17.2462 126.183 16.1932 127.433 15.4432C128.683 14.6932 130.16 14.3182 131.865 14.3182C133.569 14.3182 135.047 14.6932 136.297 15.4432C137.547 16.1932 138.512 17.2462 139.194 18.6023C139.884 19.9583 140.228 21.5379 140.228 23.3409C140.228 25.1439 139.884 26.7197 139.194 28.0682C138.512 29.4167 137.547 30.4659 136.297 31.2159C135.047 31.9659 133.569 32.3409 131.865 32.3409ZM131.887 29.0455C132.812 29.0455 133.584 28.7917 134.206 28.2841C134.827 27.7689 135.289 27.0795 135.592 26.2159C135.903 25.3523 136.058 24.3902 136.058 23.3295C136.058 22.2614 135.903 21.2955 135.592 20.4318C135.289 19.5606 134.827 18.8674 134.206 18.3523C133.584 17.8371 132.812 17.5795 131.887 17.5795C130.941 17.5795 130.153 17.8371 129.524 18.3523C128.903 18.8674 128.437 19.5606 128.126 20.4318C127.823 21.2955 127.672 22.2614 127.672 23.3295C127.672 24.3902 127.823 25.3523 128.126 26.2159C128.437 27.0795 128.903 27.7689 129.524 28.2841C130.153 28.7917 130.941 29.0455 131.887 29.0455ZM142.76 32V14.5455H146.749V17.4545H146.93C147.249 16.447 147.794 15.6705 148.567 15.125C149.347 14.572 150.237 14.2955 151.237 14.2955C151.464 14.2955 151.718 14.3068 151.999 14.3295C152.286 14.3447 152.525 14.3712 152.714 14.4091V18.1932C152.54 18.1326 152.264 18.0795 151.885 18.0341C151.514 17.9811 151.154 17.9545 150.805 17.9545C150.055 17.9545 149.381 18.1174 148.783 18.4432C148.192 18.7614 147.726 19.2045 147.385 19.7727C147.044 20.3409 146.874 20.9962 146.874 21.7386V32H142.76Z"
                fill="#1D2026"
              />
            </svg>
          </div>
          <div className="flex gap-2 relative">
            <span className="absolute left-36 top-2">
              <IoIosArrowDown />
            </span>
            <input
              className="border outline-none w-44 p-1 placeholder:text-slate-900 pl-3 pr-3"
              type="text"
              placeholder="Browse"
            />
            <span className="absolute font-normal left-48 top-1 text-2xl">
              <IoIosSearch />
            </span>
            <input
              className="border outline-none w-72 p-1  pl-9 pr-3"
              type="text"
              placeholder="What do you want learn..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl">
              <IoIosNotificationsOutline />
            </span>
            <span className="text-xl">
              <CiHeart />
            </span>
            <span className="text-xl">
              <CiShoppingCart />
            </span>
          </div>
          <div className="flex gap-3">
            <button className="text-sm bg-[#FFEEE8] px-3 border-none py-2 rounded-sm text-[#FF6636] cursor-pointer">
              Create Account
            </button>
            <button className="text-sm bg-[#FF6636] px-3 border-none py-2 rounded-sm text-white cursor-pointer">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
