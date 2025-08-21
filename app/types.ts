export type Project = {
    id: number,
    documentId: string,
    title: string,
    description: string,
    image: string,
    url: string,
    date: string,
    category: string,
    featured: boolean
}

export type Post = {
    id: number,
    title: string,
    excerpt: string,
    slug: string,
    date: string,
    image: string,
    body: string
}

export type StrapiResponse<T> = {
    data: T[]
}

export type StrapiProject = {
    id: number,
    documentId: string,
    title: string,
    description: string,
    image?: {
        url: string,
        formats?: {
            thumbnail?: {url: string},
            small?: {url: string},
            medium?: {url: string},
            large?: {url: string},
        }
    }
    url: string,
    date: string,
    category: string,
    featured: boolean
}

export type StrapiPost = {
    id: number,
    documentId: string,
    title: string,
    slug: string,
    excerpt: string,
    image?: {
        url: string,
        formats?: {
            thumbnail?: {url: string},
            small?: {url: string},
            medium?: {url: string},
            large?: {url: string},
        }
    }
    date: string,
    body: string
}