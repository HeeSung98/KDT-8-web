package java231023;

import java.util.ArrayList;

public class Rectangle {
    static int rectCount = 0;

    Rectangle() {
        rectCount += 1;
    }
    int width;

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    int height;

    public void area() {
        System.out.println("넓이는 " + (width * height) + "입니다.");
    }
}
