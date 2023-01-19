function convertRate(hourlyRate) {
    // convert the hourly rate to pence
    let hourlyRateInPence = hourlyRate * 100;

    // divide the hourly rate in pence by 4 to get the 15-minute rate
    let quarterHourlyRateInPence = hourlyRateInPence / 4;

    // return the 15-minute rate
    return quarterHourlyRateInPence;
}