// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    const day = new Date(dateString).getDay();
    switch (day) {
        case 0: 
            return 'Sunday';
        break;
        case 1: 
            return 'Monday';
        break;
        case 2: 
            return 'Tuesday';
        break;
        case 3: 
            return 'Wednesday';
        break;
        case 4: 
            return 'Thursday';
        break;
        case 5: 
            return 'Friday';
        break;
        case 6: 
            return 'Saturday';
        break;
        default: 
            return ':('

    }
}