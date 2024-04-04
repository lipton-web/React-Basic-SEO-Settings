# 프로젝트 개요

- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅

- `yarn create react-app`으로 만들었습니다.
- `yarn install` 프로젝트 셋팅

## Favicon 세팅

### 각 파일의 역할

- favicon.ico  
  웹사이트의 아이콘을 나타내는 파일입니다. 이 아이콘은 웹 브라우저의 주소 표시줄, 북마크 목록, 탭 제목 등에서 보여집니다.

- site.webmanifest  
  site.webmanifest와 manifest.json은 웹 애플리케이션의 메타데이터를 정의하는 파일입니다. 두 파일 모두 웹 애플리케이션을 PWA(Progressive Web App)로 만드는 데 사용되며, 앱의 이름, 아이콘, 시작 URL, 테마 색상 등을 정의합니다.  
  두 파일의 주요 차이점은 파일 이름입니다. manifest.json은 일반적인 파일 이름이지만, site.webmanifest는 명확한 표준 이름입니다. W3C 웹 앱 매니페스트 사양에서는 .webmanifest 확장자를 권장하고 있습니다.
  또한, site.webmanifest와 manifest.json 파일은 서버에서 올바른 MIME 타입(application/manifest+json)으로 제공되어야 합니다. 일부 서버는 .json 확장자를 자동으로 application/json으로 처리하지만, .webmanifest 확장자는 수동으로 설정해야 할 수도 있습니다.

- android-icon  
  Android 기기에서 웹 애플리케이션을 홈 화면에 추가할 때 사용되는 아이콘을 가리킵니다. 이 아이콘은 웹 애플리케이션의 manifest.json 또는 site.webmanifest 파일에 정의됩니다.
  아이콘은 다양한 크기와 해상도를 가질 수 있으며, Android 기기는 화면의 해상도와 크기에 따라 적절한 아이콘을 선택하여 표시합니다. 일반적으로 아이콘의 크기는 48x48, 72x72, 96x96, 144x144, 192x192 등 다양한 크기로 제공되며, 각각의 아이콘은 다음과 같이 manifest.json 파일에 정의됩니다:

- apple-icon  
  Apple 기기에서 웹 애플리케이션을 홈 화면에 추가할 때 사용되는 아이콘을 가리킵니다. 이 아이콘은 웹 애플리케이션의 HTML 파일에 <link> 태그를 사용하여 정의됩니다.
  아이콘은 다양한 크기와 해상도를 가질 수 있으며, Apple 기기는 화면의 해상도와 크기에 따라 적절한 아이콘을 선택하여 표시합니다. 일반적으로 아이콘의 크기는 57x57, 60x60, 72x72, 76x76, 114x114, 120x120, 144x144, 152x152, 180x180 등 다양한 크기로 제공되며, 각각의 아이콘은 다음과 같이 HTML 파일에 정의됩니다:

- browserconfig.xml  
  Microsoft의 Internet Explorer 및 Edge 브라우저에서 사용하는 설정 파일입니다. 이 파일은 웹사이트의 타일 이미지, 타일 색상 등을 정의합니다. 이러한 설정은 주로 Windows 8과 10의 시작 화면에서 웹사이트를 타일로 표시할 때 사용됩니다.

## SEO 스코어 분석

- 스코어 분석에 사용한 서비스: https://www.seobility.net/en/seocheck/  
  <a href="https://freetools.seobility.net/en/seocheck/react-basic-seo-settings.vercel.app"><img src="https://freetools.seobility.net/widget/widget.png?url=react-basic-seo-settings.vercel.app" alt="Seobility Score für react-basic-seo-settings.vercel.app"></a>

### 개선점

- 정적으로 html 파일이 생성되는 것이 아니기 때문에 브라우저의 크롤러는 기본 index.html을 바라보고있다.
- 서버사이드 렌더링이나 정적 사이트 생성을 해야 기본 html 내용에 SEO 적용한 내용이 들어있는다.
- Next.js로 개발을 하거나 node서버를 생성하고 react와 연동을 해야 합니다.
