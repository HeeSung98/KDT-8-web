package java231026;

import java.util.*;

public class Main
{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//        Pair pair1 = new Pair("One", 1);
//        Pair pair2 = new Pair(2, "two");
//
//        System.out.println(pair1.getKey() + ": " + pair1.getValue());
//        System.out.println(pair2.getKey() + ": " + pair2.getValue());
//
//        LinkedList<String> linkedList = new LinkedList<>();
//
//        HashSet<String> hashSet = new HashSet<>();
//        HashMap<String, String> hashMap = new HashMap<>();
//
//        hashSet.add("a");
//        hashSet.add("b");
//        hashSet.add("a");
//
//        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();
//        linkedHashSet.add("C");
//        linkedHashSet.add("C");
//        linkedHashSet.add("A");
//        linkedHashSet.add("B");
//
//        System.out.println(hashSet);
//        System.out.println(linkedHashSet);
//
//        hashMap.put("치킨", "맛있따");
//        System.out.println(hashMap);

//        HashSet<Integer> p1 = new HashSet<>();
//        int input = 0;
//        while(true) {
//            System.out.println("자연수를 입력하세요: ");
//            input = scanner.nextInt();
//            if (input == -1) {
//                break;
//            }
//            p1.add(input);
//        }
//        System.out.println(p1);

        HashMap<String, Integer> p2 = new HashMap<>();
        String name;
        int age;

        while (true) {
            System.out.print("이름과 나이를 입력하세요: ");
            name = scanner.next();

            if(name.equals("종료")) {
                break;
            }
            age = scanner.nextInt();

            p2.put(name, age);
        }

        for (Map.Entry<String, Integer> entry: p2.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}