import React, { useEffect, useState } from "react";

interface Image {
    caption: string;
    src: string;
    alt?: string;
}

interface Props {
    images: Image[]
}

export function Carousel({ images }: Props) {
    const [imageIndex, setImageIndex] = useState(0);
    const currentImage = images[imageIndex];

    const getIndicatorStyling = (index: number) => index === imageIndex ? "bg-gray-400 border-0" : "border-2 border-gray-600 hover:border-gray-400";

    useEffect(() => {
        let timer = setTimeout(() => {
            if (imageIndex + 1 === images.length) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }, 20000)

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div>
            <figure className="">
                <img className="rounded-lg shadow-xl w-5/6 m-auto" src={ currentImage.src } alt={ currentImage.alt } />
                <figcaption className="ps-caption">{ currentImage.caption }</figcaption>
            </figure>
            <div className="flex justify-center space-x-2 mt-6">
                { images.map((img, i) => 
                    <span 
                        className={`w-3 h-3 rounded-full cursor-pointer ${ getIndicatorStyling(i) }`} 
                        onClick={ () => {
                            setImageIndex(i);
                        }}
                    /> 
                )}
            </div>
        </div>
    )
}