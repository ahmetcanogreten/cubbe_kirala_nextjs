'use client';

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

import { Upload, UploadFile, UploadProps } from "antd";

import { supabase } from "../supabase";
import { User } from "@supabase/supabase-js";

export default function CreateAdvertisement() {
    const [isAdvertisementCreating, setIsAdvertisementCreating] = useState(false)
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });
    }, []);

    const openCreateAdvertisementForm = () => {
        setIsAdvertisementCreating(true);
    }

    const toLoginPage = () => {
        router.push("/login");
    }
    return (
        <>
            <div className="border-4 border-red-600 rounded-lg p-4">
                {
                    user ?
                        <>
                            <h1 className="text-xl font-bold">İlan oluşturmak ister misin ?</h1>
                            <br />
                            {
                                isAdvertisementCreating ?
                                    <CreateAdvertisementForm
                                        onClose={() => {
                                            setIsAdvertisementCreating(false);
                                        }}
                                    />
                                    :
                                    <button className="bg-red-600 p-4 rounded-lg text-white" onClick={openCreateAdvertisementForm}>
                                        + Cübbe İlanı Oluştur
                                    </button>
                            }
                        </> : <>
                            <h1 className="text-xl font-bold">İlan oluşturmak için giriş yapmalısın.</h1>
                            <br />
                            <button className="bg-red-600 p-4 rounded-lg text-white" onClick={toLoginPage}>
                                Giriş Yap
                            </button>
                        </>

                }

            </div>
        </>
    )
}

export function CreateAdvertisementForm({ onClose }: { onClose: () => void }) {

    const [imageList, setImageList] = useState<UploadFile[]>([]);
    const [postType, setPostType] = useState("selling"); // selling, renting, buying, renting-from
    const [isCubbe, setIsCubbe] = useState(false);
    const [isFular, setIsFular] = useState(false);


    const onFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        if (newFileList.length > 1) {
            newFileList.shift();
        }
        setImageList(newFileList);
    }

    const uploadPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO
        onClose();

        if (imageList.length > 0) {
            //     const imageRef = ref(storage, v4());

            //     await uploadBytes(imageRef, imageList[0].originFileObj!);

            //     const downloadUrl = await getDownloadURL(imageRef);

            //     await addDoc(collection(db, 'posts'), {
            //         caption: caption,
            //         imageUrl: downloadUrl,
            //         createdAt: new Date(),
            //         userId: auth.currentUser?.uid,
            //         comments: []
            //     });

            //     setCaption("");
            //     setImageList([]);
            //     setImageKey(v4());

            // }

        }
    }

    const onPostTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPostType(e.target.value);
    }

    const onCubbeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCubbe(e.target.checked);
    }

    const onFularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFular(e.target.checked);
    }

    return (
        <form onSubmit={uploadPost}>
            <div className="flex flex-col">
                <label className="">Ne ilanı oluşturmak istersin ?</label>
                <select className="border-2 p-2 rounded-lg bg-white my-2" onChange={(e) => onPostTypeChange(e)}>
                    <option value="selling">Satıyorum</option>
                    <option value="renting">Kiralıyorum </option>
                    <option value="buying">Satılık Arıyorum</option>
                    <option value="renting-from">Kiralık Arıyorum </option>
                </select>
                <br />
                <label className="">Ne satıyorsun ?</label>
                <div className="flex">
                    <input id="cubbe" type="checkbox" onChange={onCubbeChange} />
                    <label htmlFor="cubbe" className="mx-2">
                        Cübbe
                    </label>
                </div>
                <div className="flex">
                    <input id="fular" type="checkbox" onChange={onFularChange} />
                    <label htmlFor="fular" className="mx-2">
                        Fular
                    </label>
                </div>
                <br />
                {
                    isFular ?
                        <>
                            <label className="">Fakülte | Fular Rengi</label>
                            <select name="fakulte" id="fakulte" className="border-2 p-2 rounded-lg bg-white my-2">
                                <option value="mimarlik">Mimarlık Fakültesi: Kahverengi</option>
                                <option value="fenedebiyat">Fen ve Edebiyat Fakültesi: Sarı</option>
                                <option value="iktisadi">İktisadi ve İdari Bilimler Fakültesi : Mavi</option>
                                <option value="egitim">Eğitim Fakültesi: Mor</option>
                                <option value="muhendislik">Mühendislik Fakültesi: Turuncu</option>
                                <option value="meslek">Meslek Yüksek Okulu: Gri</option>
                                <option value="yabancidil">Yabancı Diller Yüksek Okulu: Yeşil</option>
                                <option value="fenbilimleri">Fen Bilimleri Enstitüsü: Beyaz</option>
                                <option value="sosyalbilimler">Sosyal Bilimler Enstitüsü: Kırmızı</option>
                                <option value="denizbilimleri">Deniz Bilimleri Enstitüsü: Açık Mavi</option>
                                <option value="enformatik">Enformatik Enstitüsü: Lacivert</option>
                                <option value="uygulamali">Uygulamalı Matematik Enstitüsü: Açık kahve</option>
                            </select>
                            <br />
                        </> : null
                }
                {
                    isCubbe ?
                        <>
                            <label className="">Bedeni</label>
                            <select name="beden" id="beden" className="border-2 p-2 rounded-lg bg-white my-2">
                                <option value="xxxs">XXXS</option>
                                <option value="xxs">XXS</option>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                                <option value="xxxl">XXXL</option>
                            </select>
                            <br />
                        </> : null
                }
                {
                    postType === "selling" || postType === "renting" ?
                        <>
                            <label className="">Fotoğraf</label>
                            <Upload listType="picture" accept="image/*" multiple={false} beforeUpload={() => false} onChange={onFileChange}>
                                <div className="border-2 p-2 rounded-lg my-2">
                                    + Fotoğraf Seç

                                </div>
                            </Upload>
                            <br />
                        </> : null

                }
                <label className="">İlan Açıklaması</label>
                <textarea className="border-2 p-2 rounded-lg my-2" />
                <br />
                <button className="bg-red-600 p-4 rounded-lg text-white" type="submit">
                    Paylaş
                </button>
            </div>

        </form >
    );

}