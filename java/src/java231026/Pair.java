package java231026;

public class Pair<T> {
    private T key, value;

    Pair (T key, T value) {
        this.key = key;
        this.value = value;
    }

    public T getKey() {
        return key;
    }

    public T getValue() {
        return value;
    }


}
