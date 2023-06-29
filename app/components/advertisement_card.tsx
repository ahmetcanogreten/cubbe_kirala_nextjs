export default function AdvertisementCard({ post }: { post: any }) {
    return (
        <>
            <div className="flex border-4 flex-col lg:flex-row border-red-600 rounded-lg p-4 ">
                <img className="rounded-lg self-center" src={post.photo} width={300} />
                <div className="p-4"></div>

                <div className="flex flex-col w-full">
                    {
                        post.has_fular ? <InfoRow title="Fular" content={post.color} /> : <InfoRow title="Fular" content="Yok" />
                    }
                    {
                        post.has_cubbe ? <InfoRow title="Cübbe" content={post.size} /> : <InfoRow title="Cübbe" content="Yok" />
                    }
                    <InfoRow title="Açıklama" content={post.description} />
                </div>
            </div>
            <br />
        </>

    )


}

export function InfoRow({ title, content }: { title: string, content: string }) {
    return (
        <div className="flex p-4 my-2 bg-gray-100 rounded-lg w-full h-min">
            <h1 className="font-bold w-1/5">{title}</h1>
            <div className="p-2" />
            <p>{content}</p>
        </div>
    )
}