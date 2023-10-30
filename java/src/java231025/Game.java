package java231025;

public interface Game {
    public void up(
    );

    public void down();

    public void left();

    public void right();

    default void start() {
        System.out.println("Power On");
    }
}
