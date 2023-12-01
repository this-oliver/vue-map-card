import { useHead, useSeoMeta } from '@vueuse/head'

const useSEOHeader = () => {
  const title = 'Vue Map Card'
  const description = 'An opinionated map component for Vue.'
  
  useHead({
    title: title,
    titleTemplate: (title?: string | undefined) =>
      `${title} | ${description}`,
    meta: [
      {
        name: 'author',
        content: '@this-oliver'
      },
      {
        name: 'description',
        content: description
      }
    ]
  })
  useSeoMeta({
    title: title,
    description: description,
    ogDescription: description,
    ogTitle: title,
    ogImage: 'https://picsum.photos/seed/picsum/200/300',
    ogImageHeight: '882',
    ogImageWidth: '1686',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://picsum.photos/seed/picsum/200/300',
    twitterTitle: title,
    twitterDescription: description
  })
}
export { useSEOHeader }
