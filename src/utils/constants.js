// export function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min
// }

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const dateFormat = () => {
    let date = new Date();
    let result = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    console.log(result);
    return result;
}

export const dateArray = (date) => {
    let arrDate = date.split(' ');
    let arrTime = arrDate[3].split(':');
    let newDate = `${arrDate[1]} ${arrDate[2]}, ${arrDate[5]} ${arrTime[0]}:${arrTime[1]}`;
    return newDate;
}