package Part1;

public class HomogenousDb extends DistributedDB {

    /**
     * Static member for the COST_FACTOR parameter
     */
    public static final double COST_FACTOR = 1.2;

    public double getCostFactor() {
        return COST_FACTOR;
    }

    public double monthlyCost() {
        double userCost = userCost();
        return this.cost + userCost * HomogenousDb.COST_FACTOR;
    }

    public HomogenousDb(String name, double cost, double storage, int noOfUsers, double costPerUser) {
        super(name, cost, storage, noOfUsers, costPerUser);
    }

    public static void main(String[] args) {
        HomogenousDb homogenousDb = new HomogenousDb("Sanket1", 100, 200, 300, 400);
        System.out.println(homogenousDb);
    }

}
