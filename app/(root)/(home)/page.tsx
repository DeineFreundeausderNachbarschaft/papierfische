import SearchForm from '@/components/SearchForm'
import Filters from '@/components/Filters'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import ResourceCard from "@/components/ResourceCard"
import Header from "@/components/Header";

export const revalidate = 900;
//lets update server (in seconds 900=every15 mins)
interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist();

  console.log(resourcesPlaylist)

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
    <section className="nav-padding w-full">
      <div className="flex-center relative min-h-[200px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        <h1 className="sm:heading1 heading2 mb-8  text-center max-md:leading-[5rem] max-[470px]:leading-[3.5rem] max-md:mb-0 max-[638px]:mb-1 max-xs:leading-[1] max-md:p-2 max-xs:p-1">Papierfische Bekämpfen</h1>
      </div>
    <SearchForm />
    </section>

    <Filters />

    {(searchParams?.query || searchParams?.category) && (
          <section className="flex-center w-full flex-col mt-2">
      <Header 
        title="Resources"
        query={searchParams?.query || ''}
        category={searchParams?.category || ''}
      />

<div className="mt-10 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
  {resources?.length > 0 ? (
    resources.map((resource: any) => (
      <ResourceCard
      key={resource._id}
      title={resource.title}
      id={resource._id}
      image={resource.image}
      downloadNumber={resource.views}
      downloadLink={resource.downloadLink}
      />
    ))
  ): (
    <p className="body-regular">
      keine Ergebnisse
    </p>
  )}
</div>

    </section>
    )}
    {resourcesPlaylist.map((item: any) => (
      <section key={item._id} className="flex-center mt-2 w-full flex-col sm:mt-2">
        <h1 className="heading3 self-auto text-[darkgreen]">{item.title}</h1>
        <div className="mt-10 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
      {resources.map((resource: any) => (
      <ResourceCard
      key={resource._id}
      title={resource.title}
      id={resource._id}
      image={resource.image}
      downloadNumber={resource.views}
      downloadLink={resource.downloadLink}
      />
    ))}
        </div>
      </section>
    ))}
    </main>
  )
}

export default Page