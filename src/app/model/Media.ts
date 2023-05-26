export class Media {
    id?: string;
    type?: string;
    title?: string;
    releasedate?: string;
    nationality?: string;
    synopsis?: string;
    duration?: string;
    averageDuration?: string;
    sessionsNumber?: string;
    episodesNumber?: string;
}

export class StreamingPlatformMedia {
    platformName?: string;
    url?: string
}

export class MediaPremiere {
    premiereId?: number;
    mediaType?: string;
    mediaTitle?: string;
    releaseDate?: string;
}