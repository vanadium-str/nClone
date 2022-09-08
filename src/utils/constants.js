export const allPosts = 'allPosts';
export const addLink = 'addLink';
export const currentPost = 'currentPost';
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

export const data = [
    {
        username: "sherif-snow-60",
        image: "https://robohash.org/back.png?size=300x300",
        title: "yet port original",
        amountVotes: 345,
        date_time: "Sun Jul 26 18:14:57 UTC 1970",
        comments: [
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 20,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            }
        ]
    },
    {
        username: "gutsy.sun",
        image: "https://robohash.org/discuss.png?size=300x300",
        title: "number est period",
        amountVotes: 215,
        date_time: "Tue Mar 1 02:02:01 UTC 1983",
        comments: [
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 5,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            },
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 11,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            }
        ]
    },
    {
        username: "sir.butterfly",
        image: "https://robohash.org/shine.png?size=300x300",
        title: "right build close",
        amountVotes: 670,
        date_time: "Sat Feb 9 19:47:45 UTC 1974",
        comments: [
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 2,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            },
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 30,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            },
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 15,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            },
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 10,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            }
        ]
    },
    {
        username: "long-voice-48",
        image: "https://robohash.org/character.png?size=300x300",
        title: "necessary break doctor",
        amountVotes: 123,
        date_time: "Fri Jan 23 00:53:51 UTC 2060",
        comments: []
    },
    {
        username: "cold-fog",
        image: "https://robohash.org/car.png?size=300x300",
        title: "similar silver tempora",
        amountVotes: 773,
        date_time: "Tue Nov 24 09:22:24 UTC 2054",
        comments: [
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 85,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            },
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 15,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            },
            {
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi.',
                author: 'sherif-snow-60',
                amountVotes: 24,
                date_time: "Fri Sep 1 13:46:40 UTC 1972",
                amountComments: 0
            }
        ]
    }
]