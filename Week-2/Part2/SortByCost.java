package Part2;

import java.util.Comparator;

public class SortByCost implements Comparator<DB> {
    public int compare(DB d1, DB d2) {
        return (int) (d1.cost - d2.cost);
    }

}
