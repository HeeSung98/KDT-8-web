import { Link } from 'react-router-dom';

const users = [
    {
        id: 1,
        name: '홍길동',
        comment: [
            {
                text: '안녕하세요',
            },
        ],
    },
    {
        id: 2,
        name: '이몽룡',
        comment: [
            {
                text: '반갑습니다',
            },
        ],
    },
    {
        id: 3,
        name: '임꺽정',
        comment: [
            {
                text: '어서오세요',
            },
        ],
    },
];

export default function User() {
    return (
        <div>
            <ul>
                {users.map((value) => {
                    return (
                        <li key={value.id}>
                            <Link to={`/user/${value.id}`}>{value.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
