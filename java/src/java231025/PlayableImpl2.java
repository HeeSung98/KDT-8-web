package java231025;

public class PlayableImpl2 implements Playable{
    @Override
    public void play() {
        System.out.println("DVD 음악을 재생합니다.");
    }

    @Override
    public void pause() {
        System.out.println("DVD 음악을 정지합니다.");
    }

    @Override
    public void stop() {
        System.out.println("DVD 음악을 중지합니다.");
    }
}
