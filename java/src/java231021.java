import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class java231021 {
    public static void main(String[] args){
        //p1();
        //p2();
        //p3();
        //p4();
        //p5();
        p6();
    }

    public static void p1() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("5개의 정수를 입력하세요: ");
        int age[] = new int[5];
        for (int i = 0; i < age.length; i++) {
            age[i] = scanner.nextInt();
        }
        int sum = 0;
        for (int value: age) {
            sum = sum + value;
        }

        System.out.print("평균은 " + (double)sum/age.length);
    }

    public static void p2() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("두 과목씩 점수를 입력하세요: ");
        int score[][] = new int[5][2];
        for (int i = 0; i < score.length; i++) {
            for(int j = 0; j < score[i].length; j++) {
                score[i][j] = scanner.nextInt();
            }
        }
        int sum = 0;
        for (int[] student: score) {
            for (int value: student) {
                sum = sum + value;
            }
        }

        System.out.print("평균은 " + (double)sum/10);
    }

    public static void p3() {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> arr = new ArrayList<>();

        while(true) {
            System.out.print("입력하세요: ");
            String tmp = scanner.next();
            if(tmp.equals("exit"))
                break;
            else
                arr.add(tmp);
        }

        System.out.print(arr);
    }

    public static void p4() {
        int arr[] = new int[4];

        try {
            for (int i = 0; i < 5; i++) {
                arr[i] = i;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }


    public static void p5() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("배열의 크기를 입력하세요: ");
        try {
            int length = scanner.nextInt();
            int arr[] = new int[length];

            for (int i = 0; i < length; i++) {
                System.out.print("배열의 원소를 입력하세요: ");
                arr[i] = scanner.nextInt();
            }

            int sum = 0;
            for (int value: arr) {
                sum += value;
            }

            System.out.println("평균은 " + sum / length + "입니다.");

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void p6() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("배열의 크기를 입력하세요: ");
        try {
            int length = scanner.nextInt();
            int arr[] = new int[length];
            ArrayList<Integer> tmp = new ArrayList<>();
            ArrayList<String> jungbok = new ArrayList<>();

            System.out.print("배열의 원소를 입력하세요: ");
            for (int i = 0; i < length; i++) {
                arr[i] = scanner.nextInt();
            }
            Arrays.sort(arr);

            for (int i = 0; i < length - 1; i++) {
                if(arr[i] == arr[i + 1]) {
                    tmp.add(arr[i]);
                }

                if(i != 0) {
                    if(arr[i - 1] == arr[i] && arr[i] != arr[i + 1]) {
                        tmp.add(arr[i]);
                    }
                }

                if(i == length - 2 && arr[i - 1] == arr[i]) {
                    tmp.add(arr[i]);
                }

                if((arr[i] != arr[i + 1] || i + 2 == length) && tmp.size() != 0) {
                    jungbok.add(tmp.toString());
                    tmp.clear();
                }
            }

            System.out.println(jungbok);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
