export class DimensionsData {
    private static dimensions = [
        {title :'кг', value: 'кг'},
        {title: 'г', value: 'г'},
        {title: 'шт', value: 'шт'},
        {title: 'л', value: 'л'},
        {title: 'm3', value: 'm3'},
        {title: 'ст.л.', value: 'ст.л.'},
        {title: 'ч.л.', value: 'ч.л.'},
        {title: 'уп.', value: 'уп.'},
        {title: 'бут.', value: 'бут.'},
    ];

    public static getDimensions() {
        return this.dimensions;
    }
}