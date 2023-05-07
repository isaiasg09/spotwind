import Image from "next/image";
import {
  Home as HomeIcon,
  Search,
  Library,
  Plus,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import profilePic from "../../public/profile.webp";
import playListCover from "../../public/playlist-c.jpg";

export default function Home() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <div className='flex flex-row flex-1'>
        <aside className='w-72 bg-zinc-950 flex flex-col p-6 resize-x overflow-auto max-w-sm min-w-[190px] relative'>
          <Image
            src={
              "https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png"
            }
            alt='Spotify Logo'
            width={130}
            height={40}
          />

          <nav className='space-y-10'>
            <div className='flex flex-col mt-8 text-sm font-bold space-y-4'>
              <a
                href='#'
                className='flex items-center gap-4 hover:brightness-200'
              >
                <HomeIcon size={24} /> Home
              </a>
              <a
                href='#'
                className='flex items-center gap-4 hover:brightness-200'
              >
                <Search size={24} /> Search
              </a>
              <a
                href='#'
                className='flex items-center gap-4 hover:brightness-200'
              >
                <Library size={24} />
                Your Library
              </a>
            </div>

            <div className='flex flex-col text-sm font-bold space-y-4'>
              <a
                href='#'
                className='flex items-center gap-4 hover:brightness-125'
              >
                <div className='bg-zinc-50 w-6 h-6 flex items-center justify-center rounded-sm'>
                  <Plus size={16} color='black' />
                </div>
                Create Playlist
              </a>
              <a
                href='#'
                className='flex items-center gap-4 hover:brightness-125'
              >
                <div className='bg-liked w-6 h-6 flex items-center justify-center rounded-sm '>
                  <svg
                    role='img'
                    height='12'
                    width='12'
                    aria-hidden='true'
                    viewBox='0 0 16 16'
                    data-encore-id='icon'
                    className='fill-white'
                  >
                    <path d='M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z'></path>
                  </svg>
                </div>
                Liked Songs
              </a>
              <a
                href='#'
                className='flex items-center gap-4 hover:brightness-125'
              >
                <div className='bg-green-900 w-6 h-6 flex items-center justify-center rounded-sm'>
                  <svg
                    role='img'
                    height='16'
                    width='16'
                    aria-hidden='true'
                    viewBox='0 0 16 16'
                    data-encore-id='icon'
                    className='fill-green-600'
                  >
                    <path d='M3.75 0A1.75 1.75 0 0 0 2 1.75v12.952c0 1.051 1.22 1.633 2.037.972l3.962-3.208 3.943 3.204c.817.663 2.038.082 2.038-.97V1.75A1.75 1.75 0 0 0 12.23 0H3.75z'></path>
                  </svg>
                </div>
                Your Episodes
              </a>
            </div>
          </nav>

          <hr className='my-4 opacity-20' />

          <nav className='flex flex-col text-sm font-medium space-y-3 text-zinc-400 overflow-y-auto h-[475px] scr'>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 1
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100 '>
              Playlist 2
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 3
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 4
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 5
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 6
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 7
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Group
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
            <a href='#' className='cursor-default hover:text-zinc-100'>
              Playlist 8
            </a>
          </nav>

          <a className='flex items-center gap-4 absolute bottom-4 text-sm font-medium m-auto cursor-pointer hover:brightness-200'>
            <Download size={24} />
            Install App
          </a>
        </aside>
        <main className='flex-1 px-8 py-4'>
          <nav className='w-full flex justify-between items-center'>
            <div className='flex gap-4'>
              <button className='w-8 h-8 bg-zinc-950 rounded-full text-center flex items-center justify-center'>
                <ChevronLeft />
              </button>
              <button className='w-8 h-8 bg-zinc-950 rounded-full text-center flex items-center justify-center'>
                <ChevronRight />
              </button>
            </div>

            <div className='flex items-center justify-center gap-4 text-sm font-bold'>
              <button className='border  border-zinc-100 h-8 text-center m-auto flex items-center px-3 py-4 rounded-full hover:scale-105'>
                Upgrade
              </button>
              <button className='bg-zinc-950 h-8 text-center m-auto flex items-center pr-3 py-4 rounded-full gap-2 hover:bg-zinc-900'>
                <Image
                  src={profilePic}
                  alt='profile image'
                  width={28}
                  height={28}
                  className='rounded-full'
                ></Image>
                account_name
                <ChevronDown size={16} />
              </button>
            </div>
          </nav>

          <div className='pt-6'>
            <h1 className='text-3xl font-bold'>Good afternoon</h1>

            <div className='flex w-full gap-6 mt-6'>
              <div className='flex flex-col justify-between w-full gap-3'>
                <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center'>
                  <Image
                    src={playListCover}
                    alt='profile image'
                    className='h-20 w-auto rounded-l-md'
                  />

                  <h3 className='ml-4 font-bold'>Playlist</h3>
                </div>
                <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center'>
                  <Image
                    src={playListCover}
                    alt='profile image'
                    className='h-20 w-auto rounded-l-md'
                  />

                  <h3 className='ml-4 font-bold'>Playlist</h3>
                </div>
              </div>
              <div className='flex flex-col justify-between w-full'>
                <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center'>
                  <Image
                    src={playListCover}
                    alt='profile image'
                    className='h-20 w-auto rounded-l-md'
                  />

                  <h3 className='ml-4 font-bold'>Playlist</h3>
                </div>
                <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center'>
                  <Image
                    src={playListCover}
                    alt='profile image'
                    className='h-20 w-auto rounded-l-md'
                  />

                  <h3 className='ml-4 font-bold'>Playlist</h3>
                </div>
              </div>
              <div className='flex flex-col justify-between w-full'>
                <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center'>
                  <Image
                    src={playListCover}
                    alt='profile image'
                    className='h-20 w-auto rounded-l-md'
                  />

                  <h3 className='ml-4 font-bold'>Playlist</h3>
                </div>
                <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center'>
                  <Image
                    src={playListCover}
                    alt='profile image'
                    className='h-20 w-auto rounded-l-md'
                  />

                  <h3 className='ml-4 font-bold'>Playlist</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-6'>
            <h2 className='text-2xl font-bold'>Made For you</h2>
          </div>

          {/* {children} */}
        </main>
      </div>
      <footer className='w-screen bg-zinc-800 border-t border-zinc-700 p-6 '>
        mine footer
      </footer>
    </div>
  );
}
