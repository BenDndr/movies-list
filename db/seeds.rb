# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

movies = Movie.create([
    {
        title: "Whiplash",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3XriEpTdnplQRzyphAC0cu3emns.jpg"
    },
    {
        title: "Shutter Island",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fQ0vGVTtxjCdAJnxwPZ88O3Wzrh.jpg"
    },
    {
        title: "Interstellar",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1pnigkWWy8W032o9TKDneBa3eVK.jpg"
    },
    {
        title: "Fight Club",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg"
    },
    {
        title: "Batman Dark Knight Rises",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ApcGBERN0p9I0nDOIwJeEmpnLU5.jpg"
    },
    {
        title: "Warcraft",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/51ghTkfKRttjOk01h3ye14JQFwY.jpg"
    },
])

reviews = Review.create([
    {
        title: "Good Movie",
        description: "Loved It !",
        score: 5,
        movie: movies.first
    },
    {
        title: "Bad af fk",
        description: "Hated it !",
        score: 1,
        movie: movies.first
    },
])
