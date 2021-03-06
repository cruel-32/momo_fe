import React, { useState,  } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'

import { createValidator } from 'lib/validation/index.js';

import { SideMenu } from 'components/SideMenu/SideMenu.js'
import { SearchForm } from 'components/SearchForm/SearchForm.js'
import { ThemeCard } from 'components/ThemeCard/ThemeCard.js'
import { SwipeableMenu } from 'components/SwipeableMenu/SwipeableMenu.js'
import KakaoShareButton from 'components/Share/KakaoShareButton'

import btnLocation from 'images/icons/btn_location.svg'
import btnMenu from 'images/icons/btn_menu.svg'

import './MainPage.scss'

export const MainPage = props => {
    const [sideState, setSideState] = useState({
        left: false,
    })

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return
        }
        setSideState({ ...sideState, [side]: open })
    }

    const validate = () => {
        const valid = validator.validate({
            timer:"06:30:11",
            startDt:'2019-01-01',
            endDt:'2019-01-02 11:11:00',
            email:'test',
            phone:'02-1234-1234',
            crNo : "1가1234", //'가나다라', //
            perfInspId : 50,
            dspl:50,
            listA : [
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
                {
                    name : "csh",
                    age : 22,
                },
            ],
            listB : [
                {
                    name : "csh",
                    age : 22,
                },
            ],
            optionList : [
                "한글자", "한두글자", "1234 "
            ],
            choiceOPTList : [
                {
                    name : "test",
                    age : 22,
                },
                {
                    name : 'ABCD',
                    age : 55,
                },
                {
                    name : 'ABCD',
                    age : 20,
                },
            ],
            test : {
                name : 'ABCD',
                age : 40,
            },
        });
        console.log("validate -> valid", valid)

    }

    return (
        <div className="main">
            <button onClick={validate}>validation test</button>
            <div className="main__header">
                <Button className="main__btn"  onClick={toggleDrawer('left', true)}>
                    <img className="main__icon"  src={btnMenu} alt="menu" />
                </Button>
                <Button className="main__btn" >
                    <img className="main__icon"  src={btnLocation} alt="location" />
                </Button>
            </div>

            <div className="main__card main__card--pos-center">
                <KakaoShareButton
                    url="http://naver.com"
                    title="MOMO 테스트"
                    description="모모 테스트 중입니다"
                >
                    kakao 테스트 버튼
                </KakaoShareButton>
                <ThemeCard
                    contents={`한 주를 시작하는 월요일!<br/>무료함을 달래봐요.`}
                />
            </div>

            <div className="main__search-wrap main__search-wrap--center">
                <SearchForm />
            </div>

            <SwipeableMenu>
                <div>
                    <button>^</button>
                    <ul>
                        <li><button>menu1</button></li>
                        <li><button>menu2</button></li>
                        <li><button>menu3</button></li>
                        <li><button>menu4</button></li>
                    </ul>
                </div>
            </SwipeableMenu>
            
            <SwipeableDrawer
                anchor="left"
                open={sideState.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                <SideMenu setSideState={setSideState}></SideMenu>
            </SwipeableDrawer>
        </div>
    )
}

const validation = {
    empty : {
    },
    startDt : {
        format:'date',
    },
    timer : {
        format:'time',
    },
    endDt : {
        format:'dateTime',
    },
    email : {
        format : 'email',
    },
    phone : {
        format:'phone',
    },
    crNo: {
        format: 'crNo',
    }, // 차량번호
    perfInspId: {
        type: 'number',
        minimum : 20,
        maximum : 50,
    },
    dspl: {
        type: 'number',
        maximum : 100,
    }, // 배기량
    listA : {
        type: 'array',
        minItems : 1,
        maxItems : 50,
        items : {
            type : "object",
            properties : {
                name : {
                  type : 'string',
                  minLength : 2,
                  maxLength : 5,
                },
                age : {
                  type : 'number',
                  minimum : 10,
                },
            }
        },
    },
    listB : {
        type: 'array',
        minItems : 1,
        maxItems : 10,
        items : {
            type : "object",
            properties : {
                name : {
                  type : 'string',
                  minLength : 2,
                  maxLength : 5,
                },
                age : {
                  type : 'number',
                  minimum : 10,
                },
            }
        },
    },
    listC : {
        type: 'array',
        minItems : 2,
        maxItems : 10,
        items : {
            type : "object",
            properties : {
                name : {
                  type : 'string',
                  minLength : 2,
                  maxLength : 5,
                },
                age : {
                  type : 'number',
                  minimum : 10,
                },
            }
        },
    },
    optionList: {
        type: 'array',
        items: {
            type: 'string',
            minLength : 3,
            maxLength : 8,
        },
    }, // 옵션
    choiceOPTList: {
        type: 'array',
        items: {
          type: 'object',
          properties : {
              name : {
                type : 'string',
                minLength : 2,
                maxLength : 5,
              },
              age : {
                type : 'number',
                minimum : 10,
              },
          }
        }
    }, // 옵션
    option : {
        type : "string",
        minimum : 2,
        maximum : 4,
    },
    test : {
        type: 'object',
        properties : {
            name : {
              type : 'string',
              minLength : 2,
              maxLength : 5,
            },
            age : {
              type : 'number',
              minimum : 10,
              maximum : 50,
            },
        },
    }
}

const values1 = {
    crNo : '가나다라', //"1가1234", //
    perfInspId : 10,
    optionList : [
        "한글", "한두글자", "123456789"
    ],
    choiceOPTList : [
        {
            name : 'A',
            age : 9,
        },
        {
            name : 'ABCD',
            age : 55,
        },
        {
            name : 'ABCDEF',
            age : 20,
        },
    ],
    test : {
        name : 'ABCDEF',
        age : 20,
    },
    option : '',
}

const values2 = {
    crNo : '1가1234',
    perfInspId : 50,
    optionList : [
        "한글", "한두글자", "123456789"
    ],
    choiceOPTList : [
    ],
    test : {
        name : 'ABCDEF',
        age : 20,
    },
}

const validator = createValidator(validation, {
    required : ["dspl"]
});