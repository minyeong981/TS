// let 이름 :string = 'kim'
// let 나이 :number = 50
// let 결혼했니 :boolean = true
// let 자식있니 :null = null

// let 회원들 :string[] = ['kim', 'park']
// let 회원들2: {member1 : string, member2 : string} = {member1 : 'kim', member2 : 'park'}

// // typescript의 경우 자동으로 타입이 지정되기 때문에 문법 생략 가능
// let 회원 = 'park'

// // 실습 1. 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담기
// let favorit :{title : string, singer : string} = {title : 'body', singer : 'Highlight'}

// // 실습 2. 자료의 타입 지정 해보기
// let project :{ 
//     member : string[], 
//     days : number, 
//     started : boolean
// } = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true
// }

let 회원 :(number | string | boolean) = 1234
회원 = 'kim'

let 회원들 :(string | number)[] = [1, '2', 3]
// let 회원들 :string | number[] => '일이삼사' 또는 [1234]
let 오브젝트 :{a : string | number} = {a : 123}

// any type : 모든 자료 허용해줌 -> typescript
// 타입 실드 해제 문법 -> 버그 추적 어려움
// => unknown 타입
let 이름 :unknown
이름 = 1234
이름 = []

