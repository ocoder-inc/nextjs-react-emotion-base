/** @jsxImportSource @emotion/react */
'use client';

import * as S from './page.styles';

export default function Home() {
  return (
    <S.containerStyle>
      <S.mainStyle>
        <S.logoStyle
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <S.contentStyle>
          <S.headingStyle>Next.js React Emotion Starter</S.headingStyle>
          <S.paragraphStyle>
            Looking for a starting point or more instructions? Head over to{' '}
            <S.linkStyle href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
              Templates
            </S.linkStyle>{' '}
            or the{' '}
            <S.linkStyle href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
              Learning
            </S.linkStyle>{' '}
            center.
          </S.paragraphStyle>
        </S.contentStyle>
        <S.buttonsContainerStyle>
          <S.linkStyle
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.logoStyle
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </S.linkStyle>
          <S.linkStyle
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </S.linkStyle>
        </S.buttonsContainerStyle>
      </S.mainStyle>
    </S.containerStyle>
  );
}
