/**
 * Created by danya on 02/07/2017.
 */
export class ItemtypesData {
    private static data = [
        {title: 'Продукты', value: 'food'},
        {title: 'Гигиена', value: 'hygiene'},
        {title: 'Общее', value: 'common'}
    ];

    public static getItemTypes() {
        return this.data;
    }
}