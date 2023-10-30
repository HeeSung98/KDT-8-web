package java231025;

public class PlayableImpl1 implements Playable{
    @Override
    public void play() {
        System.out.println("MP3 음악을 재생합니다.");
    }

    @Override
    public void pause() {
        System.out.println("MP3 음악을 정지합니다.");
    }

    @Override
    public void stop() {
        System.out.println("MP3 음악을 중지합니다.");
    }
}
