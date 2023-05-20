export interface WatchlistActive {
    watchlistId: number,
    name: string
    mediaList: WatchlistMediaActive[]
}

export interface WatchlistMediaActive {
    mediaId: number,
    orden: number,
    viewed: boolean
}