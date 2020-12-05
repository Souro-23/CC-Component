import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import './fullScreenCard.module.css';
import classes from './fullScreenCard.module.css';


export default function FullScreenCard(props) {
    return (
        <ImageGroup>
            <ul className="images">
                {props.images.map(i => (
                    <li key={i}>
                        <Image
                            src={i}
                            alt="nature"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </li>
                ))}
            </ul>
        </ImageGroup>
    )
}