export default function FilterCard() {
    return (
        <>
            <div className="flex flex-col border-4 border-red-600 rounded-lg p-4">
                <div className="flex">
                    <button className="bg-red-600 p-4 rounded-lg text-white w-1/2">
                        Cübbe Arayan
                    </button>
                    <div className="p-4"></div>
                    <button className="bg-red-800 p-4 rounded-lg text-white w-1/2">
                        Cübbe Kiralayan
                    </button>
                </div>
            </div>
            <br />
            <div className="flex flex-col border-4 border-red-600 rounded-lg p-4">
                <div className="flex p-4 my-2 bg-gray-100 rounded-lg items-center">
                    <h1 className="font-bold w-1/5">Fakülte</h1>
                    <div className="p-2" />
                    <select name="fakulte" id="fakulte" className="border-2 p-2 rounded-lg bg-white my-2 w-full">
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
                </div>
                <div className="flex p-4 my-2 bg-gray-100 rounded-lg items-center">
                    <h1 className="font-bold w-1/5">Beden</h1>
                    <div className="p-2" />
                    <select name="beden" id="beden" className="border-2 p-2 rounded-lg bg-white my-2  w-full">
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
                </div>
                <button className="bg-red-600 p-4 my-2 rounded-lg text-white">
                    Filtrele
                </button>
            </div>
        </>
    )
}