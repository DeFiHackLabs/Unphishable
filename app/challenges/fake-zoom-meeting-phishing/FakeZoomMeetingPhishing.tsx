"use client";

import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import FakeZoomMeetingPhishingSuccessContent from './FakeZoomMeetingPhishingSuccessContent';

import Image from "next/image";
import { useState } from "react";
import zoomLogo from "@/public/images/zoom/zoom-logo.png";
import zoomImg from "@/public/images/zoom/zoom.png";
import avatarImg from "@/public/images/zoom/avatar.png";
import "@/app/styles/zoom.css";

export default function FakeZoomPhishing() {
const [showModal, setShowModal] = useState(false);
const [showSupport, setShowSupport] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [falseMessage, setfalseMessage] = useState(false);
const [showCompletionModal, setShowCompletionModal] = useState(false);
const [showQuestion, setShowQuestion] = useState(false);
const [question1, setQuestion1] = useState(0);
const [question2, setQuestion2] = useState(0);
const [question3, setQuestion3] = useState(0);
const [question4, setQuestion4] = useState(0);
const [question5, setQuestion5] = useState(0);
const [questionTips, setQuestionTips] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

const { t } = useLanguage();

  return (
    <div className='p-4'>
        {!showCompletionModal && (
            <div className="tg-box">
                <h1>{t.fakeZoomMeetingPhishing.title}</h1>
                <h2 className="tit">{t.fakeZoomMeetingPhishing.intro}</h2>
                <div className="tg-con">
                    <div className="tg-message" onClick={() => {
                        setShowModal(true) //弹框
                        setfalseMessage(false)
                        setShowSupport(false)
                        setShowQuestion(false)
                        setQuestion1(0);
                        setQuestion2(0);
                        setQuestionTips(false);
                        setIsSubmitted(false);
                        setShowCompletionModal(false); // 重置
                    }}>
                        <div className="info">hey Kevin. pls join us in company team meeting.</div>
                        <a href="https://dragonfly.us05web-zoom.biz/j/3588102658%3Fpwd=gEbIdyyl2wSn9pHfcqjQKaOLB0XoYZ.1" className="link"
                            onClick={(e) => {
                                e.preventDefault(); // 阻止默认跳转行为
                                setShowModal(true); // 保持原有的模态框显示逻辑
                            }}
                        >https://us05web.zoom.com/i/3588102658%3Fpwd=gEbldyyl2wSn9pHfcajQKa0LBOXoYZ.1</a>
                        <div className="zoom-box">
                                <div className="from">Zoom</div>
                                <div className="title">Join our Cloud HD Video Meeting</div>
                                <div>Zoom is the leader in modern enterprise cloudcommunications.</div>
                                <Image src={zoomImg} alt="Zoom" />
                        </div>
                    </div>
                    <div className="avatar"><Image src={avatarImg} alt="avatar" /></div>
                </div>
                <p className='tips-copyright'>* {t.fakeZoomMeetingPhishing.tips}</p>

                <div className={`t-box ${showModal ? 'block' : 'hidden'}`}>
                    <div className="t-bg"></div>
                    <div className="t-con">
                        <div className="top">
                            <a onClick={() => {
                                setShowModal(false);
                                setShowSupport(false);
                                setShowQuestion(true); // 实操成功显示问题
                            }}
                            className="btn-close"></a><i className="btn-1"></i><i className="btn-2"></i><i className="btn-3"></i>
                        </div>
                        <div className="url"><span>https://dragonfly.us05web-zoom.biz/j/3588102658%3Fpwd=gEbIdyyl2wSn9pHfcqjQKaOLB0XoYZ.1</span></div>
                        {!showSupport && (
                        <div className="vedio">
                                <div className="tips"><i></i>Zoom Meeting is not working properly because your Zoom SDK is deprecated. Please update your Zoom SDK.
                                    <a href="javascript:;" onClick={(e) => { e.preventDefault(); setShowSupport(true); }}>Update Now</a>
                                </div>
                                <video
                                    src="/images/zoom/vedio.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/images/zoom/vedio.jpg"
                                    className="w-full rounded"
                                    />
                            </div>
                        )}
                        {showSupport && (
                        <div className="support">
                            <div className="title"><Image src={zoomLogo} alt="zoomLogo" /> Support</div>
                            <h3>Troubleshooting SDK issues</h3>
                            <p><em className="fw">Note:</em> This meeting is an organizational meeting, developed using the <em className="fw">Zoom Meeting SDK</em>, to ensure complance with securty requirements.</p>
                            <p>We have identified some issues due to compatilbility constraints with the <em className="fw">Zoom Meeting SDK</em>. To resolve this issue:</p>
                            <ul className="listyle">
                                <li>Please update the SDK as follow.</li>
                                <li>Rejoin the meeting after troubleshooting the issue.</li>
                            </ul>
                            <p>You can automatically resolve this issue by following the solution below.</p>
                            <h3>Solution:</h3>
                            <p>1. Update Zoom SDK.</p>
                            <div className="run-box">
                                <div className="top-tit">
                                    <a className="btn-copy"
                                    onClick={() => {
                                        setShowModal(false);
                                        setfalseMessage(true); // 标记挑战失败
                                        setShowCompletionModal(false);
                                    }}
                                    ><i></i>Copy</a>
                                    Run this command on Terminal.
                                </div>
                                <div className="run-con">
                                    <dl>
                                        <dd>set ZOOM_API_KEY="BOtlweWKewotkWQKEWODNXCSK"</dd>
                                        <dd>set ZOOM_API_SECRET="QYrYiRfRTYTPL7RVZO9yRtHs2MXZSQV7"</dd>
                                        <dd>set ZOOM_MEETING_ID="8792352352"</dd>
                                        <dd>set ZOOM_SDK_UTILITY="normal"</dd>
                                        <dd>set ZOOM_SDK_LEVEL="High"</dd>
                                        <dd>set ZOOM_LANGUAGE="en-US"</dd>
                                    </dl>
                                </div>
                            </div>
                            <p>2. Rejoin the meeting.</p>
                            <ul className="listyle">
                                <li>Zoom desktop client</li>
                                <li>Zoom mobile app</li>
                            </ul>
                            <h3>Why this happens:</h3>
                            <p>The SDK is not working properly due to compatibility issues, which might be caused by:</p>
                            <ul>
                                <li>1. <em className="fw">Outdated SDK Version:</em> An older version of the SDK may not fully support your device.</li>
                                <li>2. <em className="fw">Unknown Environment Settings:</em> Older or unsupported environement can lead to incompatibility with the SDK.</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>

                {falseMessage && (
                    <div className="false-message mt-4 p-4 bg-red-100 text-red-700 rounded">
                        <h3 className='font-bold mb-2'>❌ {t.fakeZoomMeetingPhishing.falseMessageTitle}</h3>
                        <p>{t.fakeZoomMeetingPhishing.falseMessage}</p>
                    </div>
                )}

                {showQuestion && !falseMessage &&(
                        <div className='question-box'>
                            <h2>{t.fakeZoomMeetingPhishing.questions.title}</h2>
                            <ul>
                                <li>
                                    <h3>1. {t.fakeZoomMeetingPhishing.questions.question1.text}</h3>
                                    <label><input type="radio" name="question1" value="yes"
                                    onChange={() => setQuestion1(1)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question1.options[0]}</label>
                                    <label><input type="radio" name="question1" value="no"
                                    onChange={() => setQuestion1(2)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question1.options[1]}</label>
                                    {isSubmitted && (question1 === 1) && (
                                        <p>{t.fakeZoomMeetingPhishing.questions.question1.tips}</p>
                                    )}
                                </li>
                                <li>
                                    <h3>2. {t.fakeZoomMeetingPhishing.questions.question2.text}</h3>
                                    <label><input type="radio" name="question2" value="yes"
                                    onChange={() => setQuestion2(1)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question2.options[0]}</label>
                                    <label><input type="radio" name="question2" value="no"
                                    onChange={() => setQuestion2(2)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question2.options[1]}</label>
                                    {isSubmitted && (question2 === 1) && (
                                        <p>{t.fakeZoomMeetingPhishing.questions.question2.tips}</p>
                                    )}
                                </li>
                                <li>
                                    <h3>3. {t.fakeZoomMeetingPhishing.questions.question3.text}</h3>
                                    <label><input type="radio" name="question3" value="yes"
                                    onChange={() => setQuestion3(1)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question3.options[0]}
                                    </label>
                                    <label><input type="radio" name="question3" value="no"
                                    onChange={() => setQuestion3(2)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question3.options[1]}
                                    </label>
                                    {isSubmitted && (question3 === 2) && (
                                        <p>{t.fakeZoomMeetingPhishing.questions.question3.tips}</p>
                                    )}
                                </li>
                                <li>
                                    <h3>4. {t.fakeZoomMeetingPhishing.questions.question4.text}</h3>
                                    <label><input type="radio" name="question4" value="yes"
                                    onChange={() => setQuestion4(1)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question4.options[0]}
                                    </label>
                                    <label><input type="radio" name="question4" value="no"
                                    onChange={() => setQuestion4(2)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question4.options[1]}
                                    </label>
                                    {isSubmitted && (question4 === 1) && (
                                        <p>{t.fakeZoomMeetingPhishing.questions.question4.tips}</p>
                                    )}
                                </li>
                                <li>
                                    <h3>5. {t.fakeZoomMeetingPhishing.questions.question5.text}</h3>
                                    <div><label><input type="radio" name="question5" value="yes"
                                    onChange={() => setQuestion5(1)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question5.options[0]}
                                    </label></div>
                                    <div><label><input type="radio" name="question5" value="no"
                                    onChange={() => setQuestion5(2)}
                                    /> {t.fakeZoomMeetingPhishing.questions.question5.options[1]}
                                    </label></div>
                                    {isSubmitted && (question5 === 2) && (
                                        <p>{t.fakeZoomMeetingPhishing.questions.question5.tips}</p>
                                    )}
                                </li>
                            </ul>
                            <div className='btn-save'><a
                                onClick={() => {
                                    setQuestionTips(true);
                                    setIsSubmitted(true);
                                    if (question1===2 && question2===2 && question3===1 && question4===2 && question5===1) {
                                        setShowCompletionModal(true);
                                    }
                                }}
                            >{t.fakeZoomMeetingPhishing.questions.Submit}</a></div>
                            {isSubmitted && question1===0 && question2===0 && question3===0 && question4===0 && question5===0 && questionTips && (
                                <p className='question-tips'>{t.fakeZoomMeetingPhishing.questions.completeTips}</p>
                            )}
                        </div>
                )}

            </div>
        )}
        <ChallengeCompletionModal
            isOpen={showCompletionModal}
            onClose={() => setShowCompletionModal(false)}
            challengeKey="fake-zoom-meeting-phishing"
            successContent={<FakeZoomMeetingPhishingSuccessContent successMessage={successMessage} />}
        />
    </div>
  )
}
