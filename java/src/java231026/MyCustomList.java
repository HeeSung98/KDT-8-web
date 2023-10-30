package java231026;

import java.util.ArrayList;

class MyCustomList {
    ArrayList<String> list = new ArrayList<>();

    public void addElement(String element) {
        list.add(element);
    }
    public void removeElement(String element) {
        list.remove(element);
    }
}

