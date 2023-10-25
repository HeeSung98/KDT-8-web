package java231024;

public class Student extends Person{
    private String major;

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    Student (String name, int age, String major) {
        super(name, age);
        this.major = major;
    }

    @Override
    public String toString() {
        return "Student / " + super.toString() + ", major: " + major;
    }
}
