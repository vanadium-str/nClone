export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dateFormat = () => {
    let date = new Date();
    let result = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    console.log(result);
    return result;
}

export const dateArray = (date) => {
    console.log(date)
    if(!date){
        let date = new Date();
        let result = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        console.log(result);
        return result;
    }else{
        let arrDate = date.split(' ');
        let arrTime = arrDate[3].split(':');
        let newDate = `${arrDate[1]} ${arrDate[2]}, ${arrDate[5]} ${arrTime[0]}:${arrTime[1]}`;
        return newDate;
        }
    }

export const data = [{
    username: "sherif-snow-60",
    image: "https://robohash.org/back.png?size=300x300",
    title: "yet port original",
    amountVotes: 345,
    date_time: "Sun Jul 26 18:14:57 UTC 1970",
    comments: [{
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
         author: "sherif-snow-60",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    }
]}, {
    username: "sherif-snow-60",
    image: "https://robohash.org/back.png?size=300x300",
    title: "yet port original",
    amountVotes: 345,
    date_time: "Sun Jul 26 18:14:57 UTC 1970",
    comments: [{
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "sherif-snow-60",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    }
]}, {

    username: "sherif-snow-60",
    image: "https://robohash.org/back.png?size=300x300",
    title: "yet port original",
    amountVotes: 345,
    date_time: "Sun Jul 26 18:14:57 UTC 1970",
    comments: [{
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "sherif-snow-60",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
         author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    }
] }, {
    username: "sherif-snow-60",
    image: "https://robohash.org/back.png?size=300x300",
    title: "yet port original",
    amountVotes: 345,
    date_time: "Sun Jul 26 18:14:57 UTC 1970",
    comments: [{
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "sherif-snow-60",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    }
] }, {
    username: "sherif-snow-60",
    image: "https://robohash.org/back.png?size=300x300",
    title: "yet port original",
    amountVotes: 345,
    date_time: "Sun Jul 26 18:14:57 UTC 1970",
    comments: [{
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "sherif-snow-60",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    },
    {
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.",
        author: "username",
        amountVotes: 25,
        date_time: "Fri Sep 1 13:46:40 UTC 1972",
        amountComments: 0
    }
]

}]