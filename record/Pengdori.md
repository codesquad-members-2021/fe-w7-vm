- [x] express-generator 말고 그냥 express로 서버 구축하기.

- [x] babel 구축하기.

- [x] webpack 구축하기.

3월 22일

1. express 서버 구축(generator x)
2. babel 설치

- --save-dev : 설치 옵션으로 설치 모듈들을 devDependencies에 추가합니다.

- @babel/cli : 명령 프롬프트 창(터미널)에서 babel을 쓸 수 있게 합니다.

- @babel/core : babel의 주요 기능들을 담고 있는 모듈입니다.

- @babel/preset-env : 타깃 브라우저를 입력한 경우 해당 브라우저 환경에 맞게 자동으로 최신 JavaScript문법을 사용할 수 있게 합니다. 타깃이 지정되지 않는 경우 ECMAScript2015+ 코드로 기본적으로 변환됩니다.

3. webpack 설치

지금 현재 bundle.js 가 2개가 뜬다. 하나는 404로 에러가 생기고 하나는 200으로 정상처리가 된다. 왜 이렇게 되는걸까? ..
