package java231023;

import java.util.ArrayList;
import java.util.Scanner;

public class Main
{
    public static void main(String[] args) {
        ArrayList<Rectangle> arr = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        int width, height;

        while(true) {
            Rectangle rectangle = new Rectangle();
            System.out.println("가로와 세로를 입력하세요: ");
            width = scanner.nextInt();
            height = scanner.nextInt();

            if (width == 0 && height == 0) {
                break;
            }
            rectangle.setWidth(width);
            rectangle.setHeight(height);

            arr.add(rectangle);
        }

        for(int i = 0; i < arr.size(); i++) {
            System.out.println("가로는 " + arr.get(i).getWidth() + ", 세로는 " + arr.get(i).getHeight());
            arr.get(i).area();
        }
        System.out.println("Rectangle 개수는 " + Rectangle.rectCount + "개 입니다.");
}
}
