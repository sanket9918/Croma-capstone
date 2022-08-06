package Part2;

import java.util.Arrays;

public class DBList {
    private DB[] db;
    private String[] invalidRecords;

    public DBList() {
        this.db = new DB[0];
        this.invalidRecords = new String[0];

    }

    public DB[] getDb() {
        return db;
    }

    public void setDb(DB newDB) {
        this.db = Arrays.copyOf(this.db, this.db.length + 1);
        this.db[this.db.length + 1] = newDB;
    }

    public String[] getInvalidRecords() {
        return invalidRecords;
    }

    public void setInvalidRecords(String newInvalidRecord) {
        this.invalidRecords = Arrays.copyOf(this.invalidRecords, this.invalidRecords.length + 1);
        this.invalidRecords[this.invalidRecords.length + 1] = newInvalidRecord;
    }

}
