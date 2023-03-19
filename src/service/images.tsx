import react from 'react';
import { ImageResponse } from './types/images';

export function getImages(keyword: string): Promise<ImageResponse> {
    return fetch(`https://www.reddit.com/r/${keyword}/top.json`)
    .then((res) => res.json()).then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error);
    }
    );
}
