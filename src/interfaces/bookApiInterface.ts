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
    volumeInfo: VolumeProps
}

export interface BookResponse {
    items: Book[]
}