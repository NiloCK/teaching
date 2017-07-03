import * as pouch from 'pouchdb-browser'

const key = 'record';
const localDB: PouchDB.Database<PouchDB.Core.Encodable> = new pouch(key);
const remoteDB: PouchDB.Database<PouchDB.Core.Encodable> = new pouch(
    'https://' +
    'nilock.cloudant.com/' +
    key
);

localDB.sync(remoteDB, {
    live: true,
    retry: true
})

export default class Recorder {
    private static localDB: PouchDB.Database<PouchDB.Core.Encodable> = localDB;
    private static remoteDB: PouchDB.Database<PouchDB.Core.Encodable> = remoteDB;

    private static record: Array<any> = new Array<any>();

    static init(): void {
        console.log("Recorder initializing");
        Recorder.localDB.allDocs({
            include_docs: true
        }).then(
            (docs: PouchDB.Core.AllDocsResponse<PouchDB.Core.Encodable>) => {
                docs.rows.forEach((row) => {
                    // console.log("Adding " + row + " to in-memory records.");
                    Recorder.record.push(row.doc);
                });
            }
            ).catch((err) => {
                console.log(err);
            });
    }

    static getRecord(): Array<any> {
        return Recorder.record;
    }

    static addRecord(record: Object) {
        console.log("Adding a record...");

        record._id = new Date().toJSON();

        // add record to in-memory records
        Recorder.record.push(record);
        // add record to db - syncs with cloudant
        Recorder.localDB.put(record);
    }



}