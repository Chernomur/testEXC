let  date = (a) => {
    let date = new Date(a);
    let time = new Date(a);
    let options = {};
    options.hour = 'numeric';
    options.minute = 'numeric';
    return (date.toLocaleDateString('en-GB') + ' ' + time.toLocaleTimeString('en-GB', options));

}
export default date;