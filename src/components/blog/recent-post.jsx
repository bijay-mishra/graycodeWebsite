import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Calendar from '@/src/svg/calendar';
import htmlcontentservice from '@/src/service/htmlcontentservice';
import { ApiEndPoints } from '@/src/config/apiconfig';
import { Router } from 'next/router';



const RecentPost = () => {
    const Router=useRouter();
const [recentBlog,setRecentBlog]=useState("")
const GetRecentBlog=async()=>{
    var response=await htmlcontentservice.GetBlogRecent(1,99,"")
    if(response.Code==200){
        setRecentBlog(response.Data)
    }
}
useEffect(()=>{GetRecentBlog()},[])


    return (
        <>
           <div className="sidebar__widget mb-30">
            <h3 className="sidebar__widget-title">Recent Post</h3>
            <div className="sidebar__widget-content">
                <div className="sidebar__post rc__post">
                    {recentBlog && recentBlog.length>0 && recentBlog.slice(0,4).map((item, i) => 
                        <div key={i} className="rc__post mb-20 d-flex align-items-center">
                            <div className="rc__post-thumb mr-20">
                                <Link href={`/blog-details/${item.BlogSlug}`} 
                                >
                               
                                {item?.ThumbImage?<Image src={ApiEndPoints.baseUrl + item.ThumbImage} alt="theme-pure" width={100} height={84} />:""}
                                
                                </Link>
                            </div>
                            <div className="rc__post-content">
                                <div className="rc__meta">
                                    <span><Calendar /> {" "}{item.AddedOn.slice(0,10)}</span>
                                </div>
                                <h3 className="rc__post-title">
                                    <Link href={`/blog-details/${item.BlogSlug}`}
                                   
                                    style={{
                                        display: '-webkit-box',
                                         WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                  >
                                    
                                        {item.BlogTitle}
                                        </Link>
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default RecentPost;




