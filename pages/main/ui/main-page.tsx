import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import * as classes from '@src/pages/main/ui/main-page.module.css'
import {a} from "@src/pages/main";
import {connect} from "react-redux";
import {getPosts, Post} from "@src/entities/post";

interface MainPageProps {
    posts: Array<Post>;
    loading: boolean;

    getPosts: () => void;
}

const MainPage = ({posts, loading, ...props}: MainPageProps) => {
    useEffect(() => {
        props.getPosts();
    }, [])

    return (
        <div className={classes.container}>
            {loading && <div>loading...</div>}
            core main page {a}
            <Link to="/about">About</Link>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.post.data,
    loading: state.post.loading,
})

const ConnectedMainPage = connect(mapStateToProps, {getPosts})(MainPage)
export default ConnectedMainPage;
