package Part2;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class DBList {
    CentralizedDB centralizedDB;
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
        db = Arrays.copyOf(db, db.length + 1);
        db[db.length - 1] = newDB;
    }

    public String[] getInvalidRecords() {
        return invalidRecords;
    }

    public void setInvalidRecords(String newInvalidRecord) {
        this.invalidRecords = Arrays.copyOf(this.invalidRecords, this.invalidRecords.length + 1);
        this.invalidRecords[this.invalidRecords.length + 1] = newInvalidRecord;
    }

    public String readFile(String filename) {
        try {
            FileInputStream fileInputStream = new FileInputStream(filename);
            DataInputStream in = new DataInputStream(fileInputStream);
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in));
            String str;
            while ((str = bufferedReader.readLine()) != null) {
                Scanner sc = new Scanner(str);
                ArrayList<String> arrayList = new ArrayList<String>();
                sc.useDelimiter(",");
                while (sc.hasNext()) {
                    arrayList.add(sc.next());
                    // System.out.println(sc.next());
                }
                switch (arrayList.get(0)) {
                    case "C":
                        centralizedDB = new CentralizedDB(arrayList.get(1),
                                Double.parseDouble(arrayList.get(2)),
                                Double.parseDouble(arrayList.get(3)), Double.parseDouble(arrayList.get(4)));
                        setDb(centralizedDB);
                        // System.out.println(centralizedDB);
                        break;
                    case "D":
                        DistributedDB distributedDB = new DistributedDB(arrayList.get(1),
                                Double.parseDouble(arrayList.get(2)), Double.parseDouble(arrayList.get(3)),
                                Integer.parseInt(arrayList.get(4)), Double.parseDouble(arrayList.get(5)));
                        setDb(distributedDB);
                        // System.out.println(distributedDB);
                        break;
                    case "H":
                        HomogenousDb homogenousDb = new HomogenousDb(arrayList.get(1),
                                Double.parseDouble(arrayList.get(2)), Double.parseDouble(arrayList.get(3)),
                                Integer.parseInt(arrayList.get(4)), Double.parseDouble(arrayList.get(5)));
                        setDb(homogenousDb);
                        // System.out.println(homogenousDb);
                        break;
                    case "E":
                        HeterogenousDB heterogenousDB = new HeterogenousDB(arrayList.get(1),
                                Double.parseDouble(arrayList.get(2)), Double.parseDouble(arrayList.get(3)),
                                Integer.parseInt(arrayList.get(4)), Double.parseDouble(arrayList.get(5)));
                        setDb(heterogenousDB);
                        // System.out.println(heterogenousDB);
                        break;
                    default:
                        System.out.println("Error");
                }

                sc.close();
            }

            in.close();

        } catch (FileNotFoundException e) {
            System.out.println("An error occured");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("An error occured");
            e.printStackTrace();
        }
        return "";
    }

    public void generateReport() {
        DB[] db = getDb();
        for (int i = 0; i < db.length; i++) {
            System.out.println(db[i].toString());

        }

    }

    public static void main(String[] args) {
        DBList dbList = new DBList();
        dbList.readFile("test.txt");
        dbList.generateReport();

    }
}
