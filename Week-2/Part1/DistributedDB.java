package Part1;

public class DistributedDB extends DB {

    protected int noOfUsers;
    protected double costPerUser;

    /**
     * Static member for the COST_FACTOR parameter
     */
    public static final double COST_FACTOR = 1.1;

    public DistributedDB(String name, double cost, double storage, int noOfUsers, double costPerUser) {
        super(name, cost, storage);
        this.noOfUsers = noOfUsers;
        this.costPerUser = costPerUser;
    }

    public int getNoOfUsers() {
        return noOfUsers;
    }

    public void setNoOfUsers(int noOfUsers) {
        this.noOfUsers = noOfUsers;
    }

    public double getCostPerUser() {
        return costPerUser;
    }

    public void setCostPerUser(double costPerUser) {
        this.costPerUser = costPerUser;
    }

    public double userCost() {
        return this.noOfUsers * this.costPerUser;
    }

    public double getCostFactor() {
        return COST_FACTOR;
    }

    public double monthlyCost() {
        double userCost = userCost();
        return this.cost + userCost * DistributedDB.COST_FACTOR;
    }

    @Override
    public String toString() {
        return "Monthly cost : " + monthlyCost() + "\n" + super.toString()
                + "\nNumber of Users: " + getNoOfUsers() + "\nCost per user: $" + getCostPerUser() + "\nUser cost: $"
                + userCost() + "\nCost Factor: " + getCostFactor();
    }

    public static void main(String[] args) {
        DistributedDB distributedDB = new DistributedDB("Sanket", 100, 200, 300, 400);
        System.out.println(distributedDB);
    }

}
