package java231027.T4;

public class Book implements Borrowable{
    String title, writer, publisher;
    int year;

    public Book(String title, String writer, String publisher, int year) {
        this.title = title;
        this.writer = writer;
        this.publisher = publisher;
        this.year = year;
    }

    @Override
    public void borrow() {

    }

    @Override
    public void returnItem() {

    }
}
