function CalendarData({dayList}) {
    return (
       <section className="calendarData">
            <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>   
            {dayList}
        </section>
    )
}
export default CalendarData