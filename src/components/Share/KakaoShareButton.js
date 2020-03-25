import { useEffect, memo } from "react"

const globalThis = require('globalthis')()
const isClient = !!globalThis.window

const KakaoShareButton = ({
    appUrl, mUrl, url, imageUrl="https://search.pstatic.net/common/src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDAzMTlfMjE5%2FMDAxNTg0NjA3ODg0NDA0.BVGLYZgMK6AwED8l-BgVEz7YFaeyl6vH6GtPGbAnurQg.RF87sJGaWuZsVGecWg2LxNHJfJhKPJcd6zBXH-X9f_0g.JPEG%2FIa3Ex8ttDzITDTB8HcqPE1HvpGI8.jpg&type=b400",
    children, title="MoMo", description="모모앱입니다"
}) => {
    const init = () => {
        if(!globalThis.window.Kakao.isInitialized()){
            globalThis.window.Kakao.init('7e06f58d0aa5b47b2e190d6c0ab804bb') //임시키
            // Kakao.init('4a7be481fb849c9e5bfc5a9c4436ac3b')
        }
        
        globalThis.window.Kakao.Link.createDefaultButton({
            container: '#kakaoShareBtn',
            objectType: 'feed',
            content: {
                title,
                description,
                imageUrl,
                link: {
                    mobileWebUrl: mUrl || url,
                    webUrl: url
                }
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: mUrl || url,
                        webUrl: url
                    }
                },
                {
                    title: '앱으로 보기',
                    link: {
                        mobileWebUrl: appUrl || url,
                        webUrl: appUrl || url,
                    }
                }
            ]
        });
    }

    useEffect(()=>{
        if(isClient){
            if(!globalThis.window.document.getElementById('KakaoJSSDK')) {
                console.log('append')
                const scriptKakaoJS = globalThis.window.document.createElement('script')
                scriptKakaoJS.id = 'KakaoJSSDK'
                scriptKakaoJS.src = '//developers.kakao.com/sdk/js/kakao.min.js'
                globalThis.window.document.body.appendChild(scriptKakaoJS)

                scriptKakaoJS.onload = () => {
                    init()
                }
            } else {
                init()
            }
        }
        return () => {
            if(isClient && typeof globalThis.window.document.queryaSelector === 'function'){
                const script = globalThis.window.document.queryaSelector('#KakaoJSSDK')
                if(script) script.remove()
            }
        }
    },[])

    return (
        <>
            <button type="button" id="kakaoShareBtn">
                {children}
            </button>
        </>
    )
}

export default memo(KakaoShareButton)
