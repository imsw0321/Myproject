import React from 'react';
import '../CSS/Introduce.css';

function SelfIntro1() {
    return (
        <div className="Maincontent_SelfIntro">
            <div className="Intro_box_self">
                <p>
                    <img src={process.env.PUBLIC_URL + "/mation.png"} width="20px" height="18px" alt="infor" />
                    기본정보
                </p>
                <hr></hr>
                <p>김선우 Kim Sun Woo</p>
                <p>2003.03.21 만 20세</p>
                <p>010-7211-4634</p>
                <p>imsw0321@naver.com</p>
                <p>본전공: 경영학과 | 복수전공: 컴퓨터공학과</p>
            </div>

            <div className="Intro_box_self">
                <p>
                    <img src={process.env.PUBLIC_URL + "/school.png"} width="20px" height="18px" alt="sch" />
                    학력사항
                </p>
                <hr></hr>
                <p>2010.03~2016.02 대전구봉초등학교 졸업</p>
                <p>2016.03~2019.02 대전봉우중학교 졸업</p>
                <p>2019.03~2022.02 대전구봉고등학교 졸업</p>
                <p>2022.03~ 가천대학교 재학중</p>
            </div>

            <div className="Intro_box_self">
                <p>
                    <img src={process.env.PUBLIC_URL + "/technical.png"} width="20px" height="20px" alt="tech" />
                    기술</p>
                <hr></hr>
                <p>C언어 ★★☆☆</p>
                <p>React ★★★☆☆</p>
                <p>Python ★★★★☆</p>
                <p>Rcode ★★★☆☆</p>
            </div>

            <div className="Intro_box_self">
                <p>
                    <img src={process.env.PUBLIC_URL + "/card.png"} width="20px" height="18px" alt="card" />
                    자격증
                </p>
                <hr></hr>
                <p>2022.06 운전면허 2종</p>
                <p>2023.07 컴퓨터활용능력 1급 필기</p>
                <p>2024.03 SQLD 자격증</p>
                <p>2024.03 ADSP 자격증 </p>
            </div>
        </div>
    );
}

export default SelfIntro1;
