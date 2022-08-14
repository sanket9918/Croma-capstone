package Part1;

public class HeterogenousDB extends DistributedDB {
    public HeterogenousDB(String name, double cost, double storage, int noOfUsers, double costPerUser) {
        super(name, cost, storage, noOfUsers, costPerUser);

    }

    /**
     * Static member for the COST_FACTOR parameter
     */
    public static final double COST_FACTOR = 1.3;

    public double getCostFactor() {
        return COST_FACTOR;
    }

    public double monthlyCost() {
        double userCost = userCost();
        return this.cost + userCost * HeterogenousDB.COST_FACTOR;
    }

    public static void main(String[] args) {
        HeterogenousDB heterogenousDB = new HeterogenousDB("Sanket", 100, 200, 300, 400);
        System.out.println(heterogenousDB);
    }
}
