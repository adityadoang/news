import React from 'react';
import {Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-800'>
             <Head title={props.title} />
            <div>
                    {props.news ? props.news.map((data, i) => {
                        return(
                        <div key={i} className="p-4 m-2 bg-white text-black">
                            <p className='text-2xl'>{data.title}</p>
                            <p>{data.descrition}</p>
                            <p className='text-small'>{data.category}</p>
                            <p className='text-small'>{data.author}</p>
                        </div>
                    )
                }): <p>Saat Ini Belum Ada Berita Tersedia</p>}
            </div>
    </div >
    )
 }