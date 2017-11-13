import React from "react";
import Post from "./post";
import data from "../data";

const Main = () => {
    return (
        <div>
            {data.posts.map((item) => {
                return <Post post={item} key={item.id} />;
            })}
        </div>
    );
};

export default Main;