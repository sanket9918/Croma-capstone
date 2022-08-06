package Part2;

public abstract class DB implements Comparable<DB> {

    protected static int count;
    protected String name;
    protected double cost;

    protected double storage;

    public DB(String name, double cost, double storage) {
        this.name = name;
        this.cost = cost;
        this.storage = storage;
    }

    public static int getCount() {
        return count;
    }

    public static void resetCount() {
        count = 0;
    }

    public static void setCount(int count) {
        DB.count = count;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public double getStorage() {
        return storage;
    }

    public void setStorage(double storage) {
        this.storage = storage;
    }

    @Override
    public String toString() {
        return "Storage: " + storage + "\nBase cost: $" + cost;
    }

    public int compare(DB o1, DB o2) {
        if (o1 == o2)
            return 0;
        if (o1 == null)
            return 1;
        if (o2 == null)
            return -1;
        return o1.compareTo(o2);

    }

}
