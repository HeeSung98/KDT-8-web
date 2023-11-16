package kdt.jpa.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserDTO {
    private long id;
    private String name;
    private String nickname;
}
