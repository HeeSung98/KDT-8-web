package java231024;

public class Kim extends AbstractStudent{
    Kim(String name, int age, String school, int id) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.id = id;
    }

    @Override
    public String todo() {
        return "오늘 점심은 김가네";
    }
}
