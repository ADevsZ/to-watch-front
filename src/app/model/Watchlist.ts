export class WatchlistActive {
    watchlistId?: number;
    watchlistName?: string;
    mediaList?: WatchlistMediaActive[];
}

export class WatchlistMediaActive {
    mediaId?: number;
    type?: string;
    orden?: number;
    viewed?: boolean;
    mediaTitle?: string;
}

export class Watchlist {
    watchlistId?: number;
    name?: string;
    active?: boolean;
    mediaCount?: number;
}

export class WatchlistMedia {
    id?: number;
    orden?: number;
    viewed?: boolean;
    watchlistId?: number;
    mediaId?: number;
    type?: string;
    mediaTitle?: string;
    releaseDate?: string;
}

export class WatchlistCreate {
    name?: string;
    userId?: number;
    mediaList?: WatchlistMediaCreate[];
}

export class WatchlistMediaCreate {
    orden?: number;
    mediaId?: number;
}