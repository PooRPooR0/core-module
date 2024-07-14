import Post from "CustomCore/entities/post/lib/post";

export type PostSliceType = {
    data: Array<Post>,
    loading: boolean,
}

export const PostSliceInitialState: PostSliceType = {
    data: [],
    loading: false,
}
