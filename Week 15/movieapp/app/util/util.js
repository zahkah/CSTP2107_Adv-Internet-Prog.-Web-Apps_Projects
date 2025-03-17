export const ParseTitle = (title) => {
    switch (title) {
        case "popular":
            return "Popular Movies";
        case "top_rated":
            return "Top Rated Movies";
        case "upcoming":
            return "Upcoming Movies";
        default:
            return "Now Playing"
    }
}