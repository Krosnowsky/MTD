import React from 'react';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';
import "../Styles/Publication.css";

const Publication = () => {
    return ( 
        <div className="twitt">
        <TwitterTimelineEmbed
            
          sourceType="profile"
          // The preferred screen name goes next:  
          screenName="ladygaga"
          // Style options goes here:
          options={{ height: 1600 }}
        />
        {/* <TwitterTweetEmbed 
        // Here goes your copied ID.
        tweetId={"1503415880679452684"} 
        // Style options goes here:
        optins={{width: "900px"}} 
/> */}
        </div>    
     );
}
 
export default Publication;