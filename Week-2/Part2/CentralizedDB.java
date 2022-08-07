package Part2;

public class CentralizedDB extends DB {

    private double licence;

    public double getLicence() {
        return licence;
    }

    public void setLicence(double licence) {
        this.licence = licence;
    }

    public double monthlyCost() {
        return this.cost + this.licence;
    }

    public CentralizedDB(String name, double cost, double storage, double licence) {
        super(name, cost, storage);
        this.licence = licence;

    }

    @Override
    public String toString() {
        String superString = super.toString();
        double monthlyCost = monthlyCost();
        return "Database One (class CentralizedDB) Monthly cost: $" + monthlyCost + "\n" + superString + "\nLicense: $"
                + licence + "\n\n";
    }

    public static void main(String[] args) {
        CentralizedDB centralizedDB = new CentralizedDB("Sanket", 100, 200, 400);
        System.out.println(centralizedDB);
    }

    @Override
    public int compareTo(DB o) {
        // TODO Auto-generated method stub
        return 0;
    }

}
