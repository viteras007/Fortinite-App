const MAIN_PUBLIC_API = "https://fortnite-public-api.theapinetwork.com/prod09";

const API_URLS = {
    USERS: {
        FIND_BY_ID: MAIN_PUBLIC_API.concat("/users/id"),
        STATS: MAIN_PUBLIC_API.concat("/users/public/br_stats_v2")
    }
};

export const generalConfig = {
    API_URLS,
    MAIN_PUBLIC_API
};