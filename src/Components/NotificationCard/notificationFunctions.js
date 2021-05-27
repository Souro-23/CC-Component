export function timeDifference(timestamp) {
    var difference = new Date().getTime() - timestamp;

    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);

    if(daysDifference)
         return daysDifference + "d ago" 
    if(hoursDifference)
         return hoursDifference + "h ago" 
    if(minutesDifference)
         return minutesDifference + "m ago" 
    if(secondsDifference)
         return secondsDifference + "s ago" 	 	 
}