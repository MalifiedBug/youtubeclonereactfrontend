
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



// const data = {
//     "videoId": "aqW4xXUgmno",
//     "title": "[CHOREOGRAPHY] BTS (방탄소년단) '달려라 방탄 (Run BTS)' Dance Practice",
//     "channelTitle": "BANGTANTV",
//     "channelId": "UCLkAepWjdylmXSltofFvsYQ",
//     "description": "#BTS #방탄소년단 #달려라방탄 #RunBTS \n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official...",
//     "viewCount": "6955437",
//     "publishedText": "18 hours ago",
//     "lengthText": "3:30",
//     "thumbnail": [
//       {
//         "url": "https://i.ytimg.com/vi/aqW4xXUgmno/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCXlLO6WkSFQhxUIA_Fr7Km2RnFQg",
//         "width": 210,
//         "height": 118
//       },
//       {
//         "url": "https://i.ytimg.com/vi/aqW4xXUgmno/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh_q-DXzn6fUcln13rTjz7CIcKBQ",
//         "width": 246,
//         "height": 138
//       },
//       {
//         "url": "https://i.ytimg.com/vi/aqW4xXUgmno/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG_PcfVS6VDvGSUHnLXHdvnYhoqQ",
//         "width": 336,
//         "height": 188
//       }
//     ],
//     "richThumbnail": null,
//     "channelThumbnail": [
//       {
//         "url": "https://yt3.ggpht.com/NDWZM_aZQZJ81KRMyctZ5WYJbMIeDXLXBbAYfudK9idNpn7jIiamnj4-_3XIvCvKr1fEU7551A=s88-c-k-c0x00ffffff-no-rj",
//         "width": 68,
//         "height": 68
//       }
//     ]
//   }

  function convertViews (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

export default function VideoCard({data}){

    const convertedview = convertViews(data.viewCount);
    const truncated = truncate(data.title,50)
    
    return (
      <div className="videocard">
        <img className="image" src={data.thumbnail[2].url} alt="data1"></img>

        <div className="videoinfo">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container  spacing={0}>
              <Grid  item xs={2}>                
                    <img className="channelimage" src={data.channelThumbnail[0].url} alt="channel"></img>
                
              </Grid>
              <Grid className='innergrid' item xs={10}>
                <Grid item xs={12}>
                  <b>{truncated}</b>
                </Grid>
                <Grid item xs={12}>
                  {data.channelTitle}
                </Grid>
                <Grid className='views' item xs={12}>
                  <div>{convertedview}</div> . <div> {data.publishedText}</div>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    );
}


