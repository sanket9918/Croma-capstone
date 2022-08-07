import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        String s = "This, is, me, with, money";

        Scanner sc = new Scanner(s);
        while (sc.hasNext()) {
            System.out.println(sc.next());

        }
        sc.close();
    }
}