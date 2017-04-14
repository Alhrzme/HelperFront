export class DaysOfWeek {
    private static weekendDays = ['sat', 'sun'];
    private static weekDays = ['mon', 'tue', 'wed', 'thu', 'fri'];
    private static daysOfWeek = [
        {value: 'mon', name: 'Понедельник', abr: 'пон'},
        {value: 'tue', name: 'Вторник', abr: 'вт'},
        {value: 'wed', name: 'Среда', abr: 'ср'},
        {value: 'thu', name: 'Четверг', abr: 'чт'},
        {value: 'fri', name: 'Пятница', abr: 'пт'},
        {value: 'sat', name: 'Суббота', abr: 'сб'},
        {value: 'sun', name: 'Воскресенье', abr: 'вс'},
        {value: 'every', name: 'Каждый день', abr: 'все'},
        {value: 'weekend', name: 'Выходные', abr: 'вых'},
        {value: 'weekdays', name: 'Будни', abr: 'будни'}
    ];

    private static weekFrequencyData = [
        {value: 1, name: 'Каждую неделю'},
        {value: 2, name: 'Каждую вторую'},
        {value: 3, name: 'Каждую третью'},
        {value: 4, name: 'Каждую четвертую'},
        {value: 5, name: 'Каждую пятую'},
        {value: 6, name: 'Каждую шестую'},
        {value: 7, name: 'Каждую седьмую'},
        {value: 8, name: 'Каждую восьмую'},
        {value: 9, name: 'Каждую девятую'},
        {value: 10, name: 'Каждую десятую'},
        {value: 11, name: 'Каждую одинадцатую'},
        {value: 12, name: 'Каждую двенадцатую'},
    ];

    public static getDaysOfWeek() {
        return this.daysOfWeek;
    }

    public static getWeekFrequencyData() {
        return this.weekFrequencyData;
    }

    public static getWeekendDays() {
        return this.weekendDays;
    }

    public static getWeekDays() {
        return this.weekDays;
    }

    public static getDaysOfWeekValues() {
        return [].concat(this.getWeekendDays()).concat(this.weekDays);
    }
}