import { notFound } from 'next/navigation'
import Image from 'next/image'
import { changeDate } from '../../../helpers/changeDate'
import Link from 'next/link'

const fetchPost = async (slug: string) => {
    const response = await fetch(
        `http://localhost:1337/api/slugify/slugs/post/${slug}?fields[0]=title&fields[1]=content&fields[2]=publishedAt&populate[0]=category,cover`
    )
    if (response.status === 404) {
        notFound()
    } else if (!response.ok) {
        throw new Error('Failed')
    }

    return response?.json()
}

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug.toString()

    const { data: postContent } = await fetchPost(slug)

    const { title, content, publishedAt, category, cover } =
        postContent?.attributes

    const strapiUrl: string | undefined = process.env.STRAPI_URL
    const localDate: string = changeDate(publishedAt)
    const coverUrl: string = `${strapiUrl}${cover?.data?.attributes?.url}`
    const categoryData: string = category?.data?.attributes

    return (
        <>
            {postContent && (
                <div className="space-y-6">
                    <div className="not-prose relative overflow-hidden w-full h-64 md:h-[420px] rounded-lg">
                        <Image
                            src={coverUrl}
                            alt={'asfafs'}
                            fill
                            objectFit="cover"
                            objectPosition="center center"
                        />
                    </div>
                    <article className="prose max-w-none lg:prose-xl prose-img:rounded-xl dark:prose-invert prose-gray px-6">
                        <div className="flex gap-5 items-baseline">
                            <Link
                                href={`/kategoria/${categoryData?.slug}`}
                                className="text-textSecondary font-extrabold hover:text-accent no-underline"
                            >
                                {categoryData?.name}
                            </Link>
                            <p className="text-textSecondary text-base font-semibold ">
                                {localDate}
                            </p>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <span
                                className="w-14 h-2 rounded-lg block my-10"
                                style={{ backgroundColor: categoryData?.color }}
                            ></span>

                            {/* {tags && (
                               <div className="flex flex-row gap-2">
                                   {tags.map(({ id, slug }) => {
                                       return <Tag key={id} text={slug} />
                                   })}
                               </div>
                           )}  */}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        ></div>
                    </article>
                </div>
            )}
        </>
    )
}
