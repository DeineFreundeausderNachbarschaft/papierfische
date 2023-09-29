import { Card,  CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }:
  Props) => {
  return (
    <Card className="w-full max-w-fit sm:max-w-[356px] mb-9">
      
      <Link href={downloadLink} target="_blank">     
      <CardHeader className="flex-center flex-col gap-2.5 !p-0">
        <div className="h-fit w-full">
          <Image
          src={image}
          className="h-full rounded-md object-cover"
          width={384}
          height={440}
          alt={title}
          />
        </div>

        <CardTitle className="text-gradient_lightgreen-yellow paragraph-download line-clamp-1 w-full text-left outline-darkgreen">{title}</CardTitle>
      </CardHeader>
      </Link>

      <CardContent className="flex-between mt-4 p-0">
        <div className="font-semibold flex-center gap-1.5 outline-darkgreen text-gradient_lightgreen-yellow">
        <Image
        className="mb-1" src="/downloads.svg" width={32} height={32} alt="download"
        />
        {`${downloadNumber}`}
        </div>
        <Link className="outline-darkgreen font-semibold text-gradient_lightgreen-yellow gap-1.5" href={downloadLink} target="_blank">
          Download PDF <Image className="inline mb-1 mr-[0.21rem]" src="/arrow-green.svg" width={25} height={15} alt="arrow" />
        </Link>
      </CardContent>

    </Card>
  )
}

export default ResourceCard

//target="_blank" ensures opens in new tab