import React, { useEffect } from 'react'


const KakaoShareButton = () => {
    const { Kakao } = window
    
    console.log('Kakao : ', Kakao)

    const kakaoLogin = () => {
        Kakao.Auth.login({
            success(authObj) {
                console.log("TCL: kakaoLogin -> authObj", authObj)
                getFriends()
            },
            fail(err) {
                console.log("TCL: kakaoLogin -> err", err)
            }
          })

    }

    const getFriends = () => {
        Kakao.API.request({
            url: '/v1/api/talk/friends',
            success(res) {
                console.log("TCL: getFriends -> res", res)
            },
            fail(error) {
                console.log("TCL: getFriends -> error", error)
            }
        })
    }

    //test

    const getMyInfo = () => {
        Kakao.API.request({
            url: '/v2/user/me',
            success(res) {
                console.log("TCL: success -> res", res)
            },
            fail(error) {
                console.log("TCL: fail -> error", error)
            }
        })
    }


    return (
        <>
            <button onClick={kakaoLogin}>카카오 공유 디자인</button>
            <button onClick={getMyInfo}>카카오 내정보</button>
        </>
    )
}

export {
    KakaoShareButton
}