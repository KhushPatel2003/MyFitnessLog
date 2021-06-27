import React from 'react';
import '../../styles/video.css';

export default function Video() {
    return(
        <>
            <div className="container-main" id="video">
                <h1>
                    Tutorial and Usage of our Program!
                </h1>
                <br />
                <br />
                <iframe className="container-video" src="https://www.youtube.com/embed/7qsMx_tib0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    )
}