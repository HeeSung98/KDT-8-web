package java231026;

import java.util.ArrayList;

public class MyCustomListGeneric<T> {
    ArrayList<T> list = new ArrayList<>();

    public void addElement(T element) {
        list.add(element);
    }
    public void removeElement(T element) {
        list.remove(element);
    }
    public T get(int index) {
        return list.get(index);
    }
}
