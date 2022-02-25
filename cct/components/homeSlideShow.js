import Image from 'next/image'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomeSlideShow() {
    return (
        <Carousel>
            <Image 
                src='logo.png'
                alt=''
                width={100}
                height={100}
            />
            <Image 
                src='OR-mnt.jpeg'
                alt=''
                width={100}
                height={100}
            />
            <Image 
                src='vintageBigMack.jpg'
                alt=''
                width={100}
                height={100}
            />
        </Carousel>
    )
}