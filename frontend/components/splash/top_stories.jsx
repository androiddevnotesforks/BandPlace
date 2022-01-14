import React from "react";

const TopStories = () => (
    <div className="top-stories-bar">
        <div className="top-stories">
            <div className="featured-story">
                <div className="story-text">
                    <h3>Remember Grunge?</h3>
                    <span>No seriously, do you? No one will tell me what grunge is. Is it a feeling? A band? Please email me if you know!!!</span>
                </div>
            </div>
            <div className="story" id="one">
                <div className="story-text">
                    <h4>Alternate History:</h4>
                    <span> WHAT WOULD IT SOUND LIKE IF THE ROLLING STONES WERE STILL ALIVE? </span>    
                </div>
            </div>
            <div className="story" id="two">
                <div className="story-text">      
                    <h4>T. Rex: The Demo User That Users Love</h4>
                    <span> HIT THAT LOGIN BUTTON TO CHECK OUT THE HYPE </span>
                </div>
            </div>
            <div className="story" id="three">
                <div className="story-text">
                    <h4>Bandplace Semi-Anually</h4>
                    <span> NEW TUNES? MAYBE! TOO BAD THESE AREN'T CLICKABLE </span>
                </div>
            </div>
        </div>
    </div>
);


export default TopStories;