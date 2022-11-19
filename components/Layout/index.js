import React from 'react';
import Head from 'next/head';
import Sidebar from './Navigation/Sidebar';
import Header from './Navigation/Header';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <title>Data Analisis</title>
            </Head>
            <div className='font-sans antialiased text-gray-600 min-h-full flex flex-row'>
                <div className='min-h-screen bg-slate-900'>
                    <Sidebar />
                </div>
                <main className='flex flex-col w-full'>
                    <div className='flex-row bg-gray-50'>
                        <Header />
                    </div>
                        <div className='flex flex-row justify-center'>
                            {children}
                        </div>
                </main>
            </div>
        </React.Fragment>
    )
}
  