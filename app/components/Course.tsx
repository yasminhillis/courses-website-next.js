import Image from 'next/image'

type CourseProps = {
    src: string, 
    title: string,
    description: string
}

export default function Course({ src, title, description }: CourseProps){
    return (
        <div className="bg-[#F5F8FE] w-full h-auto p-5 rounded-lg font-jakarta">
            <Image src={src} width={20} height={20} alt={`${title} icon`} />
            <h3 className="font-bold my-2">{title}</h3>
            <p className="text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-3 text-gray-600">{description}</p>
            <button className="bg-[#1C1C1C] text-white rounded-lg px-4 py-2.5 text-sm mt-4 font-semibold cursor-pointer hover:bg-[#3D3D3D]">Learn more</button>
        </div>
    )
}