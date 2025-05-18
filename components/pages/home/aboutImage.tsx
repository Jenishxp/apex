import Image from "next/image"
import { useState, useEffect } from "react"


export default function AboutImage() {
    const initialArray = [10, 20, 30];
    const [rotation, setRotation] = useState(0);
    const [zNumbers, setNumbers] = useState<number[]>(initialArray);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumbers((prevNumbers) => {
                const updatedNumbers = [...prevNumbers];
                const lastNumber = updatedNumbers.pop();
                updatedNumbers.unshift(lastNumber as number);
                return updatedNumbers;
            });
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 1);
        }, 10);

        return () => clearInterval(intervalId);
    }, [zNumbers]);
    return (
        <div className="w-full ml-12 max-sm:ml-0 flex max-sm:justify-center">
            <Image src="/images/about/Image1.png" width={478} height={304} alt="Image 1" className={`absolute p-2 border border-[#333333] bg-[#0d0d0d] rounded-lg  max-sm:rounded-sm max-sm:p-1  z-${zNumbers[0]} rotate-[0deg] max-sm:w-[250px] loading="lazy"`} />
            <Image src="/images/about/Image2.png" width={478} height={304} alt="Image 2" className={`absolute p-2 border border-[#333333] bg-[#0d0d0d] rounded-lg  max-sm:rounded-sm max-sm:p-1 z-${zNumbers[1]} rotate-[6deg] max-sm:w-[250px] loading="lazy"`} />
            <Image src="/images/about/Image3.png" width={478} height={304} alt="Image 3" className={`absolute p-2 border border-[#333333] bg-[#0d0d0d] rounded-lg  max-sm:rounded-sm max-sm:p-1 z-${zNumbers[2]} rotate-[-20deg] max-sm:w-[250px] loading="lazy"`} />
        </div>
    );
}