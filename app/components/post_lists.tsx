import AdvertisementCard from "./advertisement_card";

export default function AdvertisementList() {
    let posts = [
        {
            id: 1,
            fakulte: "mimarlik",
            beden: "M",
            photo: "https://images.unsplash.com/photo-1686488427892-a1df07ce041b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
            content: "Cübbemi kiralamak iste",
            phone: "0543 218 0019"
        },
        {
            id: 2,
            fakulte: "mimarlik",
            beden: "M",
            photo: "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            content: "Cübbemi kiralamak ister misin ?",
            phone: "0543 218 0019"

        },
        {
            id: 3,
            fakulte: "mimarlik",
            beden: "M",
            photo: "https://images.unsplash.com/photo-1686488427892-a1df07ce041b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
            content: "Cübbemi kiralamak ister misin ?",
            phone: "0543 218 0019"

        },
        {
            id: 4,
            fakulte: "mimarlik",
            beden: "M",
            photo: "https://images.unsplash.com/photo-1686488427892-a1df07ce041b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
            content: "Cübbemi kiralamak ister misin ?",
            phone: "0543 218 0019"

        },
        {
            id: 5,
            fakulte: "mimarlik",
            beden: "M",
            photo: "https://images.unsplash.com/photo-1686488427892-a1df07ce041b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
            content: "Cübbemi kiralamak ister misin ?",
            phone: "0543 218 0019"

        },
    ];

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