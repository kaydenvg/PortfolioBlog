import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import '../app/globals.css'
import {ArrowUpCircleIcon} from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <>
    <Head>
      <title>Kayden's Site</title>
    </Head>
      <main className="font-roboto relative min-h-screen sm:flex sm:items-center sm:justify-center bg-repeat" style={{
        backgroundImage: 'url(https://cdna.artstation.com/p/assets/images/images/038/739/310/medium/nigel-goh-draw-over-2.jpg?1623926089)'
      }}>
          <div className="grid">
            <div id='home' className='h-screen flex items-center'>
              <div id='linkscard' className="m-auto max-w-4xl sm:px-6 lg:px-8 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
                <div className="lg:pb-18 relative px-4 pt-4 pb-8 sm:px-6 sm:pt-10 sm:pb-14 lg:px-8 lg:pt-14">
                    <Image src='/images/profilepic.png' 
                    className=" mx-auto object-fit w-48 h-48 rounded-full animate-fade-in-up drop-shadow-sm"
                    width={500}
                    height={500}
                    alt="Picture of me"/>
                  <h1 className="mt-2 text-center text-6xl lg:text-7xl font-extrabold tracking-tight block text-sky-500 drop-shadow-sm">
                      Kayden von Grosse
                  </h1>
                  <div className="mt-4 text-center text-2xl lg:text-3xl font-bold tracking-tight text-sky-400">              
                    <h2 >Software Engineer • Aspiring Game Developer</h2>
                  </div>
                  <div className="mx-auto mt-10 flex justify-center">
                      <div className="flex gap-3">
                        <Link
                          href="#about"
                          scroll={false}
                          className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white 
                          transition hover:-translate-y-1 hover:bg-blue-600 scroll-smooth">
                          About Me
                        </Link>

                        <Link
                          href="/blog"
                          className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white 
                          transition hover:-translate-y-1 hover:bg-blue-600">
                          Blog
                        </Link>

                        <Link
                          href="#portfolio"
                          scroll={false}
                          className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white 
                          transition hover:-translate-y-1 hover:bg-blue-600 scroll-smooth">
                          Portfolio
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

          <div id='about' className='h-screen flex items-center'>
            <div className="m-auto max-w-4xl sm:px-6 lg:px-8 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="mt-2 text-center text-2xl lg:text-3xl font-bold tracking-tight text-sky-500">              
                <h2 >About Me</h2>
              </div>
            </div>
          </div>

          <div id='portfolio' className='h-screen flex items-center'>
            <div className="m-auto max-w-4xl sm:px-6 lg:px-8 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="mt-2 text-center text-2xl lg:text-3xl font-bold tracking-tight text-sky-500">              
                <h2 >Portfolio</h2>
              </div>
              <p> Here are a few projects I have done. Check out the 
                <Link className="font-bold text-sky-500" href="/blog" > BLOG </Link>
                 page for more info about how I did these</p>
            </div>
          </div>
        </div>

        <Link href='#home' scroll={false} className='fixed inset bottom-4 right-4'>
          <ArrowUpCircleIcon className='h-10 pt-1 fill-zinc-100 hover:fill-zinc-300'/>
        </Link>

      </main>
    </>
  );
}
