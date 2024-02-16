interface VolumeProps {
    title: string,
    publishedDate: string
    imageLinks: {
        thumbnail: string
    }
}

export interface Book {
    id: string,
    volumeInfo: VolumeProps
}

export interface BookResponse {
    items: Book[]
}