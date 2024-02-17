type image = {
    thumbnail: string
}

interface VolumeProps {
    title: string,
    publishedDate: string
    imageLinks: image
}

export interface Book {
    id: string,
    volumeInfo: VolumeProps,
    price?: number
}

export interface BookResponse {
    items: Book[],
    searchTerm: string
}

