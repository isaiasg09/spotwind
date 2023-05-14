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
  Heart,
  PictureInPicture2,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Volume2,
} from "lucide-react";
import profilePic from "../../public/profile.webp";
import playListCover from "../../public/playlist-c.jpg";
import mix from "../../public/mix.jpg";
import albumCover from "../../public/album-cover.webp";

export default function Home() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <div className='flex flex-row flex-1'>
        <aside className='w-72 bg-zinc-950 flex flex-col p-6 pb-0 resize-x overflow-auto max-w-sm min-w-[190px] relative'>
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

          <div className='bg-zinc-950'>
            <a className='flex items-center gap-4 text-sm font-medium m-auto cursor-pointer hover:brightness-200'>
              <Download size={24} />
              Install App
            </a>
          </div>
        </aside>

        <main className='flex-1'>
          <div className='background-gradient'>
            <nav className='w-full flex justify-between items-center px-8 py-4'>
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

            <div className='pt-6 px-8 py-4'>
              <h1 className='text-3xl font-bold'>Good afternoon</h1>

              <div className='flex w-full gap-6 mt-6'>
                <div className='flex flex-col justify-between w-full gap-3'>
                  <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center hover:bg-[hsla(0,0%,100%,.2)] cursor-pointer group'>
                    <Image
                      src={playListCover}
                      alt='profile image'
                      className='h-20 w-auto rounded-l-md playlist-cover'
                    />

                    <div className='p-4 flex flex-row justify-between items-center w-full'>
                      <h3 className='font-bold'>Playlist</h3>

                      <button className='rounded-full bg-[#1ED760] p-1 shadow-circle opacity-0 :not scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center hover:bg-[hsla(0,0%,100%,.2)] cursor-pointer group'>
                    <Image
                      src={playListCover}
                      alt='profile image'
                      className='h-20 w-auto rounded-l-md playlist-cover'
                    />

                    <div className='p-4 flex flex-row justify-between items-center w-full'>
                      <h3 className='font-bold'>Playlist</h3>

                      <button className='rounded-full bg-[#1ED760] p-1 shadow-circle opacity-0 :not scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between w-full'>
                  <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center hover:bg-[hsla(0,0%,100%,.2)] cursor-pointer group'>
                    <Image
                      src={playListCover}
                      alt='profile image'
                      className='h-20 w-auto rounded-l-md playlist-cover'
                    />

                    <div className='p-4 flex flex-row justify-between items-center w-full'>
                      <h3 className='font-bold'>Playlist</h3>

                      <button className='rounded-full bg-[#1ED760] p-1 shadow-circle opacity-0 :not scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center hover:bg-[hsla(0,0%,100%,.2)] cursor-pointer group'>
                    <Image
                      src={playListCover}
                      alt='profile image'
                      className='h-20 w-auto rounded-l-md playlist-cover'
                    />

                    <div className='p-4 flex flex-row justify-between items-center w-full'>
                      <h3 className='font-bold'>Playlist</h3>

                      <button className='rounded-full bg-[#1ED760] p-1 shadow-circle opacity-0 :not scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between w-full'>
                  <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center hover:bg-[hsla(0,0%,100%,.2)] cursor-pointer group'>
                    <Image
                      src={playListCover}
                      alt='profile image'
                      className='h-20 w-auto rounded-l-md playlist-cover'
                    />

                    <div className='p-4 flex flex-row justify-between items-center w-full'>
                      <h3 className='font-bold'>Playlist</h3>

                      <button className='rounded-full bg-[#1ED760] p-1 shadow-circle opacity-0 :not scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='h-20 w-full bg-[hsla(0,0%,100%,.1)] rounded-md flex items-center hover:bg-[hsla(0,0%,100%,.2)] cursor-pointer group'>
                    <Image
                      src={playListCover}
                      alt='profile image'
                      className='h-20 w-auto rounded-l-md playlist-cover'
                    />

                    <div className='p-4 flex flex-row justify-between items-center w-full'>
                      <h3 className='font-bold'>Playlist</h3>

                      <button className='rounded-full bg-[#1ED760] p-1 shadow-circle opacity-0 :not scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                            fill='black'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-6 px-8 py-4'>
            <div className='flex flex-row justify-between items-center'>
              <h2 className='text-2xl font-bold mb-5 cursor-pointer w-fit hover:underline'>
                Made For you
              </h2>

              <a href='#' className='hover:underline'>
                Show all
              </a>
            </div>

            <div className='flex flex-row items-center gap-6'>
              <div className='flex flex-col gap-2 bg-zinc-900 h-72 p-4 rounded-lg cursor-pointer hover:bg-zinc-800 group'>
                <div className='relative'>
                  <Image
                    src={mix}
                    alt='mix cover'
                    height={158}
                    width={158}
                    className='rounded-lg mix-cover'
                  />
                  <button className='rounded-full bg-[#1ED760] p-1 shadow-circle absolute bottom-3 right-1 opacity-0 :not translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                    <svg
                      width='40'
                      height='40'
                      viewBox='0 0 56 56'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                        fill='black'
                      />
                    </svg>
                  </button>
                </div>

                <h4 className='font-bold mt-2'>Daily Mix 1</h4>

                <p>Artist, Artist </p>
              </div>
              <div className='flex flex-col gap-2 bg-zinc-900 h-72 p-4 rounded-lg cursor-pointer hover:bg-zinc-800 group'>
                <div className='relative'>
                  <Image
                    src={mix}
                    alt='mix cover'
                    height={158}
                    width={158}
                    className='rounded-lg mix-cover'
                  />
                  <button className='rounded-full bg-[#1ED760] p-1 shadow-circle absolute bottom-3 right-1 opacity-0 :not translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                    <svg
                      width='40'
                      height='40'
                      viewBox='0 0 56 56'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                        fill='black'
                      />
                    </svg>
                  </button>
                </div>

                <h4 className='font-bold mt-2'>Daily Mix 1</h4>

                <p>Artist, Artist </p>
              </div>
              <div className='flex flex-col gap-2 bg-zinc-900 h-72 p-4 rounded-lg cursor-pointer hover:bg-zinc-800 group'>
                <div className='relative'>
                  <Image
                    src={mix}
                    alt='mix cover'
                    height={158}
                    width={158}
                    className='rounded-lg mix-cover'
                  />
                  <button className='rounded-full bg-[#1ED760] p-1 shadow-circle absolute bottom-3 right-1 opacity-0 :not translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out active:!scale-95 active:brightness-50'>
                    <svg
                      width='40'
                      height='40'
                      viewBox='0 0 56 56'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                        fill='black'
                      />
                    </svg>
                  </button>
                </div>

                <h4 className='font-bold mt-2'>Daily Mix 1</h4>

                <p>Artist, Artist </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className='w-screen bg-zinc-800 border-t border-zinc-700 p-4 flex flex-row items-center justify-between album-cover'>
        <div className='flex flex-row gap-4 items-center'>
          <Image src={albumCover} alt='album cover' width={56} height={56} />

          <div className='flex flex-col'>
            <h3>Music</h3>

            <p className=' text-zinc-400 text-sm leading-none'>
              Artist, Artist, Artist, Artist
            </p>
          </div>

          <Heart width={16} height={16} />
          <PictureInPicture2 width={16} height={16} />
        </div>

        <div className='flex flex-col max-w-[500px] w-full justify-center items-center'>
          <div className='flex flex-row items-center gap-6'>
            <Shuffle width={20} height={20} />
            <SkipBack width={24} height={24} />

            <button className='rounded-full bg-white cursor-default'>
              <svg
                width='36'
                height='36'
                viewBox='0 0 56 56'
                fill='white'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M40.2034 27.5619C40.5488 27.7519 40.5488 28.2481 40.2034 28.4381L21.741 38.5925C21.4077 38.7757 21 38.5347 21 38.1544V17.8456C21 17.4653 21.4077 17.2243 21.741 17.4075L40.2034 27.5619Z'
                  fill='black'
                />
              </svg>
            </button>

            <SkipForward width={24} height={24} />
            <Repeat width={20} height={20} />
          </div>
          <div className='flex flex-row items-center w-full gap-2'>
            <span>0:00</span>

            <div className='h-1 bg-zinc-600 w-full rounded-full'>
              <div className='h-1 bg-zinc-200 w-36 rounded-full'></div>
            </div>

            <span>0:00</span>
          </div>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <Mic2 width={20} height={20} />
          <ListMusic width={20} height={20} />
          <MonitorSpeaker width={20} height={20} />
          <div className="flex flex-row gap-2 items-center">
            <Volume2 width={20} height={20} />

            <div className='h-1 bg-zinc-600 rounded-full w-24'>
              <div className='h-1 bg-zinc-200 rounded-full w-1/2'></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
