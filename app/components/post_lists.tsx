import AdvertisementCard from "./advertisement_card";
import { Post } from "../models/post";

export default function AdvertisementList({ posts }: { posts: Post[] }) {


    return (
        <>
            {
                posts.map((post) => {
                    return <AdvertisementCard
                        key={post.id}
                        post={post}
                    />
                })
            }
        </>
    )
}