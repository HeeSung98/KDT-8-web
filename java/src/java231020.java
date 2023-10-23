import java.util.Scanner;

public class java231020 {
    public static void main(String[] args){
        calc(5);
        calc(7, 4);
        calc(3, 6, 2);
    }

    public static void p1() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("이름을 입력하세요: ");
        String name = scanner.next();
        System.out.print("나이를 입력하세요: ");
        int age = scanner.nextInt();

        if(name.equals("유니성"))
            System.out.print("안녕하세요" + name + "님! (" + age + "세)");
    }

    public static void p2() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("나이를 입력하세요: ");
        int age = scanner.nextInt();

        if (age <= 7) {
            System.out.println("유아");
        }
        else if (age <= 13) {
            System.out.println("초딩");
        }
    }

    public static void p3() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("이름를 입력하세요: ");
        String name = scanner.next();

        if(name.equals("유니성"))
            System.out.print("남자");
        else if (name.equals("성춘향"))
            System.out.print("여자");
        else
            System.out.print("몰라");
    }

    public static void p4() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("나이를 입력하세요: ");
        int age = scanner.nextInt();

        for (int i = 0; i <= age; i++) {
            System.out.print(i + " ");
        }
    }

    public static void p5() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("숫자 두 개를를 입력하세요: ");
        float num1 = scanner.nextInt();
        float num2 = scanner.nextInt();

        System.out.println("덧셈 결과: " + (num1 + num2));
        System.out.println("뺄셈 결과: " + (num1 - num2));
        System.out.println("곱셈 결과: " + (num1 * num2));
        System.out.println("나눗셈 결과: " + (num1 / num2));
    }

    public static void calc(float f) {
        System.out.println("반지름이 " + f + "인 원의 넓이: " + (f * f * 3.14));
    }

    public static void calc(float a, float b) {
        System.out.println("가로 " + a + "세로 " + b +"인 직사각형의 넓이: " + (a * b));
    }

    public static void calc(float a, float b, int c) {
        System.out.println("및변 " + a + "높이 " + b + "인 삼각형의 넓이: " + (a * b / c));
    }
}
