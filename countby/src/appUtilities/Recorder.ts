const key = 'record';

export default class Recorder {
    static getRecord(): Array<any> {
        let record = JSON.parse(
            window.localStorage.getItem(key)
        );

        if (record === null) {
            return [];
        } else {
            return record;
        }
    }

    static addRecord(record: Object) {
        let records = Recorder.getRecord();
        // console.log('Records: ' + records.toString());

        records.push(record);

        window.localStorage.setItem(key, JSON.stringify(records));
    }
}