기존 프리뷰를 사용하지않고,
cpu를 재사용해서 보여주기위한 프리뷰 프론트 코드입니다.
feat/preview 브랜치를 사용중이고,

queuePrompt api 호출 시 에러를 던지는 등
불필요한 액션 방지하고 프리뷰로만 쓰일수있도록 조치가 들어가있습니다.

이걸넣고 nordy에서는 comfyCpu를 iframe으로 보여줌
도메인 값은 nordy front env에 있음 2024.11.22 기준 아래와 같은 도메인 사용중
.env.dev >> VITE_NORDY_COMFY_API_URL=https://comfy-cpu.dev.nordy.ai
.env.prod >> VITE_NORDY_COMFY_API_URL=https://comfy-cpu.prod.nordy.ai



업데이트할것이 있다면 프로젝트 빌드 후 dist에 있는 결과물 전부를 ComfyUI/web/assets 안에 넣으면 업데이트됨
왜이리 수동적이느냐? 원래 그렇게 만들어져있었다.

1. 해당 레포 git clone
2. yarn
3. yarn build
4. dist 폴더에 생성된 결과물 확인
5. nordy-ComfyUI/web/assets_nordy 폴더 내부 파일 모두 삭제
6. dist 내부 파일 모두 복사 붙여넣기
7. nordy-ComfyUI 변경사항 commit 하기
8. git tag cpu...gpu... 배포 진행하기
